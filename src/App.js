/* eslint-disable no-undef */
import React from 'react';
import Header from './components/Header';
import { TypographyStyle, GoogleFont } from 'react-typography';
// Best practice is to have a typography module
// where you define your theme.
import typography from './utils/typography';
import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Projects } from './pages/projects';
import { People } from 'pages/people';
import { Person } from 'pages/people/person';
import { LocaleProvider } from 'contexts/Locale';
import { ThemeProvider } from 'contexts/Theme';

function App() {
  return (
    <Router>
      <LocaleProvider>
        <ThemeProvider>
          <div className="App">
            <GlobalStyle />
            <TypographyStyle typography={typography} />
            <GoogleFont typography={typography} />

            <Header />
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
