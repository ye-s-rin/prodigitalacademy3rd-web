import React, { useState } from "react";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import TodoColor from "./TodoColor";

export default function Todo() {
  let i = 0;
  const [arr, setArr] = useState([]);
  const [color, setColor] = useState("");

  const createTodo = (text) => {
    setArr((prevArr) => [...prevArr, text]);
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
