import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, RenderResult } from '@testing-library/react';
import React from 'react';
import IssueList from '../IssueList';

afterEach(cleanup);

describe('IssueList', () => {
  it('should be rendered', () => {
    const { getByRole } = render(<IssueList />);

    expect(getByRole('list')).toBeDefined();
  });

  describe('displays passed Issue items data', () => {
    const issues = [
      {
        id: 'TEST-1',
        summary: 'Test summary 1',
        description: 'Test issue description 1',
      },
      {
        id: 'TEST-2',
        summary: 'Test summary 2',
        description: 'Test issue description 2',
      },
      {
        id: 'TEST-3',
        summary: 'Test summary 3',
        description: 'Test issue description 3',
      },
      {
        id: 'TEST-4',
        summary: 'Test summary 4',
        description: 'Test issue description 4',
      },
    ];

    let container: RenderResult;
    let renderedIssues: HTMLElement[];

    beforeEach(() => {
      container = render(<IssueList issues={issues} />);
      renderedIssues = container.getAllByRole('article');
    });

    it('with same count', () => {
      expect(container.getByRole('list').childElementCount).toBe(issues.length);

      expect(renderedIssues.length).toBe(issues.length);
    });

    it('in the same order', () => {
      issues.forEach((issue, i) => {
        Object.values(issue).map(text => {
          expect(renderedIssues[i]).toContainHTML(container.getByText(text).outerHTML);
        });
      });
    });
  });
});
