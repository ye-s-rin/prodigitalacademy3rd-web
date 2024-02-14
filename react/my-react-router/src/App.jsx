import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { mainRoutes } from './routers/main-router';
function renderRoutes(routesObj) {
  return routesObj.map((route) => {
    if (route.children) {
      return (
        <Route key={route.path} path={route.path} index={route.index} e
          lement={route.element}>
          {route.children ? renderRoutes(route.children) : null}
        </Route>
      );
    }
    return <Route key={route.path} path={route.path} index={route.index
    } element={route.element} />;
  });
}

function App() {
  return (
    <div className='min-vh-100'>
      <BrowserRouter>
        <Routes>{renderRoutes(mainRoutes)}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;