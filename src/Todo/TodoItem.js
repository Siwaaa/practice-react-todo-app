import React, { useContext } from 'react'
import Context from '../context'

function TodoItem({ todo, i, onChange }) {
  const { removeTodo } = useContext(Context)
  const classes = []
  if (todo.completed) {
    classes.push('done')
  }
  return (
    <li>
      <span className={classes}>
        <input type='checkbox' checked={todo.completed} onChange={() => onChange(todo.id)} />
        <strong>{i + 1}</strong>
        {todo.title}
      </span>

      <button className='btn' onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
  )
}

export default TodoItem