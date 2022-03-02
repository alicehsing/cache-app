import React, { createContext, useState, useContext } from 'react';
// import { client } from './services/client';
import getUser, { createCache, signInUser, signUpUser, uploadImage } from './services/fetch-utils';

const CacheContext = createContext();

export default function CacheProvider({ children }) {
  const [newUser, setNewUser] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('supabase.auth.token')));
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [cacheList, setCacheList] = useState([]);
  const [userLocation, setUserLocation] = useState({}); /* based on lat/lon: current IP address for nearby */
  const [toggleView, setToggleView] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState({});
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [params, setParams] = useState('');
  const [cacheDetail, setCacheDetail] = useState({});
  const [userID, setUserID] = useState(0);

  
  async function handleAuthSubmit(e) {
    e.preventDefault();
    {
      if (!newUser) {
        const user = await signInUser(email, password);
        setCurrentUser(user);
      } else {
        const user = await signUpUser(email, password, username);
        setCurrentUser(user);
      }
      setEmail('');
      setPassword('');
    }
  }

  async function handleCreateSubmit(e) {
    e.preventDefault();
    console.log(image);
    const cacheImg = await uploadImage(image);
    // const user = await getUser();
    console.log(currentUser, 'curent user');
    console.log(cacheImg, 'cache img');
    console.log(`https://nioqwidggusxqcqbwypa.supabase.in/storage/v1/object/public/${cacheImg.Key}`);


    await createCache({ 
      title,
      description,
      image:`https://nioqwidggusxqcqbwypa.supabase.in/storage/v1/object/public/${cacheImg.Key}`,
      latitude,
      longitude,
    });
      // make new ROW in supabase using form values stored in state (title, description, img) -- call in createCacheItem (fetch-utils)
  }

  const cacheStateAndSetters = {
    newUser, setNewUser,
    email, setEmail,
    password, setPassword,
    username, setUsername,
    currentUser, setCurrentUser,
    search, setSearch,
    searchResults, setSearchResults,
    cacheList, setCacheList,
    userLocation, setUserLocation,
    toggleView, setToggleView,
    title, setTitle,
    description, setDescription,
    image, setImage,
    latitude, setLatitude,
    longitude, setLongitude,
    params, setParams,
    cacheDetail, setCacheDetail,
    userID, setUserID,
    handleAuthSubmit,
    handleCreateSubmit,

  };

  return <CacheContext.Provider value={cacheStateAndSetters}>
    {children}
  </CacheContext.Provider>;
}

export function useCacheContext() {
  return useContext(CacheContext);
}

// STATE WE NEED

// Auth: state for newUser, setNewUser, email, setEmail, password, setPassword, username, setUsername, handleSubmit

// Main : currentUser, setCurrentUser

// Cache (list): search, setSearch, cacheList, setCacheList, userLocation(ie: IP address), setUserLocation, toggleView, setToggleView

// Create Cache: title, setTitle, description, setDescription, image, setImage, latitude, setLatitude, longitude, setLongitude, handleSubmit

// Cache (detail): toggleView, setToggleView, params, cacheDetail, setCacheDetail (single OBJ/row in supabase)

// Profile: toggleView, setToggleView, userID, setUserId