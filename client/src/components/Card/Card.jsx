import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeStatus, deleteNoteAction, editNote } from '../../redux/actions/noteAction'

function Card({ title, id, status }) {

  const [editButton, setEditButton] = useState(true)
  const [submitButton, setSubmitButton] = useState(false)
  const dispatch = useDispatch()

  const switchHandler = () => {
    setEditButton(!editButton)
    setSubmitButton(!submitButton)
  }

  const deleteHandler = (id) => {
    dispatch(deleteNoteAction(id))
  }

  const changeStatusHandler = (id) => {
    dispatch(changeStatus(id))
  }

  const editEventHandler = async (e) => {
    e.preventDefault()
    const newFormData = Object.fromEntries(new FormData(e.target))
    dispatch(editNote(id, newFormData))
  }
  return (
    <div className="container my-5">
      {editButton && <li className="list-group-item d-flex justify-content-between">
        <span className=" d-flex align-items-center">{title}</span>
        <div>
          <button onClick={() => changeStatusHandler(id)} type="submit" className={`btn mx-1 btn-${status ? 'secondary' : 'success'} ml-auto`}>{status ? 'Undone' : 'Done'}</button>

          <button onClick={switchHandler} type="submit" className="btn btn-danger mx-1">Change</button>

          <button onClick={() => deleteHandler(id)} type="submit" className="btn btn-danger mx-1">Delete</button>
        </div>
      </li>}
      {submitButton &&
        <>
          <form onSubmit={(e) => { editEventHandler(e); switchHandler() }}>
            <input type="text" name="title" />
            <button type="submit">Change note</button>
          </form>
        </>}

    </div>
  )
}

export default Card
