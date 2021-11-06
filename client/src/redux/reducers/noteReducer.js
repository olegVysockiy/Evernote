import { ADD_NEW_NOTE, CHANGE_STATUS, DELETE_NOTE, EDIT_NOTE, GET_ALL_NOTE } from "../types";

export default function noteReducer(note = [], action) {
  const { type, payload } = action
  switch (type) {
    case GET_ALL_NOTE: {
      return payload
    }
    case ADD_NEW_NOTE: {
      return [...note, payload]
    }
    case DELETE_NOTE: {
      const { id } = payload
      return note.filter(el => el.id !== id)
    }
    case CHANGE_STATUS: {
      return note.map(el => {
        if (el.id === action.payload) {
          return {
            ...el,
            status: !el.status
          }
        }
        return el
      })
    }
    case EDIT_NOTE: {
      const { id, newFormData } = payload
      return note.map(el => {
        if(el.id === id) {
          return { ...el, title: newFormData.title }
        }
        return el
      })
    }
    default:
      return note
  }
}
