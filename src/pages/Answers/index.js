import React from 'react';

import PropTypes from 'prop-types';

import {
  Container,
  DetailsCard,
  DetailsInfo,
  DetailsTitle,
  DetailsDate,
  DetailsText,
} from './styles';

export default function Answers({ route }) {
  const { date } = route.params;
  const { question } = route.params;
  const { answer } = route.params;

  return (
    <Container>
      <DetailsCard>
        <DetailsInfo>
          <DetailsTitle>Pergunta</DetailsTitle>
          <DetailsDate>{date}</DetailsDate>
        </DetailsInfo>
        <DetailsText answered>{question}</DetailsText>
        <DetailsInfo>
          <DetailsTitle>Resposta</DetailsTitle>
        </DetailsInfo>
        <DetailsText answered={answer !== null}>
          {answer || 'Ainda não há resposta para essa pergunta!'}
        </DetailsText>
      </DetailsCard>
    </Container>
  );
}

Answers.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      date: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
