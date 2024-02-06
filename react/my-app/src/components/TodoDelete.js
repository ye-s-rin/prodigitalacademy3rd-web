import React from "react";

export default function TodoDelete(props) {
  return (
    <div>
      <button
        onClick={(e) => {
          {
            props.deleteTodo(props.idx);
          }
        }}
      >
        삭제
      </button>
    </div>
  );
}
