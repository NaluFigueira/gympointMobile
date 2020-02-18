import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image } from 'react-native';
import Button from '~/components/Button';
import Input from '~/components/Input';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container } from './styles';

export default function Sign() {
  const dispatch = useDispatch();
  const [id, setId] = useState('');

  const handleSubmit = () => {
    dispatch(signInRequest(parseInt(id, 10)));
  };

  return (
    <Container>
      <Image resizeMode="contain" source={require('~/assets/logo.png')} />
      <Input
        placeholder="Informe seu ID de cadastro"
        keyboardType="number-pad"
        returnKeyType="send"
        onSubmitEditing={() => handleSubmit()}
        value={id}
        onChangeText={setId}
      />
      <Button text="Entrar no sistema" onPress={() => handleSubmit()} />
    </Container>
  );
}
