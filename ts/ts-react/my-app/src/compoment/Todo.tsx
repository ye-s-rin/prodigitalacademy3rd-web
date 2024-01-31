import React, { useState, useEffect } from "react";
import TodoCreate from "./TodoCreate";
import TodoUpdate from "./TodoUpdate";
// import TodoDelete from "./TodoDelete";

type Arr = {
  arr: string[];
};

export default function Todo() {
  let i = 0;
  const [arr, setArr] = useState<Arr>({ arr: [] });

  return (
    <div>
      <TodoCreate
        arr={arr.arr}
        setArr={(newArr: string[]) => setArr({ arr: newArr })}
      />

      <div>
        {arr.arr.map((elem, idx) => (
          <div
            key={i++}
            style={{
              display: "grid",
              gridTemplateRows: "1fr ",
              gridTemplateColumns: "1fr 0.25fr 2fr",
            }}
          >
            <TodoUpdate
              arr={arr.arr}
              setArr={(newArr: string[]) => setArr({ arr: newArr })}
              idx={idx}
            />
            {/* <TodoDelete arr={arr} setArr={setArr} idx={idx} /> */}
          </div>
          // child in a list should have a unique "key" prop.
        ))}
      </div>
    </div>
  );
}
