import { Card, H2 } from '@blueprintjs/core';
import React from 'react';

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
  <Card>
    <H2>{title}</H2>
    {children}
  </Card>
);

export default ColumnItem;
