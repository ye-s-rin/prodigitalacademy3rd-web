import React from 'react'
import TodoItem, { type TodoData } from './TodoItem'

export type TodoDataArray = TodoData[];

type Props = {
    data: TodoDataArray,
    remove: (id: number|string)=>void,
    update: (id: number|string, text: string)=>void
}

export default function TodoList({data, remove, update}: Props) {
  return (
    <div>
        <h3>TodoList</h3>
        <ul>
            {data.map(elem=>{
                return (
                    <li>
                        <TodoItem data={elem} remove={()=>{
                            remove(elem.id);
                        }} update={(text)=>{
                            update(elem.id, text)
                        }} />
                    </li>
                )
            })}
            
        </ul>
    </div>
  )
}