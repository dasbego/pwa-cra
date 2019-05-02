import { EVENTS_UPDATE, EVENTS_CLEAR } from '../ActionTypes'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_UPDATE:
      return action.payload
    case EVENTS_CLEAR:
      return initialState
    default:
      return state
  }
}
