import styled from 'styled-components';

const CalculatorWrapper = styled.div`
  background-color: var(--color-soft-white);
  display: flex;
  flex-direction: column;
  height: 100%;
  opacity: 0.8;
  padding: 1.25rem;
  width: 100%;

  @media (min-width: 600px) {
    border-radius: 30px;
    height: 95%;
    width: 26.75rem;
  }
`;

const ViewContainer = styled.div`
  background-color: red;
  flex-grow: 1;
`;

const CommandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 29.8rem;
  row-gap: 14px;
  max-width: 24.31rem;

  & > div {
    display: flex;
    column-gap: 19px;
  }

  & > div:nth-child(5) {

    & > button:nth-child(2) {
      order: 2;
      flex-basis: 11.56rem;
    }
  }
`;

export {
  CalculatorWrapper,
  ViewContainer,
  CommandsContainer,
};
