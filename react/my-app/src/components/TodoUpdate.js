import React, { useEffect, useState } from "react";
import '../Todo.css'

export default function TodoUpdate(props) {
  const [disabled, setDisabled] = useState(true);
  const [text, setText] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    setText(props.text);
  }, [props.text]);

  useEffect(() => {
    setColor(props.color);
  }, []);

  useEffect(() => {
    if(!disabled){
      setColor(props.updateColor);
    }
  }, [props.updateColor]);

  return (
    <li>
    <div>
      <input
        style={{backgroundColor: color}}
        type="text"
        placeholder={props.text}
        disabled={disabled}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (text.length > 0) {
              props.updateTodo(props.idx, text, props.updateColor);
            }
            setDisabled(!disabled);
          }
        }}
      />
      <button
        onClick={(e) => {
          if (!disabled) {
            if (text.length > 0) {
              props.updateTodo(props.idx, text, props.updateColor);
            }
          }
          setDisabled(!disabled);
        }}
      >
        수정
      </button>
    </div>
    </li>
  );
}
