import React, { useRef, useState } from "react";

export default function Todo() {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);

  return (
    <div>
      <button onClick={focusInput}>입력하러 가기</button>

      <input
        ref={inputRef}
        type="text"
        onChange={(e) => {
          setText(e.target.value);
          if (e.key === "Enter") {
            setArr([text, ...arr]);
            setText("");
            inputRef.current.value = "";
          }
        }}
      />

      <div>
        {arr.map((elem) => (
          <div>{elem}</div>
        ))}
      </div>
    </div>
  );
}
