import React from 'react'
import ConnectWalletBtn from './ConnectWalletBtn'
import Logo from '../images/pokeball.png'
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="relative w-screen h-fit px-10 flex bg-transparent justify-between items-center py-6 overflow-hidden cursor-pointer">
        <div className="w-fit h-fit flex justify-center items-center gap-4" onClick={() => navigate('/', {replace: true})}>
            <img src={Logo} width={42} height={42} />
            <h3 className=" text-2xl font-bold nav-bar:hidden pressStart">PokeTCG</h3>
        </div>
        <div className={"h-fit w-fit absolute right-5 top-5"}>
          <ConnectWalletBtn />
        </div>
    </nav>
  )
}

export default Navbar