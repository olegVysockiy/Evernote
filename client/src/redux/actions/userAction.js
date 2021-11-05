import axios from 'axios'

import { ADD_USER } from '../types'


export const addUserAction = (responce) => ({
  type: ADD_USER,
  payload: responce,
})

export const addUser = (formData) => async (dispatch) => {
  const userFromBack = await axios.post('http://localhost:3001/user/reg', {formData})
  const responce = userFromBack.data
  dispatch(addUserAction(responce))
}
