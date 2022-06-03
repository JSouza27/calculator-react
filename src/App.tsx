import React from 'react';
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import GlobalStyle from './css/GlobalStyle';
import { AppWrapper, AppContainer } from './Style';

const App = () => (
  <AppWrapper className="App">
    <AppContainer>
      <Display />
      <Keyboard />
    </AppContainer>
    <GlobalStyle />
  </AppWrapper>
);

export default App;
