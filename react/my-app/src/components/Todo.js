import React, { useState } from "react";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

export default function Todo() {
  let i = 0;
  const [arr, setArr] = useState([]);

  const createTodo = (text) => {
    setArr((prevArr) => [text, ...prevArr]);
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

  return (
    <div>
      <TodoCreate createTodo={createTodo} />

      <TodoList
        arr={arr}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
