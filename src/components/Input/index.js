import React, { forwardRef } from 'react';

import { TInput } from './styles';

function Input({ ...rest }, ref) {
  return <TInput {...rest} ref={ref} />;
}

export default forwardRef(Input);
