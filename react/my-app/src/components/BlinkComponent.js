import React, { useEffect, useState } from "react";

export default function BlinkComponent({ text }) {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setShowText((showText) => !showText);
    }, 1000);
    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return <div>{showText ? text : null}</div>;
}
