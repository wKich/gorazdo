/* eslint-disable no-undef */
import React from 'react';
import Header from './components/Header';
import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Projects } from './pages/projects';
import { People } from 'pages/people';
import { Person } from 'pages/people/person';
import { LocaleProvider } from 'contexts/Locale';
import { ThemeProvider } from 'contexts/Theme';
import { FirebaseAuthUIProvider } from 'contexts/FirebaseAuth';
import { Admin } from 'pages/admin';

function App() {
  return (
    <FirebaseAuthUIProvider>
      <Router>
        <LocaleProvider>
          <ThemeProvider>
            <div className="App">
              <GlobalStyle />
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
                <Route path="/admin">
                  <Admin />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </ThemeProvider>
        </LocaleProvider>
      </Router>
    </FirebaseAuthUIProvider>
  );
}

export default App;
