import React, { useRef, useState } from "react";

export default function TodoCreate(props) {
  const inputRef = useRef();
  const [text, setText] = useState("");
  
  return (
    <div>
      <input
        style={{backgroundColor: props.color}}
        ref={inputRef}
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (inputRef.current?.value) {
              props.createTodo(text);
              inputRef.current.value = "";
            }
          }
        }}
      />
      <button
        onClick={(e) => {
          if (inputRef.current?.value) {
            props.createTodo(text);
            inputRef.current.value = "";
          }
        }}
      >
        입력
      </button>
    </div>
  );
}
