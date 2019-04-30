import MockEvents from '../mocks/events';
import Axios from 'axios';

const request = (method, url, params) => {
  console.log(params)
  return Axios.request({
    url,
    method,
    baseURL: 'https://api.sneakerfever.net',
    ...params
  })
}

export const getEventById = id => new Promise((resolve, reject) => {
  resolve(MockEvents.find(event => event.id === id))
});

export const signupUser = (reqData) => request(
  'post', '/api/user', {
    data: {
      ...reqData
    }
  }
);

export default getEventById;
