import { Card, H2 } from '@blueprintjs/core';
import React from 'react';

type Props = {
  title: string;
  children?: React.ReactNode;
};

const ColumnItem: React.FC<Props> = ({ children, title }) => (
  <Card>
    <H2>{title}</H2>
    {children}
  </Card>
);

export default ColumnItem;
