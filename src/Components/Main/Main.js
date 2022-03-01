import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import AboutPage from './AboutPage';
import CachePage from './Cache/CachePage';
import CacheDetail from './Cache/CacheDetail';
import CreatePage from './CreatePage';
import ProfilePage from './ProfilePage';

export default function Main() {

  return ( 
    <main>
      <Router>
        <Switch>
          <Route exact path="/">
            {
              !currentUser
                ? <AuthPage setCurrentUser={setCurrentUser} />
                : <Redirect to="/cachelist" />      
            }
          </Route>
          <Route exact path="/cachelist">
            {
              currentUser
                ? <CachePage />
                : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/cachelist/:id">
            {
              currentUser
                ? <CacheDetail />
                : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/create">
            {
              currentUser
                ? <CreatePage />
                : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/profile/:id">
            {
              currentUser
                ? <ProfilePage />
                : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/about">
            {
              currentUser
                ? <AboutPage />
                : <Redirect to="/" />
            }
          </Route>
        </Switch>
      </Router>
    </main>
  );
}
