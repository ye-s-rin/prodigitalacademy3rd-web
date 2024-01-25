import React, { useCallback, useState } from 'react';
import './TodoApp.css';
import TodoList from './TodoList';

const COLOR_MAP = [{
  color: 'red',
}, {
  color: 'blue',
}, {
  color: 'white'
}, {
  color: 'yellow'
}]

export default function TodoApp() {
  const [inputText, setInputText] = useState('');
  const [activeColor, setActiveColor] = useState(COLOR_MAP[0].color);
  const [incrementCount, setIncrementCount] = useState(3);
  
  const [todoList, setTodoList] = useState([{
    id: 1,
    title: 'todo-1',
    color: 'red'
  }, {
    id: 2,
    title: 'todo-2',
    color: 'blue'
  }]);

  const deleteTodo = useCallback((todoId)=>{
    
    // setTodoList(todoList.filter(todo=>{
    //   return todo.id !== todoId
    // }))

    setTodoList(prev=>{
      return prev.filter((todo)=>{
        return todo.id !== todoId
      })
    })
    
  }, [setTodoList])



  return (
    <div className="todo-app">
      <div>
        <div>TodoApp</div>
      </div>
      
      <div>
        <input type="text" value={inputText} style={{backgroundColor:activeColor}} onChange={e=>{
          setInputText(e.target.value);
        }} />
        <button onClick={()=>{
          const item = {
            id: incrementCount,
            title: inputText,
            color: activeColor
          };
          setTodoList(prev=>prev.concat(item))
          setIncrementCount(prev=>(prev+1))
        }}>제출</button>
      </div>

      <div>
        {COLOR_MAP.map(elem=>{
          return (
            <div onClick={()=>{
              setActiveColor(elem.color);
            }} key={elem.color} style={{width:20, height:20, 
                        backgroundColor: elem.color, border: '1px solid',
                        borderRadius: 5, borderColor: 'e9e9e9'
                        }}>
              
            </div>
          )
        })}
      </div>
      
      <div>
        <TodoList todoList={todoList} onDelete={deleteTodo} />
      </div>
    </div>
  )
}