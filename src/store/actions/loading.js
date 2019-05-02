import { LOADING_SET_MESSAGE, LOADING_HIDE } from '../ActionTypes';

export const setLoadingMessage = (message) => ({
  type: LOADING_SET_MESSAGE,
  payload: message
});

export const hideLoading = () => ({
  type: LOADING_HIDE
});
