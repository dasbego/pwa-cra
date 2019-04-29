import MockEvents from '../mocks/events';

export const getEventById = id => new Promise((resolve, reject) => {
  resolve(MockEvents.find(event => event.id === id))
});

export default getEventById;
