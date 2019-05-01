import {
  USER_UPDATE_PROFILE,
  USER_DELETE_PROFILE,
} from '../ActionTypes'

export const updateUserProfile = ({
  firstName,
  lastName,
  userName,
  age,
  sex,
  favoriteBrand,
  image64
}) => ({
  type: USER_UPDATE_PROFILE,
  payload: {
    firstName,
    lastName,
    userName,
    age,
    sex,
    favoriteBrand,
    image: image64
  }
});

export const deleteProfile = () => ({
  type: USER_DELETE_PROFILE
});
