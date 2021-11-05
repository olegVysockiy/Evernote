import { ADD_NEW_TODO, CHANGE_STATUS, DELETE_TODO, EDIT_POST, GET_ALL_TODO } from "../types";

export default function todoReducer(todo = [], action) {
  const { type, payload } = action
  switch (type) {
    case GET_ALL_TODO: {
      return payload
    }
    case ADD_NEW_TODO: {
      return [...todo, payload]
    }
    case DELETE_TODO: {
      const { id } = payload
      return todo.filter(el => el.id !== id)
    }
    case CHANGE_STATUS: {
      return todo.map(el => {
        if (el.id === action.payload) {
          return {
            ...el,
            status: !el.status
          }
        }
        return el
      })
    }
    case EDIT_POST: {
      const { id, newFormData } = payload
      return todo.map(el => {
        if(el.id === id) {
          return { ...el, title: newFormData.title }
        }
        return el
      })
    }
    default:
      return todo
  }
}
