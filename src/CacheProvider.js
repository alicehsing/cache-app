import React, { createContext, useState, useContext } from 'react';
import { createCache, signInUser, signUpUser, uploadImage } from './services/fetch-utils';
const CacheContext = createContext();

export default function CacheProvider({ children }) {
  const [newUser, setNewUser] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('supabase.auth.token')));
  const [cacheList, setCacheList] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState({});
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [startLat, setStartLat] = useState(0);
  const [startLon, setStartLon] = useState(0);
  const [cacheDetail, setCacheDetail] = useState({});
  
  // very nice work shipping a function through your Context! it's a little weird to see an 'event' in the provider, but it's cool that you were able to puzzle through it. I would generally want to see the e.preventDefault() stuff happening inside the component, but the rest of this function is very nice as it is
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
    // again, kind of weird to see the e.preventDefault() in a Provider. It kind of weds this function to only be used inside forms, when you might (possibly?) want to use it in response to things other than forms
    e.preventDefault();
    const cacheImg = await uploadImage(image);
    const response = await fetch(`/.netlify/functions/ipstack-endpoint`);
    const json = await response.json();

    await createCache({ 
      title,
      description,
      image:`https://nioqwidggusxqcqbwypa.supabase.in/storage/v1/object/public/${cacheImg.Key}`,
      latitude: json.data.latitude,
      longitude: json.data.longitude
    });

    setTitle('');
    setDescription('');
    setImage('');
    setLatitude(0);
    setLongitude(0);

    // hmm, i'd like to see this happen with react router (histpory.push, etc) instead of a hard URL manipulation
    window.location.href = '../';
  }

  const cacheStateAndSetters = {
    newUser, setNewUser,
    email, setEmail,
    password, setPassword,
    username, setUsername,
    currentUser, setCurrentUser,
    cacheList, setCacheList,
    title, setTitle,
    description, setDescription,
    image, setImage,
    latitude, setLatitude,
    longitude, setLongitude,
    startLat, setStartLat,
    startLon, setStartLon,
    cacheDetail, setCacheDetail,
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