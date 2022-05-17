import styled from 'styled-components';

const BoxButton = styled.button`
  border: none;
  background-color: ${(props) => (props.color === 'operator' ? 'var(--color-yellow)' : 'var(--color-white)')};
  box-shadow: ${(props) => (props.color === 'number' ? '-4px 4px 4px rgba(0, 0, 0, 0.05)' : 'none')};
  border-radius: 10px;
  color: ${(props) => (props.color === 'number' ? 'var(--color-grey)' : 'var(--color-white)')};
  font-size: 30px;
  font-weight: var(--font-weight-600);
  height: 5.1rem;
  width: 5.2rem;
`;

export default BoxButton;
