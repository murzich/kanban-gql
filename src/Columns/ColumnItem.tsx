import { Card, H2, Button } from '@blueprintjs/core';
import React, { MouseEventHandler } from 'react';
import styles from './ColumnItem.module.scss';

export type ColumnItemProps = {
  /** unique title of the column */
  title: string;
  /** Add new card into the column click handler */
  onAddCard?: React.MouseEventHandler;
  /** the children will be rendered inside column: expected an IssueList */
  children?: React.ReactNode;
};

/**
 * Exactly the representation of a column with title and issues list inside.
 */
const ColumnItem: React.FC<ColumnItemProps> = ({
  children,
  title,
  onAddCard,
}) => (
  <Card className={styles.root}>
    <H2>{title}</H2>
    {children}
    <Button onClick={onAddCard} icon="add" minimal>
      Add card
    </Button>
  </Card>
);

export default ColumnItem;
