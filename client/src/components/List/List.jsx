import React, { useEffect } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodoAction } from '../../redux/actions/todoAction'

function List() {

  const dispatch = useDispatch()
  const listOfTodo = (useSelector(state => state.todo))

  useEffect(() => {
    axios.get('http://localhost:3001/api/all')
      .then(response => dispatch(getAllTodoAction(response.data)))
  }, [])

  return (
    <div>
      {listOfTodo.map(el => <Card title={el.title} key={el.id} id={el.id} status={el.status} />)}
    </div>
  )
}

export default List
