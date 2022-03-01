import { client,
  checkError } from './client';

async function getUser() {

  return client.auth.session();
}

export async function signInUser(email, password) {
  const response = await client.auth.signIn({
    email,
    password
  });

  return response.user;
}

export async function signUpUser(username, email, password) {
  const response = await client.auth.signUp({
    username,
    email,
    password
  });

  return response.user;
}

export async function signOutUser() {
  await client.auth.signOut();
  
  return window.location.href = '../';
}

export default getUser;


export async function getCacheById(id){
  const response = await client
    .from('cache')
    .select()
    .match({ id })
    .single();

  return checkError(response);
}