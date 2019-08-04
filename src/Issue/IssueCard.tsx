import { Card, Elevation } from '@blueprintjs/core';
import React from 'react';

type IssueProps = {
  // Issue unique id like "TEST-123"
  id?: string; // TODO: change to required?
  // Issue summary or title
  summary?: string;
};

const IssueCard: React.FC<IssueProps> = ({ id, summary }) => (
  <Card role="article" interactive elevation={Elevation.TWO}>
    <h2>{summary}</h2>
    <h3>{id}</h3>
    {/* TODO: remove temp text */}
    <div>Temp text</div>
  </Card>
);

export default IssueCard;
