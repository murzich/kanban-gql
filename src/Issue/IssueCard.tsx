import { Card, Elevation } from '@blueprintjs/core';
import React from 'react';

const IssueCard: React.FC = () => (
  <Card data-testid="issueCard" interactive elevation={Elevation.TWO}>
    {/* TODO: remove temp text */}
    <div>Temp text</div>
  </Card>
);

export default IssueCard;
