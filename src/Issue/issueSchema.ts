import gql from 'graphql-tag';

export const GET_ISSUE_QUERY = gql`
  query getIssue($id: String) {
    id
    summary
    description
  }
`;

export const GET_ALL_ISSUES_QUERY = gql`
  query getIssues {
    issues {
      id
      summary
      description
    }
  }
`;
