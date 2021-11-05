import React from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodoAction } from '../../redux/actions/todoAction'


function Form() {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    const dataFromForm = Object.fromEntries(new FormData(e.target))
    dispatch(addNewTodoAction(dataFromForm))
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="container my-5">
        <div className="mb-3 col-4">
          <input type="text" className="form-control" name="title" id="todo" placeholder="What needs to be done?" />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </div>
    </form>
  )
}

export default Form

