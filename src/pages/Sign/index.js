import React from 'react';
import { Image } from 'react-native';
import Button from '~/components/Button';
import Input from '~/components/Input';

import { Container } from './styles';

export default function Sign() {
  return (
    <Container>
      <Image resizeMode="contain" source={require('~/assets/logo.png')} />
      <Input placeholder="Informe seu ID de cadastro" />
      <Button text="Entrar no sistema" />
    </Container>
  );
}
