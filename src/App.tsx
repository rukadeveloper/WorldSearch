import React from "react";
import { Reset } from "styled-reset";

import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Reset />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};
export default App;
