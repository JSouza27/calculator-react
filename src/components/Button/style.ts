import styled from 'styled-components';

const CustomButton = styled.button`
  align-items: center;
  background-color: ${(props) => (props.name === 'operator' ? 'var(--color-yellow)' : 'var(--color-white)')};
  border: none;
  border-radius: 10px;
  box-shadow: ${(props) => (props.name === 'number' ? '-4px 4px 4px rgba(0, 0, 0, 0.05)' : 'none')};
  display: flex;
  flex-basis: ${(props) => (props.theme.label === '=' ? '11.56rem' : 'auto')};
  justify-content: center;
  height: 100%;
  max-height: 5.062rem;
  min-height: 3rem;
  min-width: 3.1rem;
  order: ${(props) => (props.theme.label === '=' ? '2' : '0')};
  outline: none;
  padding: 20px 18px;
  width: 5.187rem;
  
  & > span {
    color: ${(props) => (props.name === 'number' ? 'var(--color-grey)' : 'var(--color-white)')};
    font-weight: var(--font-weight-600);
    font-size: ${(props) => (props.name === 'number' ? '1.875rem' : '2.25rem')};
    line-height: 37.65px;
    text-align: center;
    vertical-align: middle;
  }
`;

export default CustomButton;
