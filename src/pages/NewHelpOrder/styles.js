import styled from 'styled-components/native';
import Input from '~/components/Input';

export const Container = styled.View`
  flex: 1;
  padding: 0 15px;
  background-color: #fff;
  margin-top: 10%;
`;

export const HelpOrderInput = styled(Input).attrs({
  multiline: true,
})`
  height: 50%;
  padding-top: 10px;
  padding-bottom: 10px;
`;
