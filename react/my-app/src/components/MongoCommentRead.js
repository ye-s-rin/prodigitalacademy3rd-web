import React, { useRef, useState } from "react";
import MongoCommentUpdate from "./MongoCommentUpdate";
import MongoCommentDelete from "./MongoCommentDelete";

export default function MongoCommentRead(props) {
  let i = 0;

  return (
    <div>
      {props.comments.map((comment, idx) => (
        <div key={i++} style={{ display: 'flex'}}>
          <MongoCommentUpdate 
            updateComment={props.updateComment} id={props.id} commentId={idx} comment={comment}/>
          <MongoCommentDelete 
            deleteComment={props.deleteComment} id={props.id} commentId={idx}/>
        </div>
      ))}
    </div>
  );
}