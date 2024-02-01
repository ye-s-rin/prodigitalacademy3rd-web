import React, { useEffect, useState } from "react";

type Props = {
  updateTodo: (idx: number, text: string) => void;
  idx: number;
  text: string;
};

type Disabled = {
  disabled: boolean;
};
type Text = {
  text: string;
};

export default function TodoUpdate(props: Props) {
  const [disabled, setDisabled] = useState<Disabled>({ disabled: true });
  const [text, setText] = useState<Text>({ text: "" });

  useEffect(() => {
    setText({ text: props.text });
    console.log("update initial props.text: " + props.text);
    console.log("update initial: " + text.text);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr ",
        gridTemplateColumns: "1fr 0.25fr",
      }}
    >
      <input
        type="text"
        placeholder={props.text}
        disabled={disabled.disabled}
        onChange={(e) => {
          setText({ text: e.target.value });
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (text.text.length > 0) {
              props.updateTodo(props.idx, text.text);
              console.log("update: " + text.text);
            }
            setDisabled((prev) => ({ disabled: !prev.disabled }));
          }
        }}
      />
      <button
        onClick={() => {
          if (!disabled.disabled) {
            if (text.text.length > 0) {
              props.updateTodo(props.idx, text.text);
              console.log("update: " + text.text);
            }
          }
          setDisabled((prev) => ({ disabled: !prev.disabled }));
        }}
      >
        수정
      </button>
    </div>
  );
}
