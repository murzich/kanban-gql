import { Card, H2 } from '@blueprintjs/core';
import React from 'react';
import styles from './ColumnItem.module.scss';

export type ColumnItemProps = {
  /** unique title of the column */
  title: string;
  /** the children will be rendered inside column: expected an IssueList */
  children?: React.ReactNode;
};

/**
 * Exactly the representation of a column with title and issues list inside.
 */
const ColumnItem: React.FC<ColumnItemProps> = ({ children, title }) => (
  <Card className={styles.root}>
    <H2>{title}</H2>
    {children}
  </Card>
);

export default ColumnItem;
