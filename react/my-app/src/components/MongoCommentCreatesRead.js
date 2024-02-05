import React, { useRef, useState } from "react";

export default function MongoCommentCreatesRead(props) {
  let i = 0;

  return (
    <div>
      {props.comments.map((comment) => (
        <p key={i++}>{comment}</p>
      ))}
    </div>
  );
}
