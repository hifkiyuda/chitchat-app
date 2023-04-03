import styled from 'styled-components';

const Card = styled.div`
  padding: 15px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors[props.backgroundColor]};
  color: ${(props) => props.theme.colors[props.color]};
  border-radius: 10px;
`;

export default Card;
