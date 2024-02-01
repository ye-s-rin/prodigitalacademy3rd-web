import React, { useState, useEffect } from "react";
import TodoUpdate from "./TodoUpdate";
import TodoDelete from "./TodoDelete";

type Props = {
  arr: string[];
  updateTodo: (idx: number, text: string) => void;
  deleteTodo: (idx: number) => void;
};

export default function TodoList(props: Props) {
  let i = 0;

  return (
    <div>
      {props.arr.map((elem, idx) => {
        console.log("text in TodoList: " + props.arr[idx]);
        return (
          <div
            key={i++}
            style={{
              display: "grid",
              gridTemplateRows: "1fr ",
              gridTemplateColumns: "1fr 0.25fr 2fr",
            }}
          >
            <TodoUpdate
              updateTodo={props.updateTodo}
              idx={idx}
              text={props.arr[idx]}
            />
            <TodoDelete deleteTodo={props.deleteTodo} idx={idx} />
          </div>
          // child in a list should have a unique "key" prop.
        );
      })}
    </div>
  );
}
