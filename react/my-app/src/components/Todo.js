import React, { useRef, useState } from "react";

export default function Todo() {
  let i = 0;
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      setArr([text, ...arr]);
      inputRef.current.value = "";
    }
  };

  return (
    <div>
      {/* <button onClick={focusInput}>입력하러 가기</button> */}

      <input
        ref={inputRef}
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          activeEnter(e);
        }}
      />

      <button
        onClick={(e) => {
          console.log(text);
          setArr([text, ...arr]);
          inputRef.current.value = "";
        }}
      >
        입력
      </button>

      <div>
        {arr.map((elem) => (
          <div key={i++}>{elem}</div>
          // child in a list should have a unique "key" prop.
        ))}
      </div>
    </div>
  );
}
