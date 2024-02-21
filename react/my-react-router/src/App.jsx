import React from "react";
import { RouterProvider } from "react-router-dom";
import mainRouter from "./routers/main-router";
import BoardListPage from "./routes/board/page";
import AuthProvider from "./components/AuthProvider";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <RouterProvider router={mainRouter} />
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}
export default App;
