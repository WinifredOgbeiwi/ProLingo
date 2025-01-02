import React from "react";
import { Link } from "react-router";


const Button = ({ text, location, style,width }) => {
  return (
    <button
      className={`button ${width} h-11 font-semibold bg-primary01 text-black  hover:text-black before:bg-white ${
        style === "primary"
          ? " bg-primary01 text-black  hover:text-black before:bg-white"
          : " bg-white border-[3px] border-primary01 text-primary01  hover:text-white before:bg-primary01"
      }`}
    >
      <Link className="button-content" to={location}>
        {text}
      </Link>
    </button>
  );
};

export default Button;
