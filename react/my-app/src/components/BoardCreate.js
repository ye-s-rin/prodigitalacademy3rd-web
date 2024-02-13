import React, { useState, useEffect } from "react";

export default function BoardCreate(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [nickname, setNickname] = useState("");
  const [display, setDisplay] = useState("none");

  const toggleDisplay = () => {
    if(display === "none"){
        setDisplay("");
    }
    else{
        setDisplay("none");
    }
  };

  useEffect(() => {
    setNickname(props.nickname);
  }, []);

  const reset = () => {
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <button
        onClick={(e) => {
          {
            if (title.length > 0){
                props.createBoard(title, content);
                reset();
            }
            toggleDisplay();
          }
        }}
      >
        create
      </button>
      <div style={{display: display}}>
        <input style={{ 
            backgroundColor: 'transparent', border: 'none', outline: 'none',
            fontSize: '20px', fontWeight: 'bold'
          }}
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <p>{nickname}</p>
        <input style={{ 
            backgroundColor: 'transparent', border: 'none', outline: 'none',
            fontSize: '15px'
          }}
          type="text"
          placeholder="content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}
