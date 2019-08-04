import { Card, Classes, Elevation, H2 } from '@blueprintjs/core';
import React from 'react';

type IssueProps = {
  // Issue unique id like "TEST-123"
  id?: string; // TODO: change to required?
  // Issue summary or title
  summary?: string;
};

const IssueCard: React.FC<IssueProps> = ({ id, summary }) => (
  <Card role="article" interactive elevation={Elevation.TWO}>
    <header>
      <p className={Classes.HEADING}>{id}</p>
      <H2>{summary}</H2>
    </header>
    {/* TODO: remove temp text */}
    <div>Temp text</div>
  </Card>
);

export default IssueCard;
