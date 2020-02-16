import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 15px;
  background-color: #fff;
  margin-top: 10%;
`;

export const DetailsCard = styled.View`
  padding: 10px 15px;
  border: 2px solid #ddd;
  border-radius: 4px;
  flex-direction: column;
`;

export const DetailsInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
`;

export const DetailsTitle = styled.Text`
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`;

export const DetailsDate = styled.Text`
  color: #666;
`;

export const DetailsText = styled.Text`
  font-size: 14px;
  color: #666;
  font-weight: ${props => (props.answered ? 'normal' : 'bold')}
  text-align: ${props => (props.answered ? 'left' : 'center')}
  padding: 0px 10px 0px 0px;
`;
