import { ADD_USER, DEL_USER, CHECK_USER, LOGIN_USER } from '../types'

export default function userReducer(user = null, action) {
  const { type, payload } = action
  switch (type) {
    case ADD_USER: {
      return payload
    }
    case DEL_USER: {
      return payload;
    }
    case CHECK_USER: {
      return payload;
    }
    case LOGIN_USER: {
      return payload;
    }
    default:
      return user
  }
}
