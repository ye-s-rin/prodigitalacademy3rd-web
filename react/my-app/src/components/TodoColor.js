import React, {useState} from "react";

export default function TodoColor(props) {
  let i = 0;
  const [colors, setColors] = useState(["pink", "lightblue", "yellow", "lightgray"]);

  return (
    <div>
      {colors.map((color, idx) => (
        <button
          key={idx}
          style={{
            width: "25px",
            height: "25px",
            backgroundColor: color,
            borderRadius: "50%",
            display: "inline-block",
            marginRight: "5%",
            border: "none",
          }}
          onClick={(e) => {
            props.applyColor(color);
          }}
        ></button>
      ))}
    </div>
  );
}
