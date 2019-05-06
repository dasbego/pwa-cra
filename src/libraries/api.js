import Axios from 'axios';
import Toks from '../mocks/toks';

// General
const request = (method, url, isPrivate, params = {}) => {
  const token = sessionStorage.getItem('sess_tk');
  return Axios.request({
    url,
    method,
    baseURL: 'https://api.sneakerfever.net',
    ...(isPrivate && token && ({
      headers: {
        Authorization: `Bearer ${token}`
      }
    })),
    ...params
  })
}

// Users

export const signupUser = (reqData) => request(
  'post', '/api/user', false, {
    data: {
      ...reqData
    }
  }
);

export const loginUser = (userName, password) => request(
  'post', '/api/user/authenticate', false, {
    data: {
      userName, password
    }
  }
);

export const loginUserWithFb = (FacebookToken) => request(
  'post', '/api/user/loginFacebook', false, {
    data: {
      FacebookToken
    }
  }
);

export const completeFbRegistration = (userProfile) => request(
  'post', '/api/user/registerExternal', false, {
    data: {
      ...userProfile
    }
  }
);

export const logout = () => request('get', '/api/user/logout', true);

// events

export const getEvents = () => request('get', '/api/event', true);

// toks

export const getToks = () => {
  return Toks;
}
