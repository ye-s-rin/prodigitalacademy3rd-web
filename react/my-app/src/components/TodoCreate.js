import React, { useRef, useState } from "react";
import Todo from "./Todo";

export default function TodoCreate(props) {
  const inputRef = useRef();
  const [text, setText] = useState("");

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            {
              props.setArr([text, ...props.arr]);
            }
            inputRef.current.value = "";
          }
        }}
      />
      <button
        onClick={(e) => {
          {
            props.setArr([text, ...props.arr]);
          }
          inputRef.current.value = "";
        }}
      >
        입력
      </button>
    </div>
  );
}
