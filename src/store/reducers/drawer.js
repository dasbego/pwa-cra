import { DRAWER_IS_OPEN } from '../ActionTypes'

const initialState = {
  isOpen: false,
  selected: '',
}

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case DRAWER_IS_OPEN: {
      return {
        selected: payload.selected,
        isOpen: payload.isOpen
      }
    }
    default: {
      return state
    }
  }
}
