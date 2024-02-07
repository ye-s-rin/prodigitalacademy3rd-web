import React, { useCallback, useState, useEffect } from 'react';
import TodoList from './TodoList';
import axios from 'axios';

const COLOR_MAP = [{
  color: 'pink',
}, {
  color: 'lightblue',
}, {
  color: 'yellow'
}, {
  color: 'gray'
}]

export default function TodoApp() {
  const [inputText, setInputText] = useState('');
  const [activeColor, setActiveColor] = useState("");
  const [incrementCount, setIncrementCount] = useState(0);
  
  const [todoList, setTodoList] = useState([]);
/**
{
    id: 1,
    title: 'todo-1',
    color: 'red'
  }, {
    id: 2,
    title: 'todo-2',
    color: 'blue'
  }
 */

  useEffect(() => {
    readMongo();
  }, []);

  const readMongo = () => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3001/todo");
        setTodoList(response.data);
        console.log(response.data);  
      } catch (err) {
        console.error(err);
        throw err;
      }
    })();
  }

  const deleteTodo = useCallback((todoId)=>{
    setTodoList(prev=>{
      return prev.filter((todo)=>{
        return todo.id !== todoId
      })
    })
  }, [setTodoList])

  const updateTodo = useCallback((todoId, text)=>{
    setTodoList((prev) => {
      const newObj = [...prev];
      newObj.map(obj => {
        if (obj._id === todoId){
          obj.title = text;
        }
      });
      return (newObj);
    });
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
          setInputText("");
        }}>제출</button>
      </div>

      <div>
        {COLOR_MAP.map(elem=>{
          return (
            <div
            onClick={()=>{
              setActiveColor(elem.color);
            }} 
            key={elem.color} 
            style={{width:20, height:20, 
                    backgroundColor: elem.color, border: '1px solid',
                    borderRadius: 5, borderColor: 'e9e9e9',
                  }}>
              
            </div>
          )
        })}
      </div>
      
      <div>
        <TodoList 
        todoList={todoList} 
        onDelete={deleteTodo}
        onUpdate={updateTodo} />
      </div>
    </div>
  )
}