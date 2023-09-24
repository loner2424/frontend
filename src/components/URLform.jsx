import React from "react";
import Button from "../buttons/Button";
import { useState } from "react";

import { useAuthContext } from "../hooks/useAuthContext";
import CopyToClipboard from "react-copy-to-clipboard";
const baseUrl = import.meta.env.VITE_BASE_URL;
const finalUrl = baseUrl + '/api/url'

const URLform = () => {
  const { user } = useAuthContext();

  var [longURL, setlongURL] = useState("");
  const [suffix, setSuffix] = useState("");
  const [shortURL, setshortURL] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    var user_id = "undefined";
    if (user) {
      user_id = user.userID;
    }
    if(longURL.indexOf("h")!==0 && longURL.indexOf("H")!==0 ){
      longURL = "http://" + longURL
    }
    var URL = { user_id, redirecturl: longURL };
    
    if (suffix != "") URL = { user_id, redirecturl: longURL, customID: suffix };
    const response = await fetch(finalUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(URL),
    });

    const json = await response.json();
    if (response.ok) {
      setError("");
      setshortURL("https://no-url.onrender.com/" + json.id);
    } else {
      setError(response);
    }
  };

  return (
    <div className="w-screen md:px-64 px-6 text-xs">
      <div className="block h-auto md:px-12 md:pb-12 p-4 bg-light rounded-lg font-extrabold text-xs md:text-2xl font-[inter] text-darkpurp">
        <form action="" onSubmit={handleSubmit}>
          <div className="text-center md:text-2xl text-darkpurp text-lg mb-4">SHORTEN!</div>
          <div className="mx-2 mt-4 text-sm md:text-lg ">PASTE THE LINK HERE</div>
          <div className="mx-2 h-8">
            <input
              required
              onChange={(e) => setlongURL(e.target.value)}
              className="text-xs font-semibold md:h-12 h-10 mt-2  px-2 rounded w-full focus:outline-0"
              type="text"
              placeholder="EXAMPLE: WWW.THIS-IS-A-VERY-VERY-BIG-LINK.COM/LETS-SHORTEN-IT"
              value={longURL}
            />
          </div>
          <div className="text-sm md:text-lg mx-2  mt-8 md:mt-10">SUFFIX (OPTIONAL)</div>
          <div className="mx-2 h-8">
            <input
              onChange={(e) => setSuffix(e.target.value)}
              className="text-xs font-semibold md:h-12 mt-2 h-10 px-2 rounded w-full focus:outline-0"
              type="text"
              placeholder="EXAMPLE: NOURL.COM/PERSONALISEDLINK"
              value={suffix}
            />
          </div>
          <div className=" mx-2 mt-8 text-sm text-red-500 font-normal">
            
          </div>
          {
            error && (<div className="w-full h-full mb-2 p-3 flex justify-center  border-2 border-red-500 rounded-md items-center hover:shadow-red-300 shadow-sm shadow-red-400 text-center">
              <div className=" items-center md:text-xs text-red-700 justify-center uppercase">This Custom URL is not available!</div>
              </div>
            )
          }

          <div className="text-xs md:text-lg mx-2 mt-4">
            <button type="submit" className="w-full">
              <Button text="GET SHORTENED LINK" />
            </button>
          </div>
          <CopyToClipboard text={shortURL}>
            <div className="text-xs md:text-lg mx-2 mt-4">
              <button type="button"className="w-full">
                <Button text="COPY TO CLIPBOARD" />
              </button>
            </div>
          </CopyToClipboard>
        </form>
        <div className="md:mt-8 mt-5 mx-2">
          <input
            value={shortURL}
            readOnly
            className="w-full md:h-12 h-10 rounded text-xs font-bold focus:outline-0 px-2 font-[inter]"
            placeholder="HTTPS://NOURL.COM/BESTLINKSHORTENER"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default URLform;
