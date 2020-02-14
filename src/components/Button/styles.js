import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const TButton = styled(RectButton)`
  background-color: #ee4e62;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 4px;
  padding: 10px 0px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
