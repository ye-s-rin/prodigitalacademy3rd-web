import React, { useState } from "react";

export default function BoardUpdate(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [display, setDisplay] = useState("none");
  const toggleDisplay = () => {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };

  return (
    <div>
      <button
        onClick={(e) => {
          {
            if (display === "block") {
              props.obj[props.idx].title = title;
              props.obj[props.idx].body = body;
              props.setObj(Object.assign({}, props.obj));
            }
            toggleDisplay();
          }
        }}
      >
        update
      </button>
      <div style={{ display: display }}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              {
                props.obj[props.idx].title = title;
                props.setObj(Object.assign({}, props.obj));
              }
            }
          }}
        ></input>
        <input
          type="text"
          placeholder="body"
          onChange={(e) => {
            setBody(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              {
                props.obj[props.idx].body = body;
                props.setObj(Object.assign({}, props.obj));
              }
            }
          }}
        ></input>
      </div>
    </div>
  );
}
