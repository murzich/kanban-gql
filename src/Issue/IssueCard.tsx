import { Card, Classes, Elevation, H2 } from '@blueprintjs/core';
import React from 'react';
import styles from './IssueCard.module.scss';

export type IssueProps = {
  /** 
   * Issue unique id like "TEST-123".
   * 
   * TODO: change to required?
   */
  id?: string;
  /** Issue summary or title */
  summary?: string;
  /** Issue description, may be hidden */
  description?: string;
};

/**
 * Issue component styled as card with ID, title and description.
 */
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
