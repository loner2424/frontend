import React from "react";
import URLform from "./URLform";
import { useAuthContext } from "../hooks/useAuthContext";
import { useUrlContext } from "../hooks/useUrlContext";
import { useEffect } from "react";
import URLdetail from "./URLdetail";

const Home = () => {
    
  return (
    <div className="w-screen h-screen bg-darkpurp">
      <div className="flex flex-col items-center h-screen bg-inherit">
        <div className="text-3xl font-extrabold mx-12 font-[inter] my-8 text-light">
          SAY GOODBYE TO LONG URLS!
        </div>
        <div className="">
        <URLform />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
