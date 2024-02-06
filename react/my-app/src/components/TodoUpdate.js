import React, { useEffect, useState } from "react";
import '../Todo.css'

export default function TodoUpdate(props) {
  const [disabled, setDisabled] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    setText(props.text);
  }, [props.text]);

  return (
    <div>
      <input
        // style={{backgroundColor: props.bgColor}}
        type="text"
        placeholder={props.text}
        disabled={disabled}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (text.length > 0) {
              props.updateTodo(props.idx, text);
            }
            setDisabled(!disabled);
          }
        }}
      />
      <button
        onClick={(e) => {
          if (!disabled) {
            if (text.length > 0) {
              props.updateTodo(props.idx, text);
            }
          }
          setDisabled(!disabled);
        }}
      >
        수정
      </button>
    </div>
  );
}
