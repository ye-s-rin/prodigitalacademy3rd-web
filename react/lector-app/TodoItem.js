import React from 'react'

export default function TodoItem({todo}) {
  return (
    <li 
        style={{backgroundColor: todo.color}}>
        {todo.title}
    </li>
  )
}