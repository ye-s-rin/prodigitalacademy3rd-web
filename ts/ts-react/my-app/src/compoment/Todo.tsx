import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";

export default function Todo() {
  const [arr, setArr] = useState<string[]>([]);

  const createTodo = (text: string) => {
    setArr((prevArr) => [text, ...prevArr]);
  };

  const updateTodo = (idx: number, text: string) => {
    setArr((prevArr) => {
      const newArr = [...prevArr];
      newArr[idx] = text;
      return (newArr);
    });
  };

  const deleteTodo = (idx: number) => {
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
