import React, { useRef, useState } from "react";

export default function MongoCommentDelete(props) {
  let i = 0;

  return (
    <div>
      <button
        onClick={(e) => {
          {
            props.deleteComment(props.id, props.commentId);
          }
        }}
      >
        삭제
      </button>
    </div>
  );
}
