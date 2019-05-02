import { LOADING_SET_MESSAGE, LOADING_HIDE } from '../ActionTypes'

const initialState = {
  isVisible: false,
  message: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SET_MESSAGE:
      return {
        message: action.payload,
        isVisible: true,
      }
    case LOADING_HIDE:
      return initialState
    default:
      return state
  }
}
