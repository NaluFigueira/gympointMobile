import React from 'react';

import Button from '~/components/Button';

import { Container, HelpOrderInput } from './styles';

export default function NewHelpOrder() {
  return (
    <Container>
      <HelpOrderInput placeholder="Inclua seu pedido de auxílio" />
      <Button text="Enviar pedido" />
    </Container>
  );
}
