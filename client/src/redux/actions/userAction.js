import axios from 'axios'

import { ADD_USER, DEL_USER } from '../types'


export const addUserAction = (responce) => ({
  type: ADD_USER,
  payload: responce,
})

export const addUser = (formData) => async (dispatch) => {
  const userFromBack = await axios.post('http://localhost:3001/user/reg', { formData })
  const responce = userFromBack.data
  dispatch(addUserAction(responce))
}

export const delUserAction = () => ({
  type: DEL_USER,
  payload: null,
})

export const delUser = () => (dispatch) => {
  console.log('===>>>>delAct')
  axios.get('http://localhost:3001/user/logout')
  dispatch(delUserAction())
}

export const loginUserAction = (responce) => ({
  type: ADD_USER,
  payload: responce,
})

export const loginUser = (loginForm) => async (dispatch) => {
  const userFromBack = await axios.post('http://localhost:3001/user/login', { loginForm })
  const responce = userFromBack.data
  dispatch(loginUserAction(responce))
}

export const checkUserAction = (responce) => ({
  type: ADD_USER,
  payload: responce,
})

export const checkUser = () => async (dispatch) => {
  const userFromBack = await axios('http://localhost:3001/user/check')
  const responce = userFromBack.data
  dispatch(checkUserAction(responce))
}

export const googleUser = (responce) => ({
  type: ADD_USER,
  payload: responce,
})

