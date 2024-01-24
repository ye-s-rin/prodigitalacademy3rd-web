import React, { useState } from "react";

export default function TodoDelete(props) {
  return (
    <div>
      <button
        onClick={(e) => {
          {
            props.arr.splice(props.idx, 1);
            props.setArr(props.arr.slice());
          }
        }}
      >
        삭제
      </button>
    </div>
  );
}
