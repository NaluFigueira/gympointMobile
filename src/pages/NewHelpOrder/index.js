import React, { useState } from 'react';
import { Alert } from 'react-native';

import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import Button from '~/components/Button';

import { Container, HelpOrderInput } from './styles';
import api from '~/services/api';

export default function NewHelpOrder({ navigation }) {
  const id = useSelector(state => state.auth.id);
  const [question, setQuestion] = useState('');

  async function handleSubmit() {
    try {
      await api.post(`students/${id}/help-orders`, {
        question,
      });
      navigation.navigate('HelpOrders');
    } catch (error) {
      console.tron.log(error);
      Alert.alert('Erro', 'Ocorreu um erro ao enviar pedido de auxílio!');
    }
  }

  return (
    <Container>
      <HelpOrderInput
        placeholder="Inclua seu pedido de auxílio"
        value={question}
        onChangeText={setQuestion}
      />
      <Button text="Enviar pedido" onPress={() => handleSubmit()} />
    </Container>
  );
}

NewHelpOrder.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
