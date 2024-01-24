import React, { useState, useContext, createContext } from "react";

// 테마 컨텍스트 생성
const ThemeContext = createContext();

// 테마 제공자 컴포넌트
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // 초기 테마는 "light"
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

// 사용자 정의 훅
export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
}
