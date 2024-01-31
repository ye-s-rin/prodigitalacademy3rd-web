import React, { useRef, useState } from "react";

export type Props = {
  arr: string[];
  setArr: (arr: string[]) => void;
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
            if (inputRef.current) {
              props.setArr([text, ...props.arr]);
              inputRef.current.value = "";
            }
          }
        }}
      />
      <button
        onClick={() => {
          if (inputRef.current) {
            props.setArr([text, ...props.arr]);
            inputRef.current.value = "";
          }
        }}
      >
        입력
      </button>
    </div>
  );
}
