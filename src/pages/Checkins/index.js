/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import { formatRelative, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import Button from '~/components/Button';
import {
  Container,
  CheckInCardList,
  CheckInCard,
  CheckInNumber,
  CheckInDate,
} from './styles';

export default function Checkins() {
  const [checkins, setCheckIns] = useState([
    {
      id: 6,
      createdAt: '2020-02-13T20:21:09.224Z',
    },
    {
      id: 7,
      createdAt: '2020-02-07T20:21:13.269Z',
    },
    {
      id: 8,
      createdAt: '2020-01-13T20:21:16.533Z',
    },
    {
      id: 9,
      createdAt: '2019-12-29T20:21:18.689Z',
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
      <CheckInCard>
        <CheckInNumber>Check-in {item.id}</CheckInNumber>
        <CheckInDate>{item.createdAt}</CheckInDate>
      </CheckInCard>
    );
  };

  return (
    <Container>
      <Button text="Novo check-in" />
      <CheckInCardList
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
