import React from 'react';
import Keyboard from './components/Keyboard';
import GlobalStyle from './css/GlobalStyle';
import { AppWrapper, AppContainer } from './Style';

const App = () => (
  <AppWrapper className="App">
    <AppContainer>
      <Keyboard />
    </AppContainer>
    <GlobalStyle />
  </AppWrapper>
);

export default App;
