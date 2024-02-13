import React, { useState, useEffect } from "react";

export default function BoardUpdate(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [nickname, setNickname] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setNickname(props.nickname);
  }, []);

  useEffect(() => {
    setTitle(props.title);
    setContent(props.content);
    setNickname(props.nickname);
  }, [props.title, props.content]);

  return (
    <div>
      <button
        onClick={(e) => {
          {
            if (!disabled) {
              if (title.length > 0)
                props.updateBoard(props.idx, title, content);
            }
            setDisabled(!disabled);
          }
        }}
      >
        update
      </button>
      <div>
        <input style={{ 
            backgroundColor: 'transparent', border: 'none', outline: 'none',
            fontSize: '20px', fontWeight: 'bold'
          }}
          type="text"
          placeholder={title}
          value={title}
          disabled={disabled}
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
          placeholder={content}
          value={content}
          disabled={disabled}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}
