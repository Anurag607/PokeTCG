// Navbar.js

import React from "react";
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <nav className="bg-transparent z-50">
            <div className=" mx-auto ml-0 flex flex-start w-[80%] sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center pl-0">
                    <img src={logo} className="w-[270px] h-[82px] object-contain cursor-pointer mt-4" />
                  {/* <h1 className="font-bold text-white">BR33D</h1> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
