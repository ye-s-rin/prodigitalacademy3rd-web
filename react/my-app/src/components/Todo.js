import React, { useState } from "react";
import TodoCreate from "./TodoCreate";
import TodoUpdate from "./TodoUpdate";
import TodoDelete from "./TodoDelete";

export default function Todo() {
  let i = 0;
  const [arr, setArr] = useState([]);

  return (
    <div>
      <TodoCreate arr={arr} setArr={setArr} />
      <TodoDelete arr={arr} setArr={setArr} />
      <TodoUpdate arr={arr} setArr={setArr} />

      <div>
        {arr.map((elem) => (
          <div key={i++}>{elem}</div>
          // child in a list should have a unique "key" prop.
        ))}
      </div>
    </div>
  );
}
