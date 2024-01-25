import React, { useEffect, useState } from "react";
import BoardDelete from "./BoardDelete";
import BoardUpdate from "./BoardUpdate";

export default function Board() {
  let i = 0;
  const [obj, setObj] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setObj(json));
  }, []);

  console.log(obj);
  return (
    <div>
      {Object.keys(obj).map((idx) => (
        <div key={i++}>
          <hr />
          <div style={{ display: "flex" }}>
            <BoardDelete obj={obj} setObj={setObj} idx={idx} />
            <span style={{ margin: "0 0.1em" }}></span>
            <BoardUpdate obj={obj} setObj={setObj} idx={idx} />
          </div>

          <h3>{obj[idx].title}</h3>
          <p>{obj[idx].body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
