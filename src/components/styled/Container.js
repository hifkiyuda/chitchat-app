import styled from 'styled-components';

const Container = styled.div`
  max-width: ${(props) => props.maxWidth};
  margin: ${(props) => props.margin};
`;

Container.defaultProps = {
  maxWidth: '1000px',
  margin: '0 auto',
};

export default Container;
