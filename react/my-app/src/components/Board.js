import React, { useEffect, useState } from "react";
import axios from "axios";
import BoardCreate from "./BoardCreate";
import BoardDelete from "./BoardDelete";
import BoardUpdate from "./BoardUpdate";
import BoardLogin from "./BoardLogin";

export default function Board() {
  let i = 0;
  const [board, setBoard] = useState([]);
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    readBoard();
  }, []);

  const readBoard = async () => {
    await axios.get("http://localhost:3001/board", { withCredentials: true })
    .then((response) => {
      console.log("board: ", response.data);

      let initBoard = [];
      for(const elem of response.data) {
        initBoard.push({
        id: elem._id,
        title: elem.title, 
        content: elem.content,
        author: elem.author._id,
        nickname: elem.author.nickname || "익명",
        });
      };
      setBoard(initBoard);
    })
    .catch((err) => console.log(err));
  console.log(board);
  }

  const deleteBoard = (idx) => {
    delete board[idx];
    setBoard(Object.assign({}, board));
  };

  const login = async (id, pw, next) => {
    await axios.post("http://localhost:3001/users/login", 
      { email: id, password: pw }, { withCredentials: true } ) // 이 옵션을 통해 쿠키를 요청에 포함
    .then((response) => {
        readBoard();
        setDisplay("");
    })
    .catch((err) => {
        console.log("login fail");
        next(err);
    });
  };

  return (
    <div>
      <BoardLogin login={login}/>
      
      <div style={{display: display}}>
        {board.map((elem, idx) => (
          <div key={elem.id}>
            <hr />
            <div style={{ display: "flex" }}>
              <BoardDelete deleteItem={deleteBoard} idx={idx} />
              <span style={{ margin: "0 0.1em" }}></span>
              <BoardUpdate obj={board} setObj={setBoard} idx={idx} />
            </div>

            <h3>{elem.title}</h3>
            <p>{elem.nickname}</p>
            <p>{elem.content}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
