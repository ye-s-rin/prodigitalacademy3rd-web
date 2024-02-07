import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todoList, onDelete}) {
  return (
    <div>
        <h3>TodoList</h3>
        <ul>
            {todoList.map((todo, idx)=>{
                return (
                    <TodoItem key={todo.id} todo={todo} remove={()=>{
                        onDelete(todo.id)
                    }} />
                )
            })}
        </ul>

    </div>
  )
}