import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";

type Arr = {
  arr: string[];
};

export default function Todo() {
  const [arr, setArr] = useState<Arr>({ arr: [] });

  const createTodo = (text: string) => {
    setArr((prevArr) => ({
      arr: [text, ...prevArr.arr],
    }));
  };

  const updateTodo = (idx: number, text: string) => {
    setArr((prevArr) => {
      const newArr = [...prevArr.arr];
      newArr[idx] = text;
      return { arr: newArr };
    });
  };

  const deleteTodo = (idx: number) => {
    setArr((prevArr) => ({
      arr: prevArr.arr.slice(0, idx).concat(prevArr.arr.slice(idx + 1)),
    }));
  };

  return (
    <div>
      <TodoCreate createTodo={createTodo} />

      <TodoList arr={arr.arr} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
