import React from "react";
import TodoUpdate from "./TodoUpdate";
import TodoDelete from "./TodoDelete";

export default function TodoList(props) {
  console.log("todo in TodoList: ", props.todo);

  return (
    <ul>
      {props.todo.map((elem, idx) => {
        {console.log("in map: ", elem.todo, elem.color)}
        return (
          <div
            key={elem.id}
            style={{ display: 'flex'}}
          >
            <TodoUpdate 
              updateTodo={props.updateTodo} 
              idx={idx} 
              text={elem.todo} 
              color={elem.color}
              updateColor={props.color}/>
            <TodoDelete deleteTodo={props.deleteTodo} idx={idx} />
          </div>
          // child in a list should have a unique "key" prop.
        );
      })}
    </ul>
  );
}
