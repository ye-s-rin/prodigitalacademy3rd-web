import React, { useState } from "react";
import TodoCreate from "./TodoCreate";
import TodoUpdate from "./TodoUpdate";
import TodoDelete from "./TodoDelete";

export default function Todo() {
  let i = 0;
  const [arr, setArr] = useState([]);

  return (
    <div>
      <TodoCreate arr={arr} setArr={setArr} />

      <div>
        {arr.map((elem, idx) => (
          <div key={i++} style={{ display: "grid", gridTemplateRows: "1fr ", gridTemplateColumns: "1fr 0.25fr 2fr" }}>
            {/* <input type="text" placeholder={elem} disabled={true} style={{ color: "black" }} /> */}
            <TodoUpdate arr={arr} setArr={setArr} idx={idx} />
            <TodoDelete arr={arr} setArr={setArr} idx={idx} />
          </div>
          // child in a list should have a unique "key" prop.
        ))}
      </div>
    </div>
  );
}
