import { Classes } from '@blueprintjs/core';
import React from 'react';
import IssueCard from './IssueCard';

const IssueList: React.FC = () => (
  <ul className={Classes.LIST_UNSTYLED}>
    <IssueCard />
    <IssueCard />
    <IssueCard />
  </ul>
);

export default IssueList;
