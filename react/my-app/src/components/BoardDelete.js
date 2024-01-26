import React from "react";

export default function BoardDelete(props) {
  return (
    <div>
      <button
        onClick={(e) => {
          {
            props.deleteItem(props.idx);
          }
        }}
      >
        delete
      </button>
    </div>
  );
}
