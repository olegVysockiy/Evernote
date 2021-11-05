import { ADD_NEW_TODO, CHANGE_STATUS, DELETE_TODO, EDIT_POST, GET_ALL_TODO } from "../types";
import axios from 'axios'

//middleware
export const addNewTodoAction = (dataFromForm) => async (dispatch) => {
  const response = await axios.post('http://localhost:3001/api/new', dataFromForm)
  const newPost = response.data
  dispatch(setAddNewTodoAction(newPost))
  console.log(newPost);
}

export const deleteTodoAction = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3001/api/${id}`)
  dispatch(setDeleteTodoAction(id))
}

export const changeStatus = (id) => async (dispatch) => {
  await axios.patch(`http://localhost:3001/api/${id}`)
  dispatch(setChangeStatus(id))
}

export const editTodo = (id, newFormData) => async (dispatch) => {
  await axios({
    method: "PATCH",
    url: `http://localhost:3001/api/edit/${id}`,
    data: newFormData
  })

  dispatch(setEditTodo(id, newFormData))
}
//actioncreator
export const getAllTodoAction = (allTodoFromBack) => ({
  type: GET_ALL_TODO,
  payload: allTodoFromBack,
})

export const setEditTodo = (id, newFormData) => ({
  type: EDIT_POST,
  payload: { id, newFormData }
})


export const setAddNewTodoAction = (newTodo) => ({
  type: ADD_NEW_TODO,
  payload: newTodo,
})

export const setDeleteTodoAction = (id) => ({
  type: DELETE_TODO,
  payload: { id }
})

export const setChangeStatus = (id) => {
  return {
    type: CHANGE_STATUS,
    payload: id
  }
}
