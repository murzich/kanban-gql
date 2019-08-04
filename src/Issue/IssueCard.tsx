import { Card, Elevation } from '@blueprintjs/core';
import React from 'react';

const IssueCard: React.FC = () => (
  <Card role="article" interactive elevation={Elevation.TWO}>
    <h3>TEST-123</h3>
    {/* TODO: remove temp text */}
    <div>Temp text</div>
  </Card>
);

export default IssueCard;
