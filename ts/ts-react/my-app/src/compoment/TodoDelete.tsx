import React from "react";

type Props = {
  deleteTodo: (idx: number) => void;
  idx: number;
};

export default function TodoDelete(props: Props) {
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
