import React from "react";
import { RouterProvider } from "react-router-dom";
import mainRouter from "./routers/main-router";
import BoardListPage from "./routes/board/page";

function App() {
  return (
    <RouterProvider router={mainRouter}>
      <BoardListPage />
    </RouterProvider>
  );
}
export default App;
