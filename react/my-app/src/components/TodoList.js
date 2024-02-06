import React from "react";
import TodoUpdate from "./TodoUpdate";
import TodoDelete from "./TodoDelete";

export default function TodoList(props) {
  let i = 0;

  return (
    <div>
      {props.arr.map((elem, idx) => {
        console.log("text in TodoList: " + elem);
        return (
          <div
            key={i++}
            style={{ display: 'flex'}}
          >
            <TodoUpdate updateTodo={props.updateTodo} idx={idx} text={elem} />
            <TodoDelete deleteTodo={props.deleteTodo} idx={idx} />
          </div>
          // child in a list should have a unique "key" prop.
        );
      })}
    </div>
  );
}
