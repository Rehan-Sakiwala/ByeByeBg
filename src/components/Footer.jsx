import React from "react";
import { assets, footer_cons } from "../assets/assets";

function Footer() {
  return (
    <div>
      {/*  Made with love  */}
      <div className="flex justify-center px-4 lg:px-44 pb-3">
        <div className="flex flex-col items-center text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            Made with{" "}
            <img
              src="https://img.icons8.com/?size=100&id=64452&format=png&color=000000"
              alt="heart_here"
              width="25"
              height="25"
            />
            <div>by Rehan Sakiwala</div>
          </div>
        </div>
      </div>

      {/** Footer start */}
      <footer className="flex item-center justify-between gap-4 px-4 lg:px-44 py-3">
        {" "}
        <img src={assets.logo2} alt="log" width="45" />{" "}
        <p className="flex-1 border-l border-gray-100 max-sm:hidden py-3">
          {" "}
          &copy; {new Date().getFullYear()} ByeByeBG | All rights reserved.{" "}
        </p>
        <div className="flex gap-3">
          {footer_cons.map((item, index) => (
            <a
              href={item.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.logo} alt="logo_here" width={40} />
            </a>
          ))}
        </div>
        <p className="text-center text-gray-700 font-medium"></p>
      </footer>
    </div>
  );
}

export default Footer;
