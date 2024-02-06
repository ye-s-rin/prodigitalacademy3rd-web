import React, { useEffect, useState } from "react";

export default function MongoCommentUpdate(props) {
  const [disabled, setDisabled] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    setText(props.comment);
    console.log("init comment["+props.commentId+"] in update.js: from "+props.comment+" to "+text); 
  }, [props.comment]); 

  return (
    <div>
      <input
        type="text"
        placeholder={props.comment}
        disabled={disabled}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (text.length > 0) {
              props.updateComment(props.id, props.commentId, text);
            }
            setDisabled(!disabled);
          }
        }}
      />
      <button
        onClick={(e) => {
          if (!disabled) {
            if (text.length > 0) {
              props.updateComment(props.id, props.commentId, text);
            }
          }
          setDisabled(!disabled);
        }}
      >
        수정
      </button>
    </div>
  );
}
