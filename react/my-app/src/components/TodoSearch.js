import React, { useRef, useState } from "react";

export default function TodoSearch(props) {
  const inputRef = useRef();
  const [text, setText] = useState("");
  
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="검색"
        onChange={(e) => {
          setText(e.target.value);
          props.searchEqual(text);
          if(text.length === 0){
            props.readMongo();
          };
        }}
      />
      <hr />
    </div>
  );
}