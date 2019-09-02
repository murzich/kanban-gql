import { Classes } from '@blueprintjs/core';
import React from 'react';

type ColumnListProps = {};

/**
 * Collects columns in list
 */
const ColumnList: React.FC<ColumnListProps> = () => (
  <ul className={Classes.LIST_UNSTYLED}></ul>
);

export default ColumnList;
