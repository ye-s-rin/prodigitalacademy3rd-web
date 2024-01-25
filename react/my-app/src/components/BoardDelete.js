import React from "react";

export default function BoardDelete(props) {
  return (
    <div>
      <button
        onClick={(e) => {
          {
            delete props.obj[props.idx];
            props.setObj(Object.assign({}, props.obj));
            console.log(props.idx);
            console.log(props.obj);
          }
        }}
      >
        delete
      </button>
    </div>
  );
}
