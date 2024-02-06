import React, { useRef, useState } from "react";

type Props = {
  createTodo: (text: string) => void;
};

type InputRef = {
  inputRef: React.RefObject<HTMLInputElement>;
};

export default function TodoCreate(props: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
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
            if (inputRef.current?.value) {
              props.createTodo(text);
              inputRef.current.value = "";
            }
          }
        }}
      />
      <button
        onClick={() => {
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
