import React, { useRef, useState } from "react";

export default function TodoSearch(props) {
  const inputRef = useRef();
  const [text, setText] = useState("");
  
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => {
          setText(e.target.value);
          props.searchEqual(text);
          if(text.length === 0){
            props.readMongo();
          };
        }}
      />
      <button>
        검색
      </button>
      <hr />
    </div>
  );
}