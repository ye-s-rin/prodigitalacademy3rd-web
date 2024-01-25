import React from "react";

export default function BoardDelete(props) {
  return (
    <div>
      <button
        onClick={(e) => {
          {
            delete props.obj[props.idx];
            props.setObj(Object.assign({}, props.obj));
          }
        }}
      >
        delete
      </button>
    </div>
  );
}
