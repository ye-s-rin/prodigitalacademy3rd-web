import React, { useState } from 'react'
import TodoList, {type TodoDataArray } from './TodoList'
import { v4 as uuidv4 } from 'uuid';




export default function TodoApp() {
  const [todoDataArr, setTodoDataArr] = useState<TodoDataArray>([]);
  const [inputText, setInputText] = useState('');
  
  return (
    <>
        <h2>TodoApp</h2>
        <>
            <input type="text" value={inputText} onChange={e=>{
                setInputText(e.target.value)
            }} />
            <button onClick={()=>{
                const newData = todoDataArr.concat({
                    id: uuidv4(),
                    text: inputText,
                    color: 'red'
                });
                setTodoDataArr(newData);
              
            }}>입력</button>
        </>
        <TodoList data={todoDataArr} remove={(id)=>{
            setTodoDataArr(todoDataArr.filter(elem=>{
                if (elem.id!==id){
                    return true;
                }
            }))
        }} update={(id, text)=>{
            setTodoDataArr(todoDataArr.map(elem=>{
                if (elem.id === id){
                    return {
                        ...elem,
                        text: text
                    }
                }
                return elem;
            }))
            
        }} />
    </>
  )
}