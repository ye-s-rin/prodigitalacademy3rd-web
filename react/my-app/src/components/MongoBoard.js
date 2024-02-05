import React, { useEffect, useState } from "react";
import axios from 'axios';
import MongoCommentCreate from './MongoCommentCreate';
import MongoCommentCreatesRead from "./MongoCommentCreatesRead";

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
          const response = await axios.post("http://localhost:3001/board", {id: id, comment: comment});
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
            <MongoCommentCreatesRead comments={board[idx].comments}/>
          <hr />
        </div>
      ))}
    </div>
  );
}
