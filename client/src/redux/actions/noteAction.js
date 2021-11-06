import { ADD_NEW_NOTE, CHANGE_STATUS, DELETE_NOTE, EDIT_NOTE, GET_ALL_NOTE } from "../types";
import axios from 'axios'
// allNotes =====>>>>>
export const getAllNoteAction = (allNoteFromBack) => ({
  type: GET_ALL_NOTE,
  payload: allNoteFromBack,
})

export const allNoteAction = () => async (dispatch) => {
  const response = await axios('http://localhost:3001/note/all')
  dispatch(getAllNoteAction(response.data))
}
// newNote =====>>>>>
export const setAddNewNoteAction = (newTodo) => ({
  type: ADD_NEW_NOTE,
  payload: newTodo,
})

export const addNewNoteAction = (dataFromForm) => async (dispatch) => {
  const response = await axios.post('http://localhost:3001/note/new', dataFromForm)
  const newPost = response.data
  dispatch(setAddNewNoteAction(newPost))
}
// deleteNote =====>>>>>
export const setDeleteNoteAction = (id) => ({
  type: DELETE_NOTE,
  payload: { id }
})

export const deleteNoteAction = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3001/note/${id}`)
  dispatch(setDeleteNoteAction(id))
}
// editNote =====>>>>>
export const setEditNote = (id, newFormData) => ({
  type: EDIT_NOTE,
  payload: { id, newFormData }
})

export const editNote = (id, newFormData) => async (dispatch) => {
  await axios({
    method: "PATCH",
    url: `http://localhost:3001/note/edit/${id}`,
    data: newFormData
  })

  dispatch(setEditNote(id, newFormData))
}
// changeStatus =====>>>>>
export const setChangeStatus = (id) => {
  return {
    type: CHANGE_STATUS,
    payload: id
  }
}

export const changeStatus = (id) => async (dispatch) => {
  await axios.patch(`http://localhost:3001/note/${id}`)
  dispatch(setChangeStatus(id))
}

