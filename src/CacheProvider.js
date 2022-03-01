import React, { createContext, useState, useContect } from 'react';
import { signInUser, signUpUser } from './services/fetch-utils';

const CacheContext = createContext();

export default function CacheProvider({ children }) {
  const [newUser, setNewUser] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [cacheList, setCacheList] = useState([]);
  const [userLocation, setUserLocation] = ();

  
  // Cache (list): search, setSearch, cacheList, setCacheList, userLocation(ie: IP address), setUserLocation, toggleView, setToggleView
  
  // Create Cache: title, setTitle, description, setDescription, image, setImage, latitude, setLatitude, longitude, setLongitude, handleSubmit
  
  // Cache (detail): toggleView, setToggleView, params, cacheDetail, setCacheDetail
  
  // Profile: toggleView, setToggleView, userID, setUserIdgit
  async function handleSubmit(e) {
    e.preventDefault();
    {
      if (!newUser) {
        const user = await signInUser(email, password);
        setCurrentUser(user);
      } else {
        const user = await signUpUser(email, password);
        setCurrentUser(user);
      }
      setEmail('');
      setPassword('');
    }
  }

}

// STATE WE NEED

// Auth: state for newUser, setNewUser, email, setEmail, password, setPassword, username, setUsername, handleSubmit

// Main : currentUser, setCurrentUser