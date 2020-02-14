import React from 'react';
import PropTypes from 'prop-types';

import { TButton, ButtonText } from './styles';

export default function Button({ text }) {
  return (
    <TButton>
      <ButtonText>{text}</ButtonText>
    </TButton>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
