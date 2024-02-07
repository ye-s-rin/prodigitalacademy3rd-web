import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todoList, onDelete, onUpdate}) {
  return (
    <div>
        <h3>TodoList</h3>
        <ul>
            {todoList.map((todo, idx)=>{
                return (
                    <TodoItem key={todo._id} todo={todo} 
                    remove={()=>{
                        onDelete(todo._id)
                    }}
                    update={(text)=>{
                        onUpdate(todo._id, text)
                    }} />
                )
            })}
        </ul>

    </div>
  )
}