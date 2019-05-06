import { DRAWER_IS_OPEN } from '../ActionTypes';

export const setIsDrawerOpen = (selected, isOpen) => ({
  type: DRAWER_IS_OPEN,
  payload: {
    selected,
    isOpen
  }
});
