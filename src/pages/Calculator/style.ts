import styled from 'styled-components';

const CalculatorWrapper = styled.div`
  background-color: var(--color-soft-white);
  display: flex;
  flex-direction: column;
  height: 100%;
  opacity: 0.8;
  padding: 1.25em;
  width: 100%;

  @media (min-width: 600px) {
    border-radius: 30px;
    height: 95%;
    width: 26.75em;
  }
`;

const ViewContainer = styled.div`
  background-color: red;
  flex-grow: 1;
`;

const CommandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 29.8em;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  & > div:nth-child(1) {
    height: 5.1em;
    margin-bottom: 1em;
    width: 100%;
  }
  
  & > div:nth-child(2) {
    height: 5.1em;
    margin-bottom: 1em;
    width: 100%;
  }
  
  & > div:nth-child(3) {
    height: 5.1em;
    margin-bottom: 1em;
    width: 100%;
  }
  
  & > div:nth-child(4) {
    height: 5.1em;
    margin-bottom: 1em;
    width: 100%;
  }

  & > div:nth-child(5) {
    height: 5.1em;
    width: 100%;

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
