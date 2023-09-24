import React from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";





const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()
  

  const handleSubmit = async (e) =>{
    e.preventDefault()
    await login (email,password);
  }
  return (
    <div className="w-full flex flex-col items-center h-screen bg-darkpurp text-[inter] text-darkpurp">
      <div className="md:text-2xl text-md text-light font-bold mt-8">
        LOGIN NOW AND START SHARING
      </div>
      <div className="text-sm text-light font-normal mt-2">
        DON'T HAVE AN ACCOUNT?
        <Link className="underline" to="/register">
          
          REGISTER NOW!
        </Link>
      </div>

      
      <div className=" flex justify-center w-full mt-8 md:px-56 md:py-4 py-2  md:text-2xl text-md font-[inter] font-semibold  ">
      
        <div className="bg-light w-full px-4 md:px-16 rounded h-auto mx-6 md:mx-56">
        <form onSubmit={handleSubmit} className="w-auto">
          <div className=" mt-4 md:mt-12"> E-MAIL ID OR USERNAME</div>
          <input
            required
            type="email"
            onChange={(e) =>setEmail(e.target.value)}
            className=" focus:outline-0 p-4 text-xl font-normal mt-2 md:mt-4 w-full rounded h-10 md:h-12 mb-4"
            value ={email}
          />
          <div className=" mt-4"> PASSWORD</div>
          <input
          required
            type="password"
            onChange={(e) =>setPassword(e.target.value)}
            className=" focus:outline-0 text-xl font-normal p-4 mt-2 md:mt-4 w-full rounded h-10 md:h-12 mb-4"
            value ={password}
          />
          <div className="flex justify-end text-lightpurp underline font-semibold cursor-pointer text-sm mb-4">
            Forgot your password?
          </div>
          
          {
            error && (<div className="w-full h-full mb-2 p-3 flex justify-center  border-2 border-red-500 rounded-md items-center hover:shadow-red-300 shadow-sm shadow-red-400 text-center">
              <div className=" items-center md:text-xs text-red-700 justify-center uppercase">{error}</div>
              </div>
            )
          }
          
          
          <div className="flex">
            <div className="text-lg w-full md:text-sm mb-10 md:mb-16">
              <div className=" w-full">
                <button className="w-full">
                <Button text="SIGN-IN" />
                {isLoading && (
                  <div  className="justify-center flex mt-4 text-darkpurp font-semibold">Loading...</div>
                )}
                </button>
              </div>
            </div>
          </div>
          </form>
        </div>
        
        </div>
        <div className="flex items-center justify-center">
      <div className=" md:text-xl flex text-xs mx-10 justify-center items-center text-light">
        BY SIGNING IN WITH AN ACCOUNT, YOU AGREE WITH NOURL'S TERMS OF SERVICE AND PRIVACY POLICY
      </div>
      </div>
    </div>
  );
};

export default Signin;
