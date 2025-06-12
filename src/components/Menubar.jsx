import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  SignedOut,
  SignedIn,
  useClerk,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

function Menubar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { openSignIn, openSignUp } = useClerk();

  const openRegister = () => {
    openSignUp({});
  };

  const { user } = useUser();

  const openLogin = () => {
    openSignIn({});
  };

  return (
    <nav className="bg-white px-8 py-4 flex justify-between items-center">
      {/* Left side: Logo + text*/}
      <Link className="flex items-center space-x-2" to="/">
        <img
          src={assets.logo2}
          alt="logo-here"
          className="h-8 w-8 object-contain cursor-pointer"
        />
        <span className="text-2xl font-semibold text-indigo-700 cursor-pointer">
          ByeBye
          <span className="text-gray-400 cursor-pointer">BG</span>
        </span>
      </Link>

      {/* Right side : Action buttons*/}
      <div className="hidden md:flex items-center space-x-4">
        {/** Signed out */}
        <SignedOut>
          <button
            className="text-gray-700 hover:text-blue-500 font-medium"
            onClick={openLogin}
          >
            Login
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full transition-all"
            onClick={openRegister}
          >
            Signup
          </button>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-5 py-1 5 sm:py-2 5 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer">
              <img src={assets.credits} alt="credits" height={24} width={24} />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credits: 0
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden">Hi, {user?.fullName}</p>
          </div>
          <UserButton />
        </SignedIn>
      </div>

      {/*Mobile hamburger*/}
      <div className="flex md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/*Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-8 bg-white shadow-md rounded-md flex flex-col space-y-4 p-4 w-40">
          <SignedOut>
            <button
              className="text-gray-700 hover:text-blue-500 font-medium text-left"
              onClick={openLogin}
            >
              Login
            </button>
            <button
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full text-center"
              onClick={openRegister}
            >
              Signup
            </button>
          </SignedOut>

          <SignedIn>
            <UserButton />
            <div className="flex items-center gap-2 sm:gap-3">
              <button className="flex items-center gap-2 bg-blue-100 px-4 py-1 5 sm:py-2 5 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer">
                <img
                  src={assets.credits}
                  alt="credits"
                  height={24}
                  width={24}
                />
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  Credits: 0
                </p>
              </button>
            </div>
          </SignedIn>
        </div>
      )}
    </nav>
  );
}

export default Menubar;
