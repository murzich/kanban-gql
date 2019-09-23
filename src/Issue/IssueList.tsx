import { Classes } from '@blueprintjs/core';
import React from 'react';
import clsx from 'clsx';
import IssueCard, { IssueProps } from './IssueCard';
import styles from './IssueList.module.scss';

export type IssueListProps = {
  issues?: IssueProps[];
};

const IssueList: React.FC<IssueListProps> = ({ issues = [] }) => (
  <ul className={clsx(Classes.LIST_UNSTYLED, styles.root)}>
    {issues.map((issue, i) => (
      <IssueCard key={issue.id} {...issue} />
    ))}
  </ul>
);

export default IssueList;
