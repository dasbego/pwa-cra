import MockEvents from '../mocks/events';
import Axios from 'axios';

// General
const request = (method, url, params) => {
  return Axios.request({
    url,
    method,
    baseURL: 'https://api.sneakerfever.net',
    ...params
  })
}

// Events

export const getEventById = id => new Promise((resolve, reject) => {
  resolve(MockEvents.find(event => event.id === id))
});


// Users

export const signupUser = (reqData) => request(
  'post', '/api/user', {
    data: {
      ...reqData
    }
  }
);

export const loginUser = (userName, password) => request(
  'post', '/api/user/authenticate', {
    data: {
      userName, password
    }
  }
);

export const loginUserWithFb = (FacebookToken) => request(
  'post', '/api/user/loginFacebook', {
    data: {
      FacebookToken
    }
  }
);

export const completeFbRegistration = (userProfile) => request(
  'post', '/api/user/registerExternal', {
    data: {
      ...userProfile
    }
  }
);

export const logout = (token) => request(
  'get', '/api/user/logout', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);

export default getEventById;
