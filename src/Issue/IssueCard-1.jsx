import { Card, Classes, Elevation, H2 } from '@blueprintjs/core';
import React from 'react';
import styles from './IssueCard.module.scss';

const stringProp = (props, propName, componentName) => {
  if (typeof props[propName] !== "string") {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
},

propTypes = {
  /** Issue unique id like "TEST-123" */
  id: stringProp,
  /** Issue summary or title */
  summary: stringProp,
  /** Issue description, may be hidden */
  description: stringProp,
};

const IssueCard = ({ id, summary, description }) => (
  <Card
    role="article"
    interactive
    elevation={Elevation.TWO}
    className={styles.root}
  >
    <header>
      <p className={Classes.HEADING}>{id}</p>
      <H2>{summary}</H2>
    </header>
    <div>{description}</div>
  </Card>
);

IssueCard.propTypes = propTypes;

export default IssueCard;
