import React from 'react';
import { signInUser, 
  signUpUser } from '../../services/fetch-utils';
import { useCacheContext } from '../../CacheProvider';


// TODO: state for newUser, setNewUser, email, setEmail, password, setPassword, username, setUsername

export default function AuthPage() {

  const {
    handleAuthSubmit,    
    newUser, setNewUser,
    username, setUsername,
    email, setEmail,
    password, setPassword,
  } = useCacheContext();

  return (
    <>
      <form onSubmit={handleAuthSubmit}
        id='auth-form'>
        <div>
          <span onClick={() => setNewUser(false)}
            className={!newUser && 'active'}>Sign In</span>
          <span onClick={() => setNewUser(true)}
            className={newUser && 'active'}>Sign Up</span>
        </div>
        {
          newUser
            && <label htmlFor='username'>Username
              <input onChange={(e) => setUsername(e.target.value)}
                value={username}
                name='username'
                type='username'
                required />
            </label>
        }
        <label htmlFor='email'>Email
          <input onChange={(e) => setEmail(e.target.value)}
            value={email}
            name='email'
            type='email'
            required />
        </label>
        <label htmlFor='password'>Password
          <input onChange={(e) => setPassword(e.target.value)}
            value={password}
            name='password'
            type='password'
            minLength='6'
            required />
        </label>
        <button
          type='submit'
          form='auth-form'>{
            !newUser
              ? 'Sign in'
              : 'Sign up'
          }</button>
      </form>
    </>
  );
}
