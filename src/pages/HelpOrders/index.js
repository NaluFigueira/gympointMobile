/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { formatRelative, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

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

export default function HelpOrders() {
  const [checkins, setCheckIns] = useState([
    {
      id: 3,
      student_id: 4,
      question:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      answer: 'Resposta',
      answer_at: '2019-12-29T20:29:11.303Z',
      createdAt: '2019-12-29T20:26:53.083Z',
      updatedAt: '2019-12-29T20:29:11.304Z',
    },
    {
      id: 4,
      student_id: 4,
      question: 'Deve fazer alguma dieta?',
      answer: null,
      answer_at: '2019-12-29T20:29:11.303Z',
      createdAt: '2019-12-29T20:26:53.083Z',
      updatedAt: '2019-12-29T20:29:11.304Z',
    },
  ]);

  function formatCheckinDate(checkinDate) {
    let formattedDate = checkinDate.split('.');
    formattedDate = formattedDate[0].replace('T', ' ');
    formattedDate = formatRelative(parseISO(formattedDate), new Date(), {
      locale: ptBR,
    });
    return formattedDate;
  }

  useEffect(() => {
    setCheckIns(
      checkins.map(checkin => {
        return { ...checkin, createdAt: formatCheckinDate(checkin.createdAt) };
      }),
    );
  }, []);

  const renderItem = ({ item }) => {
    return (
      <HelpOrderCard>
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
      </HelpOrderCard>
    );
  };

  return (
    <Container>
      <Button text="Novo pedido de auxílio" />
      <HelpOrderCardList
        data={checkins}
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
};
