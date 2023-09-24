import React from "react";
import Logo from "../Assets/logo.png";
import { useState } from "react";
import Button from "../buttons/Button";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleClick = () => {
    logout();
  };
  return (
    <>
      <nav className="w-screen bg-light">
      <div className="NavElements flex flex-row justify-between items-center px-4 md:px-10 h-20">
        <div className="FirstTwo hidden md:flex">
          <ul className="flex flex-row font-bold text-lg space-x-4">
            <Link to='/whynourl' className="cursor-pointer text-darkpurp hover:text-lightpurp hover:underline">
              WHY NO-URL
            </Link>
            <Link to='/aboutus' className="cursor-pointer text-darkpurp hover:text-lightpurp hover:underline">
              ABOUT US
            </Link>
          </ul>
        </div>

        <div className="cursor-pointer w-[24]">
          <Link to="/">
            <img className="h-10 md:h-16" src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="md:hidden ml-auto">
          {menuOpen ? (<>
            <img
            className="w-5 h-5 cursor-pointer"
            src="https://img.icons8.com/material-outlined/24/delete-sign.png"
            alt=""
            onClick={toggleMenu}
          />
          </>) : (<>
            <img
            className="w-5 h-5 cursor-pointer"
            src="https://img.icons8.com/ios-filled/50/menu--v1.png"
            alt=""
            onClick={toggleMenu}
          /></>) }
          
        </div>

        <div className="flex items-center font-bold space-x-4 md:space-x-8">
          {!user && (
            <ul className="hidden md:flex flex-row space-x-4">
              <li className="cursor-pointer">
                <Link to="/signin">
                  <Button text="LOGIN"></Button>
                </Link>
              </li>
              <li>
                <div className="w-1 h-12 bg-lightpurp rounded"></div>
              </li>
              <li className="cursor-pointer">
                <Link to="/register">
                  <Button text="REGISTER"></Button>
                </Link>
              </li>
            </ul>
          )}
          {user && (
            <ul className="hidden md:flex flex-row space-x-4 items-center">
              <li className="cursor-pointer">
                <button onClick={handleClick}>
                  <Button text="LOGOUT"></Button>
                </button>
              </li>
              <li>
                <div className="w-1 h-12 bg-lightpurp rounded"></div>
              </li>
              <div className="font-bold flex text-darkpurp flex-col">
                <li className="">Welcome {user.username}</li>
                <li className="underline underline-offset-4">
                  <Link to="/link">YOUR LINKS</Link>
                </li>
              </div>
            </ul>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden font-bold text-darkpurp bg-light w-48 h-full">
          <ul className="flex flex-col space-y-2 pl-4 pb-4">
            {user ? (
              <>
                <li className="cursor-pointer" onClick={handleClick}>
                  LOGOUT
                </li>
                <li className="cursor-pointer hover:text-lightpurp hover:underline">
                  <Link to="/link">YOUR LINKS</Link>
                </li>
              </>
            ) : (
              <>
                <li className="cursor-pointer">
                  <Link to="/signin">LOGIN</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/register">REGISTER</Link>
                </li>
                
              </>
            )}
            <Link to='/whynourl' className="cursor-pointer hover:text-lightpurp hover:underline">
              WHY NO-URL
            </Link>
            <Link to='/aboutus' className="cursor-pointer hover:text-lightpurp hover:underline">
              ABOUT US
            </Link>
            <Link to='/' className="cursor-pointer hover:text-lightpurp hover:underline">
              CREATE NEW LINKS
            </Link>
          </ul>
        </div>
      )}
    </nav>

    </>
  );
};

export default Navbar;
