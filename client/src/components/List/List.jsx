import React, { useEffect } from 'react'
import Card from '../Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { allNoteAction } from '../../redux/actions/noteAction'

function List() {
  const dispatch = useDispatch()
  const listOfNote = useSelector(state => state.note)

  useEffect(() => {
   dispatch(allNoteAction())
  }, [])

  return (
    <div>
      {listOfNote.map(el => <Card title={el.title} key={el.id} id={el.id} status={el.status} />)}
    </div>
  )
}

export default List
