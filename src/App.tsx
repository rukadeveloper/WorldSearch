import React from "react";
import { Reset } from "styled-reset";

import Header from "./components/Header";
import Main from "./components/Main";
import Write from "./components/Write";
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Reset />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </>
  );
};
export default App;
