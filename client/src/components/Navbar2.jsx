// Navbar.js

import React from "react";
import logo from "../../assets/logo.png"
import ConnectWalletBtn from './ConnectWalletBtn'

const Navbar = () => {
    return (
        <nav className="max-w-7xl bg-transparent z-50 ">
            <div className=" mx-auto ml-0 flex flex-start w-[80%] sm:items-stretch sm:justify-start">
                <div className="flex flex-grow items-center pl-0">
                    <img src={logo} className="w-[270px] h-[82px] object-contain cursor-pointer mt-4" />
                    {/* <h1 className="font-bold text-white">BR33D</h1> */}
                </div>
                <div className="flex-grow flex-end">
                    <ConnectWalletBtn />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
