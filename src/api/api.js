import axios from 'axios';
import oauth from 'axios-oauth-client';

async function login  () {
  let url ="http://35.246.165.105:9001/authorizationserver/oauth/authorize?grant_type=implicit&redirect_uri=http://35.246.165.105:9001/authorizationserver/oauth2_implicit_callback&client_id=client-side&scope=basic&state=$wCAVZ49kCOn.slStMc;Lva";
  let implicit = {
    grant_type: 'implicit',
    url: 'http://35.246.165.105:9001/authorizationserver/oauth/authorize',
    redirect_uri: 'http://35.246.165.105:9001/authorizationserver/oauth2_implicit_callback',
    client_id: 'client-side',
    scope: 'basic',
    state: '$wCAVZ49kCOn.slStMc;Lva',
    redirect: 'follow',
  }
  const  getAuthorizationCodeImplicit =  oauth.client(axios.create(), implicit);
  const auth =  await getAuthorizationCodeImplicit();
  console.log(auth);
  return auth;

}

async function login2() {
  let url ="http://35.246.165.105:9001/authorizationserver/oauth/authorize?grant_type=implicit&redirect_uri=http://35.246.165.105:9001/authorizationserver/oauth2_implicit_callback&client_id=client-side&scope=basic&state=$wCAVZ49kCOn.slStMc;Lva";
  var ClientOAuth2 = require('client-oauth2')

  var githubAuth = new ClientOAuth2({
    clientId: 'client-side',
    authorizationUri: 'http://35.246.165.105:9001/authorizationserver/oauth/authorize',
    redirectUri: 'http://35.246.165.105:9001/authorizationserver/oauth2_implicit_callback',
    scopes: ['basic'],
    state: '$R.slStMc;Lvuuuu',
  });
}

export default login;