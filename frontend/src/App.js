// react
// import React, { useRef, useEffect, useState } from "react"
// router
import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";

//pages
import DetailPage from "./pages/DetailPage";
import IndexPage from "./pages/IndexPage";
import MainPage from "./pages/MainPage";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
