import styled from 'styled-components';

const CustomButton = styled.button`
  background-color: ${(props) => (props.name === 'operator' ? 'var(--color-yellow)' : 'var(--color-white)')};;
  border: none;
  border-radius: 10px;
  box-shadow: ${(props) => (props.name === 'number' ? '-4px 4px 4px rgba(0, 0, 0, 0.05)' : 'none')};
  color: ${(props) => (props.name === 'number' ? 'var(--color-grey)' : 'var(--color-white)')};
  flex-basis: ${(props) => (props.theme.label === '=' ? '11.56rem' : '1')};;
  font-weight: var(--font-weight-600);
  font-size: ${(props) => (props.name === 'number' ? '1.875rem' : '2.25rem')};
  height: 5.062rem;
  order: ${(props) => (props.theme.label === '=' ? '2' : '0')};
  outline: none;
  text-align: center;
  width: 5.187rem;
`;

export default CustomButton;
