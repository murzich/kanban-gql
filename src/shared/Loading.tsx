import { ISpinnerProps, Spinner } from '@blueprintjs/core';
import React from 'react';
import styles from './Loading.module.scss';

type LoadingType = ISpinnerProps &
  React.HTMLProps<HTMLDivElement> & { innerClassName?: string };

const Loading: React.FC<LoadingType> = ({
  innerClassName = styles.spinner,
  size,
  tagName,
  value,
  intent,
  ...props
}) => {
  const spinnerProps: ISpinnerProps = {
    className: innerClassName,
    size,
    tagName,
    value,
    intent,
  };

  return (
    <div
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading…"
      role="figure"
      {...props}
    >
      <Spinner {...spinnerProps} />
    </div>
  );
};

export default Loading;
