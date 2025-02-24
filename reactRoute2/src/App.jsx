import React from "react";
import { Outlet } from "react-router-dom";
import { Footers, Headers } from "./components/Index"

function App() {
  return (
    <>
      <Headers />
      <Outlet />
      <Footers />
    </>
  );
}

export default App;
