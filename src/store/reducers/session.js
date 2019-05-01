import { SAVE_SESSION, DELETE_SESSION } from '../ActionTypes'

const initialState = {
}

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_SESSION:
      return {
        result: action.payload
      }
    case DELETE_SESSION:
      return {
        result: action.payload
      }
    default:
      return initialState
  }
}
