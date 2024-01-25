import React, { useEffect, useState } from "react";

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
    <div key={i++}>
      {Object.keys(obj).map((key) => (
        <div>
          <h3>{obj[key].title}</h3>
          <p>{obj[key].body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
