/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { formatRelative, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import api from '~/services/api';

import Button from '~/components/Button';
import {
  Container,
  HelpOrderCardList,
  HelpOrderCard,
  HelpOrderInfo,
  HelpOrderStatusContainer,
  HelpOrderStatus,
  HelpOrderDate,
  HelpOrderQuestion,
} from './styles';

export default function HelpOrders({ navigation }) {
  const id = useSelector(state => state.auth.id);
  const [helpOrders, setHelpOrders] = useState([]);

  function formatHelpOrderDate(checkinDate) {
    let formattedDate = checkinDate.split('.');
    formattedDate = formattedDate[0].replace('T', ' ');
    formattedDate = formatRelative(parseISO(formattedDate), new Date(), {
      locale: ptBR,
    });
    return formattedDate;
  }

  useEffect(() => {
    async function getHelpOrders() {
      try {
        const response = await api.get(`students/${id}/help-orders`);
        const data = response.data.map(helpOrder => {
          return {
            ...helpOrder,
            createdAt: formatHelpOrderDate(helpOrder.createdAt),
          };
        });
        setHelpOrders(data);
      } catch (error) {
        console.tron.log(error);
        Alert.alert(
          'Erro',
          'Ocorreu um erro ao recuperar os pedidos de auxílio!',
        );
      }
    }

    getHelpOrders();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <HelpOrderCard
        onPress={() =>
          navigation.navigate('Answers', {
            date: item.createdAt,
            question: item.question,
            answer: item.answer,
          })
        }>
        <>
          <HelpOrderInfo>
            <HelpOrderStatusContainer>
              <Icon
                name={item.answer ? 'check' : 'sms'}
                size={20}
                style={{ marginRight: 10 }}
                color={item.answer ? '#42CB59' : '#666'}
              />
              <HelpOrderStatus>
                {item.answer ? 'Respondido' : 'Sem Resposta'}
              </HelpOrderStatus>
            </HelpOrderStatusContainer>
            <HelpOrderDate>{item.createdAt}</HelpOrderDate>
          </HelpOrderInfo>
          <HelpOrderQuestion>{item.question}</HelpOrderQuestion>
        </>
      </HelpOrderCard>
    );
  };

  return (
    <Container>
      <Button
        text="Novo pedido de auxílio"
        onPress={() => navigation.navigate('NewHelpOrder')}
      />
      <HelpOrderCardList
        data={helpOrders}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
}

HelpOrders.defaultProps = {
  item: {},
};

HelpOrders.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    student_id: PropTypes.number,
    question: PropTypes.string,
    answer: PropTypes.string,
    answer_at: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
