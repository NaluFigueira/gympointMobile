import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 15px;
  background-color: #fff;
  margin-top: 10%;
`;

export const CheckInCardList = styled(FlatList)`
  margin-top: 5%;
`;

export const CheckInCard = styled.View`
  padding: 10px 15px;
  border: 2px solid #ddd;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CheckInNumber = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const CheckInDate = styled.Text`
  color: #666;
`;
