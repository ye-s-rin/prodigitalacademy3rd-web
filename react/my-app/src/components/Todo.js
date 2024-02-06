import React, { useState, useEffect } from "react";
import axios from 'axios';
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import TodoColor from "./TodoColor";

export default function Todo() {
  let i = 0;
  const [arr, setArr] = useState([]);

  const [color, setColor] = useState("");
  const [todo, setTodo] = useState([]);

  // setTodo([{
  //   text:'',
  //   color:''
  // }])

  useEffect(() => {
    readMongo();
  }, []);

  const readMongo = () => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3001/todo");
        setArr(response.data.map(elem=>{
          return elem.todo
        }))    
        // const initTodo = [];
        // for(const elem of response.data) {
        //   // initTodo.push({todo: elem.todo, color: elem.color});
        //   // createTodo(elem.todo);
        //   // TodoList({arr, color: elem.color, updateTodo, deleteTodo});
        // };
        // console.log(initTodo);
      } catch (err) {
        console.error(err);
        throw err;
      }
    })();
  }

  const createTodo = (text) => {
    setArr((prevArr) => [...prevArr, text]);
  };

  const createMongo = (todo) => {
    (async () => {
      try {
        await axios.post("http://localhost:3001/todo", {todo: todo, color: color});
        readMongo();
      } catch (err) {
        console.error(err);
        throw err;
      }
    })();
  };

  const updateTodo = (idx, text) => {
    setArr((prevArr) => {
      const newArr = [...prevArr];
      newArr[idx] = text;
      return (newArr);
    });
  };

  const deleteTodo = (idx) => {
    setArr((prevArr) => {
      const newArr = [...prevArr];
      newArr.splice(idx, 1);
      return (newArr);
    });
  };

  const applyColor = (color) => {
    setColor((prevColor) => {
      if(prevColor!==color){
        return color;
      }
      else{
        return "";
      }
    });
  };

  return (
    <div>
      <TodoCreate createTodo={createTodo} color={color}/>
      <TodoColor applyColor={applyColor}/>
      <TodoList
        arr={arr}
        color={color}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
