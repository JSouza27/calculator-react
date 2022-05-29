import styled from 'styled-components';

const AppWrapper = styled.div`
  align-items: center;
  background-color: var(--color-light-yellow);
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const AppContainer = styled.div`
  align-items: center;
  background-color: var(--color-soft-white);
  display: flex;
  flex-direction: column;
  height: 100vh;
  opacity: 0.8;
  width: 100vw;

  @media (min-width: 600px) {
    border-radius: 1.87rem;
    height: 41.68rem;
    max-height: 57.8rem;
    width: 23.43rem;
    max-width: 26.75rem ;
  }
`;

export {
  AppWrapper,
  AppContainer,
};
