import { client, checkError } from './client';

async function getUser() {

  return client.auth.session();
}

export async function signUpUser(email, password, username){
  const response = await client.auth.signUp({ email, password });
  await createProfile(username, email);
  return response.user;
}

export async function signInUser(email, password) {
  const response = await client.auth.signIn({
    email,
    password
  });
  return response.user;
}

export async function signOutUser() {
  await client.auth.signOut();
  
  return window.location.href = '../';
}

async function createProfile(username, email) {
  const response = await client
    .from('profiles')
    .insert([{ username, email }]); 
  return checkError(response);
}

export async function uploadImage(image) {
  const user = await getUser();
  const response = await client
    .storage
    .from('cache-images')
    .upload(`${user.user.id}/${image.name}`, image, {
      cacheControl: '3600',
      upsert: false
    });

  return checkError(response);
}

export async function createCache(cacheObject){
  const response = await client
    .from('cache')
    .insert([cacheObject]);

  return checkError(response);
}

export async function getAllCaches() {
  const response = await client
    .from('cache')
    .select();

  return checkError(response);
}

export async function getCacheById(id){
  const response = await client
    .from('cache')
    .select()
    .match({ id })
    .single();

  return checkError(response);
}

export default getUser;