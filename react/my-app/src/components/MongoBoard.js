import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function MongoBoard() {
  let i = 0;
  const [board, setBoard] = useState({});
  useEffect(() => {
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
  }, []);

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
        </div>
      ))}
    </div>
  );
}
