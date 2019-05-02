import { EVENTS_UPDATE, EVENTS_CLEAR } from '../ActionTypes';

export const updateEvents = (events) => ({
  type: EVENTS_UPDATE,
  payload: events
});

export const clearEvents = () => ({
  type: EVENTS_CLEAR
});
