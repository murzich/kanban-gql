import { Classes } from '@blueprintjs/core';
import clsx from 'clsx';
import React from 'react';
import styles from './ColumnList.module.scss';

export type ColumnListProps = {
    /** the children will be rendered inside list: expected an ColumnItem's */
    children?: React.ReactNode;
};

const ColumnListClassName = clsx(Classes.LIST_UNSTYLED, styles.root);

/**
 * Collects columns in list.
 * Each child will be wrapped by styled list item.
 */
const ColumnList: React.FC<ColumnListProps> = ({ children }) => (
  <ul className={ColumnListClassName}>
    {React.Children.map(children, child => (
      <li className={styles.item}>{child}</li>
    ))}
  </ul>
);

export default ColumnList;
