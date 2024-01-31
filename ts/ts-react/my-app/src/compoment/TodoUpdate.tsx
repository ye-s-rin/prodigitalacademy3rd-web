import React, { useEffect, useState } from "react";

export type Props = {
  arr: string[];
  setArr: (arr: string[]) => void;
  idx: number;
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
    setText({ text: props.arr[props.idx] });
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
        placeholder={props.arr[props.idx]}
        disabled={disabled.disabled}
        onChange={(e) => {
          setText({ text: e.target.value });
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.arr[props.idx] = text.text;
            props.setArr([...props.arr]);
            setDisabled((prev) => ({ disabled: !prev.disabled }));
          }
        }}
      />
      <button
        onClick={() => {
          if (!disabled.disabled) {
            props.arr[props.idx] = text.text;
            props.setArr([...props.arr]);
          }
          setDisabled((prev) => ({ disabled: !prev.disabled }));
        }}
      >
        수정
      </button>
    </div>
  );
}
