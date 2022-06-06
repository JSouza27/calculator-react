import React from 'react';
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import { CalculatorProvider } from './context/CalculatorContext';
import Img from './assets/img/background.png';
import GlobalStyle from './assets/css/GlobalStyle';
import { AppWrapper, AppContainer } from './Style';

const App = () => (
  <AppWrapper theme={{ background: Img }} className="App">
    <CalculatorProvider>
      <AppContainer>
        <Display />
        <Keyboard />
      </AppContainer>
    </CalculatorProvider>
    <GlobalStyle />
  </AppWrapper>
);

export default App;
