import React, { useEffect, useState } from "react";

type Props = {
  updateTodo: (idx: number, text: string) => void;
  idx: number;
  text: string;
};

export default function TodoUpdate(props: Props) {
  const [disabled, setDisabled] = useState(true);
  const [text, setText] = useState("" );

  useEffect(() => {
    setText(props.text);
  }, [props.text]);

  return (
    <div>
      <input
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
        onClick={() => {
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
