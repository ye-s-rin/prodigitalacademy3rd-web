import React from "react";
import { RouterProvider } from "react-router-dom";
import mainRouter from "./routers/main-router";
import BoardListPage from "./routes/board/page";
import AuthProvider from "./components/AuthProvider";
import { Provider } from 'react-redux'
import store from './store'
import Todo from "./features/todo/Todo";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        {/* <RouterProvider router={mainRouter} /> */}
        <Todo />
      </AuthProvider>
    </Provider>
  );
}
export default App;
