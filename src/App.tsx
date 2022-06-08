import React from 'react';
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import { CalculatorProvider } from './context/CalculatorContext';
import GlobalStyle from './css/GlobalStyle';
import { AppWrapper, AppContainer } from './Style';

const App = () => (
  <AppWrapper className="App">
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
