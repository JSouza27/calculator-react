import styled from 'styled-components';

const ToggleWrapper = styled.div`
  align-items: center;
  border-radius: 50px;
  display: flex;
  height:  2rem;
  position: absolute;
  top: 1rem;
  transform: scale(1.1);
  right: 1rem;
  width: 4rem;

  &.light {
    background-image: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }

  &.dark {
    background-image: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }
`;

const BallContainer = styled.div`
  align-items: center;
  border-radius: 50%;
  display: flex;
  filter: ${({ theme }) => theme.shadow};
  font-size: 1.5rem;
  height: 1.9rem;
  justify-content: center;
  transform: ${({ theme }) => theme.transform};
  transition: transform 0.3s ease;
  width: 1.9rem;
  z-index: 1;
`;

const CloudContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 2;

  & > div {
    background-color: whitesmoke;
    border-radius: 50%;
    position: absolute;
    transition: all 0.3s ease;
  }

  .dark & > div {
    background-color: lightgray;
    box-shadow: 0 0 3px 1px violet;
  }
  
  & > .sm {
    height: 4px;
    left: 60%;
    top: 40%;
    width: 15px;
  }

  & > .md {
    height: 5px;
    left: 25%;
    top: 20%;
    width: 22px;
    z-index: 2;
  }

  & > .lg {
    height: 6px;
    left: 35%;
    bottom: 15%;
    width: 25px;
  }

  .dark & > .sm {
    height: 2px;
    transform: translate(-0.5rem, 0.2rem);
    width: 2px;
  }

  .dark & > .sm:first-of-type {
    transform: translate(-1.5rem, -0.1rem);
  }

  .dark & > .md {
    height: 4px;
    transform: translate(0.5rem, 0);
    width: 4px;
  }

  .dark & > .lg {
    height: 5px;
    transform: translate(-0.3rem, -0.2rem);
    width: 5px;
  }
`;

export { ToggleWrapper, BallContainer, CloudContainer };
