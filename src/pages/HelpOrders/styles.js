import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 15px;
  background-color: #fff;
  margin-top: 10%;
`;

export const HelpOrderCardList = styled(FlatList)`
  margin-top: 5%;
`;

export const HelpOrderCard = styled.View`
  padding: 10px 15px;
  border: 2px solid #ddd;
  border-radius: 4px;
  flex-direction: column;
  margin-bottom: 10px;
  max-height: 150px;
`;

export const HelpOrderInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
`;

export const HelpOrderStatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HelpOrderStatus = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${props => (props.answered ? '#42CB59' : '#666')};
`;

export const HelpOrderDate = styled.Text`
  color: #666;
`;

export const HelpOrderQuestion = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 14px;
  color: #666;
  padding: 0px 10px 0px 0px;
`;
