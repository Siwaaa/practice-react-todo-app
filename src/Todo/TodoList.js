import React from 'react'
import TodoItem from './TodoItem'

// инлайновый стиль
const styles = {
  ul: {
    listStyle: 'none'
  }
}

export default function TodoList(props) {
  return(
    <ul style={styles.ul}>
      { props.todosArr.map((todo, i) => {
          return <TodoItem todo={todo} key={todo.id} i={i} onChange={props.onToggle} />
      }) 
      }
    </ul>
  )
}