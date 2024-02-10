import React, { useRef } from "react";

export default function TodoSearch(props) {
  const inputRef = useRef();
  
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="검색"
        onChange={(e) => {
          if(e.target.value.length === 0){
            props.readMongo();
          }
          else{
            props.searchEqual(e.target.value);
          }
        }}
      />
      <hr />
    </div>
  );
}