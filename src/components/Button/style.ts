import styled from 'styled-components';

const CustomButton = styled.button`
  background-color: ${(props) => (props.name === 'operator' ? 'var(--color-yellow)' : 'var(--color-white)')};;
  border: none;
  border-radius: 10px;
  box-shadow: ${(props) => (props.name === 'number' ? '-4px 4px 4px rgba(0, 0, 0, 0.05)' : 'none')};
  color: ${(props) => (props.name === 'number' ? 'var(--color-grey)' : 'var(--color-white)')};
  font-weight: var(--font-weight-00);
  font-size: ${(props) => (props.name === 'number' ? '1.875rem' : '2.25rem')};;
  height: 5.062rem;
  outline: none;
  text-align: center;
  width: 5.187rem;
`;

export default CustomButton;
