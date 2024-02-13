import React, { useEffect, useState } from "react";
import axios from "axios";
import BoardCreate from "./BoardCreate";
import BoardDelete from "./BoardDelete";
import BoardUpdate from "./BoardUpdate";
import BoardLogin from "./BoardLogin";

export default function Board() {
  let i = 0;
  const [board, setBoard] = useState([]);
  const [user, setUser] = useState({id:"", nickname: ""});
  const [display, setDisplay] = useState("none");

  useEffect(() => {
    readMongo();
  }, []);

  const readMongo = async () => {
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

  const createBoard = (title, content) => {
    setBoard((prevArr) => [...prevArr, {title: title, author: user.id, content: content}]);
  };

  const updateBoard = (idx, title, content) => {
    setBoard((prevArr) => {
      const newArr = [...prevArr];
      newArr[idx] = {...newArr[idx], title: title, content: content};
      return (newArr);
    });
  };

  const deleteBoard = (idx) => {
    const id = board[idx].id;

    setBoard((prevArr) => {
      const newArr = [...prevArr];
      newArr.splice(idx, 1);
      return (newArr);
    });
  };

  const login = async (id, pw, next) => {
    await axios.post("http://localhost:3001/users/login", 
      { email: id, password: pw }, { withCredentials: true } ) // 이 옵션을 통해 쿠키를 요청에 포함
    .then((response) => {
        readMongo();
        setDisplay("");
        setUser({id: response.data._id, nickname: response.data.nickname});
        console.log("user: ",user);
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
      <BoardCreate createBoard={createBoard} nickname={user.nickname}/>
        {board.map((elem, idx) => (
          <div key={elem.id}>
            <hr />
            <div style={{ display: "flex" }}>
              <BoardUpdate 
                updateBoard={updateBoard} 
                idx={idx}
                title={elem.title}
                content={elem.content}
                nickname={elem.nickname} />
              <span style={{ margin: "0 0.1em" }}></span>
              <BoardDelete deleteItem={deleteBoard} idx={idx} />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
