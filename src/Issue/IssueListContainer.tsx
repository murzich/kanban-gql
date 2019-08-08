import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import Loading from '../shared/Loading';
import IssueList, { IssueListProps } from './IssueList';
import { GET_ALL_ISSUES_QUERY } from './issueSchema';

const IssueListContainer: React.FC = () => {
  const { loading, error, data } = useQuery<IssueListProps>(
    GET_ALL_ISSUES_QUERY,
  );
  if (loading) return <Loading />;
  if (error) return <p>Error!</p>;

  return <IssueList issues={data && data.issues} />;
};

export default IssueListContainer;
