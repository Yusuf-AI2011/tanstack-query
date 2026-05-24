import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  return (
    <div className="w-full h-[100px] flex justify-center items-center border-b-2 py-[50px]">
      <button
        onClick={() => {
          navigate(location == "/" ? "/users" : "/");
        }}
        className="w-[80px] h-[30px] border-2 rounded-[6px]"
      >
        {location == "/" ? "Users" : "Todos"}
      </button>
    </div>
  );
};

export default Navbar;
