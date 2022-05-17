import React from 'react';
import GlobalStyle from './assets/css/GlobalStyle';
import Calculator from './pages/Calculator';
import AppWrapper from './Style';

const App = () => (
  <AppWrapper className="App">
    <GlobalStyle />
    <Calculator />
  </AppWrapper>
);

export default App;
