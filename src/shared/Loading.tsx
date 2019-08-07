import React from 'react';
import { Spinner, ISpinnerProps } from '@blueprintjs/core';

type LoadingType = ISpinnerProps & React.HTMLProps<HTMLDivElement>;

const Loading: React.FC<LoadingType> = ({ ref, ...props }) => (
  <div
    ref={ref}
    aria-busy="true"
    aria-live="polite"
    aria-label="Loading…"
    role="figure"
  >
    <Spinner {...props} />
  </div>
);

export default Loading;
