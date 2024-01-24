import React from "react";
import { useTheme } from "./ThemeProvider";

export default function MyPage() {
  const { theme } = useTheme();

  return (
    <div style={theme === "light" ? { backgroundColor: "#e9e9e9" } : { backgroundColor: "black" }}>
      <div style={{ minHeight: 600 }}>MyPage</div>
    </div>
  );
}
