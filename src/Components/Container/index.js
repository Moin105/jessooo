import React from "react";
import Header from "../Header";
import Sops from "./Sops";
import AddSops from "./AddSops";
import { Route, Routes } from "react-router-dom";

import "./styles.css";
function Container() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Sops />} />
          <Route path="/addsops" element={<AddSops />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default Container;
