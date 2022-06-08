import styled from 'styled-components';

const AppWrapper = styled.div`
  align-items: center;
  background-color: var(--color-light-yellow);
  background-image: url(${(props) => props.theme.background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  
  @media (min-width: 600px) {
    padding: 1rem;
  }
`;

const AppContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.main};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: relative;
  transition: background-color 0.3s ease;
  width: 100vw;

  @media (min-width: 600px) {
    border-radius: 1.87rem;
    height: 100%;
    max-height: 57.8rem;
    width: 100%;
    max-width: 26.75rem ;
  }
`;

export {
  AppWrapper,
  AppContainer,
};
