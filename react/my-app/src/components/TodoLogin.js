import React, { useRef, useState } from "react";

export default function TodoLogin(props) {
  const idRef = useRef();
  const [id, setId] = useState("");
  const pwRef = useRef();
  const [pw, setPw] = useState("");
  
  return (
    <div>
        <div>
      <input
        ref={idRef}
        type="text"
        placeholder="아이디 입력"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
    </div>
    <div>
    <input
      ref={pwRef}
      type="password"
      placeholder="비밀번호 입력"
      onChange={(e) => {
        setPw(e.target.value);
      }}
    />
    <button
        onClick={(e) => {
          console.log("id.length: ", id.length, "pw.length: ",pw.length);
            if (id.length > 0 && pw.length > 0) {
                console.log("login: ",id, pw);
            }
            else {
              idRef.current.value = "";
              pwRef.current.value = "";
              setId("");
              setPw("");
            }
        }}
    >
      로그인
    </button>
  </div>
  <hr />
    </div>
  );
}