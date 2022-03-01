import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect,
  NavLink
} from 'react-router-dom';
import { signOutUser } from '../../services/fetch-utils';
import AuthPage from './AuthPage';
import AboutPage from './AboutPage';
import CachePage from './Cache/CachePage';
import CacheDetail from './Cache/CacheDetail';
import CreatePage from './CreatePage';
import ProfilePage from './ProfilePage';
import { useCacheContext } from '../../CacheProvider';


export default function Main() {
  const { currentUser } = useCacheContext();
  
  return ( 
    <main>
      <Router>
        {
          currentUser
          && <>
            {/* replace with burger menu library component */}
            <NavLink to="/cachelist">Home</NavLink>
            <NavLink to="/create">Create</NavLink>
            <NavLink to="/profile/:id">Profile</NavLink>
            <NavLink to="/about">About</NavLink>
            <button onClick={signOutUser}
              type='button'>Sign Out</button>
          </>
        }
        <Switch>
          <Route exact path="/">
            {
              !currentUser
                ? <AuthPage />
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
          <Route exact path="/about">
            {
              currentUser
                ? <AboutPage />
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

        </Switch>
      </Router>
    </main>
  );
}
