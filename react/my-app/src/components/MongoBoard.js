import React, { useEffect, useState } from "react";
import axios from 'axios';
import MongoCommentCreate from './MongoCommentCreate';
import MongoCommentRead from "./MongoCommentRead";

export default function MongoBoard() {
  let i = 0;
  const [board, setBoard] = useState({});

  useEffect(() => {
    readBoard();
  }, []);

  const readBoard = () => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3001/board");
        setBoard(response.data);
        console.log(board);
      } catch (err) {
        console.error(err);
        throw err;
      }
    })();
  }

  const createComment = (id, comment) => {
    (async () => {
      try {
        console.log("createComment: "+id+", "+comment)
        const response = await axios.post("http://localhost:3001/board", {id: id, comment: comment});
        readBoard();
      } catch (err) {
        console.error(err);
        throw err;
      }
    })();
  };

  const deleteComment = (id, commentId) => {
    (async () => {
      try {
    console.log("deleteComment: "+id+", "+commentId)

        const response = await axios.delete("http://localhost:3001/board", 
        {
          data: {id: id, commentId: commentId}
        });
        readBoard();
      } catch (err) {
        console.error(err);
        throw err;
      }
    })();
  };

  const updateComment = (id, commentId) => {
    (async () => {
      try {
        const response = await axios.post("http://localhost:3001/board", {id: id, commentId: commentId});
        readBoard();
      } catch (err) {
        console.error(err);
        throw err;
      }
    })();
  };

  return (
    <div>
      {Object.keys(board).map((idx) => (
        <div key={i++}>
          <hr />
            <div style={{ display: "flex" }}></div>
            <h3>{board[idx].title}</h3>
            <p>{board[idx]._id}</p>
            <p>{board[idx].content}</p>
            <p>{board[idx].author}</p>
            <p>{board[idx].createAt}</p>

            <hr />
            <MongoCommentCreate createComment={createComment} id={board[idx]._id}/>
            <MongoCommentRead 
              updateComment={updateComment}
              deleteComment={deleteComment}
              comments={board[idx].comments}
              id={board[idx]._id} />
          <hr />
        </div>
      ))}
    </div>
  );
}
