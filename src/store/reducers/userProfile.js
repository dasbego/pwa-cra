import { USER_UPDATE_PROFILE, USER_DELETE_PROFILE } from '../ActionTypes'

const initialState = {}

export default (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE:
      return {
        ...state,
        ...action.payload
      }
    case USER_DELETE_PROFILE:
      return initialState
    default:
      return state
  }
}
