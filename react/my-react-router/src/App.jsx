import React from "react";
import { RouterProvider } from "react-router-dom";
import mainRouter from "./routers/main-router";
import BoardListPage from "./routes/board/page";
import AuthProvider from "./components/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={mainRouter} />
    </AuthProvider>
  );
}
export default App;
