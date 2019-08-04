import { Classes } from '@blueprintjs/core';
import React from 'react';
import IssueCard, { IssueProps } from './IssueCard';

type IssueListProps = {
  issues?: IssueProps[];
};

const IssueList: React.FC<IssueListProps> = ({ issues = [] }) => (
  <ul className={Classes.LIST_UNSTYLED}>
    {issues.map((issue, i) => (
      <IssueCard key={issue.id} {...issue} />
    ))}
  </ul>
);

export default IssueList;
