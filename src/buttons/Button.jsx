import React from "react";

const Button = (props) => {
  return (
<div className=" block relative">
    <div
      className=" z-50 absolute w-full flex justify-center items-center grow md:px-8 px-2  h-10 bg-darkpurp text-light hover:translate-x-1 hover:duration-200 hover:translate-y-1
 focus:translate-x-1 focus:translate-y-1 
 hover:bg-gradient-to-r hover:from-darkpurp hover:to-lightpurp"
    >
      {props.text}
    </div>
    <div className=" flex justify-center grow items-center md:px-8 px-2 h-10 bg-lightpurp translate-x-1 translate-y-1">
      {props.text}
    </div>
  </div>



  

    
  );
};

export default Button;
