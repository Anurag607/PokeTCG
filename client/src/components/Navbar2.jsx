// Navbar.js

import React from "react";
import logo from "../../assets/logo.png"
import warlords from "../../assets/warlords.png"
import ConnectWalletBtn from "./ConnectWalletBtn";

const Navbar = () => {
    return (
        <nav className="relative w-screen h-fit flex bg-transparent justify-between items-start overflow-hidden px-10 pt-2">
            <div className=" mx-auto ml-0 flex flex-wrap flex-start w-[80%] sm:items-stretch sm:justify-start">
                <div className="flex items-center justify-center gap-2">
                    <img src={logo} className="w-[60px] h-[82px] object-contain cursor-pointer" />
                    <img src={warlords} className="w-[180px] h-[82px] object-contain cursor-pointer nav-bar-2:hidden" />
                </div>
                <div className={"h-fit w-fit absolute right-16 top-5 max-sm:top-6"}>
                    <ConnectWalletBtn />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
