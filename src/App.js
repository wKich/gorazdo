/* eslint-disable no-undef */
import React, { useState } from 'react';
import Header from './components/Header';
import { TypographyStyle, GoogleFont } from 'react-typography';
import dark from './styles/themes/dark';
import light from './styles/themes/light';
// Best practice is to have a typography module
// where you define your theme.
import typography from './utils/typography';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Projects } from './pages/projects';
import { People } from 'pages/people';
import { Person } from 'pages/people/person';
import { LocaleProvider } from 'contexts/Locale';
const themes = { dark, light };

const useDefaultTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  }
  return 'light';
};

function App() {
  const defaultTheme = useDefaultTheme();
  const [currentThemeName, setThemeName] = useState(defaultTheme);

  const handleSwitch = () => {
    if (currentThemeName === 'dark') {
      setThemeName('light');
    } else {
      setThemeName('dark');
    }
  };

  return (
    <Router>
      <LocaleProvider>
        <ThemeProvider theme={themes[currentThemeName]}>
          <div className="App">
            <GlobalStyle />
            <TypographyStyle typography={typography} />
            <GoogleFont typography={typography} />

            <Header onSwitchTheme={handleSwitch} themeName={currentThemeName} />
            <Switch>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route exact path="/people">
                <People />
              </Route>
              <Route path="/people/:name">
                <Person />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </ThemeProvider>
      </LocaleProvider>
    </Router>
  );
}

export default App;
