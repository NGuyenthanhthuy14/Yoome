import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { router } from "./router";
import "./App.css";



function App() {
  return (
    <>
      <Router>
          <Routes>
              {router.map(({ path, Component, Layout, RouteType }) => {
                  const L = Layout ?? Fragment;
                  const R = typeof RouteType === "function" ? RouteType : Fragment;
                  return (
                      <Route
                          key={path}
                          path={path}
                          element={
                              <R>
                                  <L>
                                      <Component />
                                  </L>
                              </R>
                          }
                      />
                  );
              })}
          </Routes>
      </Router>
    </>
  )
}

export default App
