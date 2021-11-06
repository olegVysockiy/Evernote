import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewNoteAction } from '../../redux/actions/noteAction'


 export default function Form() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handlerInput = (e) => {
    const { value } = e.target
    setInput(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    const dataFromForm = Object.fromEntries(new FormData(e.target))
    dispatch(addNewNoteAction(dataFromForm))
    setInput('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="container my-5">
        <div className="mb-3 col-4">
          <input onChange={handlerInput} value={input} type="text" className="form-control" name="title" id="todo" placeholder="What needs to be done?" />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </div>
    </form>
  )
}



