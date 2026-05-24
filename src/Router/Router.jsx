import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "../components/Users";
import Todos from "../components/Todos";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default Router;
