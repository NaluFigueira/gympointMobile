import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { formatRelative, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import api from '~/services/api';

import Button from '~/components/Button';
import {
  Container,
  CheckInCardList,
  CheckInCard,
  CheckInNumber,
  CheckInDate,
} from './styles';

export default function Checkins() {
  const id = useSelector(state => state.auth.id);
  const [checkins, setCheckIns] = useState([]);

  function formatCheckinDate(checkinDate) {
    let formattedDate = checkinDate.split('.');
    formattedDate = formattedDate[0].replace('T', ' ');
    formattedDate = formatRelative(parseISO(formattedDate), new Date(), {
      locale: ptBR,
    });
    return formattedDate;
  }

  useEffect(() => {
    async function getCheckins() {
      try {
        const response = await api.get(`students/${id}/checkins`);
        const data = response.data.map(checkin => {
          return {
            ...checkin,
            createdAt: formatCheckinDate(checkin.createdAt),
          };
        });
        setCheckIns(data);
      } catch (error) {
        console.tron.log(error);
        Alert.alert('Erro', 'Ocorreu um erro ao recuperar os check-ins!');
      }
    }

    getCheckins();
  }, [id]);

  const renderItem = ({ item }) => {
    return (
      <CheckInCard>
        <CheckInNumber>Check-in {item.id}</CheckInNumber>
        <CheckInDate>{item.createdAt}</CheckInDate>
      </CheckInCard>
    );
  };

  async function createCheckin() {
    try {
      await api.post(`students/${id}/checkins`);
      const response = await api.get(`students/${id}/checkins`);
      const data = response.data.map(checkin => {
        return {
          ...checkin,
          createdAt: formatCheckinDate(checkin.createdAt),
        };
      });
      setCheckIns(data);
    } catch (error) {
      console.tron.log(error);
      Alert.alert('Erro', 'Ocorreu um erro ao realizar check-in!');
    }
  }

  return (
    <Container>
      <Button text="Novo check-in" onPress={() => createCheckin()} />
      <CheckInCardList
        extraData={checkins}
        data={checkins}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
}

Checkins.defaultProps = {
  item: {},
};

Checkins.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    student_id: PropTypes.number,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    studentId: PropTypes.number,
  }),
};
