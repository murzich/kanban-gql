import { render, cleanup, waitForElement } from '@testing-library/react';
import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import IssueListContainer from '../IssueListContainer';
import { GET_ALL_ISSUES_QUERY } from '../issueSchema';

afterEach(cleanup);

describe('IssueListContainer', () => {
  const issuesStub = [
    { id: '1', summary: 'sum1', description: 'desc1' },
    { id: '2', summary: 'sum2', description: 'desc2' },
    { id: '3', summary: 'sum3', description: 'desc3' },
    { id: '4', summary: 'sum4', description: 'desc4' },
    { id: '5', summary: 'sum5', description: 'desc5' },
    { id: '6', summary: 'sum6', description: 'desc6' },
  ];

  const mocks = [
    {
      request: {
        query: GET_ALL_ISSUES_QUERY,
      },
      result: {
        data: {
          issues: issuesStub,
        },
      },
    },
  ];

  it('should be rendered', async () => {
    const { getByRole } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <IssueListContainer />
      </MockedProvider>,
    );

    // Awaiting added to handle useQuery hook & MockedProvider.
    const listElement = await waitForElement(() => getByRole('list'));

    expect(listElement).toBeDefined();
  });

  it('displays fetched by GraphQL issues', async () => {
    const { getByText, getAllByRole } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <IssueListContainer />
      </MockedProvider>,
    );

    await waitForElement(() => getByText('desc1'));

    expect(getAllByRole('article')).toHaveLength(issuesStub.length);
  });
});
