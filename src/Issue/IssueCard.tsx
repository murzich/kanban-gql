import { Card, Classes, Elevation, H2 } from '@blueprintjs/core';
import React from 'react';
import styles from './IssueCard.module.scss';

export type IssueProps = {
  // Issue unique id like "TEST-123"
  id?: string; // TODO: change to required?
  // Issue summary or title
  summary?: string;
  // Issue description, may be hidden
  description?: string;
};

const IssueCard: React.FC<IssueProps> = ({ id, summary, description }) => (
  <Card
    role="article"
    interactive
    elevation={Elevation.TWO}
    className={styles.root}
  >
    <header>
      <p className={Classes.HEADING}>{id}</p>
      <H2>{summary}</H2>
    </header>
    <div>{description}</div>
  </Card>
);

export default IssueCard;
