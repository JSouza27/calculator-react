import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { CalculatorProvider } from './context/CalculatorContext';
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import Img from './assets/img/background.png';

import { darkTheme, lightTheme } from './assets/css/Theme';
import GlobalStyle from './assets/css/GlobalStyle';
import { AppWrapper, AppContainer } from './Style';
import Toggle from './components/Toggle';

const App = () => {
  const [userTheme, setUserTheme] = useState('light');

  const toggleTheme = () => {
    if (userTheme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setUserTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setUserTheme('light');
    }
  };

  return (
    <ThemeProvider theme={userTheme === 'light' ? lightTheme : darkTheme}>
      <AppWrapper theme={{ background: Img }} className="App">
        <CalculatorProvider>
          <AppContainer>
            <Toggle click={toggleTheme} toggle={userTheme} />
            <Display />
            <Keyboard />
          </AppContainer>
        </CalculatorProvider>
      </AppWrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
