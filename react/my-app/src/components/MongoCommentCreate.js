import React, { useRef, useState } from "react";
import axios from 'axios';

export default function MongoCommentCreate(props) {
  const inputRef = useRef();
  const [comment, setComment] = useState("");

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => {
          setComment(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (inputRef.current?.value){
              props.createComment(props.id, comment);
              inputRef.current.value = "";
            }
          }
        }}
      />
      <button
        onClick={(e) => {
          if (inputRef.current?.value) {
            props.createComment(props.id, comment);
            inputRef.current.value = "";
          }
        }}
      >
        입력
      </button>
    </div>
  );
}
