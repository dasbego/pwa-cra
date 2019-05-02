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

export const logout = () => {
  const token = sessionStorage.getItem('sess_tk');
  return request(
    'get', '/api/user/logout', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}

// events

export const getEvents = () => {
  const token = sessionStorage.getItem('sess_tk');
  return request('get', '/api/event', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
