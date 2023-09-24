import React from "react";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, password);
  };
  return (
    <div className="w-screen flex flex-col items-center h-screen bg-darkpurp text-[inter] text-darkpurp">
      <div className="md:text-2xl text-md text-light font-bold mt-8">
        REGISTER NOW AND START SHARING
      </div>
      <div className="text-sm text-light font-normal mt-2">
        ALREADY HAVE AN ACCOUNT?
        <Link className="underline" to="/signin">
          LOGIN NOW!
        </Link>
      </div>

      <div className="  flex justify-center w-full mt-8 md:px-56 md:py-4 py-2  md:text-2xl text-md font-[inter] font-semibold ">
        <div className="bg-light w-full px-4 md:px-16 rounded h-auto mx-6 md:mx-56">
          <form onSubmit={handleSubmit}>
            <div className=" mt-4 md:mt-12"> USERNAME</div>
            <input
            required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              className=" focus:outline-0 p-4 text-xl font-normal mt-2 md:mt-4 w-full rounded h-10 md:h-12 mb-4"
              value={username}
            />
            <div className=" mt-2 md:mt-4"> E-MAIL ID </div>
            <input
            required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className=" focus:outline-0 p-4 text-xl font-normal mt-2 md:mt-4 w-full rounded h-10 md:h-12 mb-4"
              value={email}
            />
            <div className=" mt-4"> PASSWORD</div>

            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              type="password"
              className=" focus:outline-0 text-xl font-normal p-4 mt-2 md:mt-4 w-full rounded h-10 md:h-12 mb-4"
              value={password}
            />
            {
            error && (<div className="w-full h-full mb-2 p-3 flex justify-center  border-2 border-red-500 rounded-md items-center hover:shadow-red-300 shadow-sm shadow-red-400 text-center">
              <div className=" items-center md:text-xs text-red-700 justify-center uppercase">{error}</div>
              </div>
            )
          }

            <div className="flex">
              <div className="test-lg w-full md:text-sm mb-8 md:mb-16">
                <div className=" mt-4 md:mt-8 w-full">
                  <button className="w-full">
                    <Button text="REGISTER" />
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
        BY REGISTERING WITH AN ACCOUNT, YOU AGREE WITH NOURL'S TERMS OF SERVICE AND PRIVACY POLICY
      </div>
      </div>
      
    </div>
  );
};

export default Register;
