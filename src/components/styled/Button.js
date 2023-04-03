import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.theme.colors[props.backgroundColor]};
  color: ${(props) => props.theme.colors[props.color]};
  transition: all .3s ease-in;
  border: none;
  padding: 15px;
  border-radius: 10px;
  font-size: 16px;

  &:hover {
    background-color: ${(props) => props.theme.colors[props.hoverBackgroundColor]};
  }
`;

export default Button;
