import React from 'react';
import { H2, Card } from '@blueprintjs/core';

type Props = {
    title: string;
    children?: never;
}

const ColumnItem: React.FC<Props> = ({ title }) => (
  <Card>
    <H2>{title}</H2>
  </Card>
);

export default ColumnItem;
