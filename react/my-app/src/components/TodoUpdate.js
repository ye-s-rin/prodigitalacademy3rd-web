import React, { useEffect, useState } from "react";

export default function TodoUpdate(props) {
  const [disabled, toggleDisabled] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    setText(props.arr[props.idx]);
  }, [setText, props.arr, props.idx]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr ",
        gridTemplateColumns: "1fr 0.25fr",
      }}
    >
      <input
        type="text"
        placeholder={props.arr[props.idx]}
        disabled={disabled}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            {
              props.arr[props.idx] = text;
              props.setArr(props.arr.slice());
              toggleDisabled(!disabled);
            }
          }
        }}
      />
      <button
        onClick={(e) => {
          {
            if (!disabled) {
              props.arr[props.idx] = text;
              props.setArr(props.arr.slice());
            }
            toggleDisabled(!disabled);
          }
        }}
      >
        수정
      </button>
      {console.log(1, text)}
      {console.log(2, props.arr, props.idx, props.arr[props.idx])}
    </div>
  );
}
