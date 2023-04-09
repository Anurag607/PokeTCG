import React from 'react'
import ConnectWalletBtn from './ConnectWalletBtn'
import '../images/pokeball.png'

const Navbar = () => {
  return (
    <nav className="relative w-screen h-fit px-10 flex bg-transparent justify-between items-center py-4 overflow-hidden">
        <div className="w-fit h-fit flex justify-center items-center gap-2">
            <img src={'/pokeball.png'} width={42} height={42} />
            <h3 className="text-2xl font-bold nav-bar:hidden">PokeTCG</h3>
        </div>
        <div className={"h-fit w-fit absolute right-5 top-2"}>
          <ConnectWalletBtn />
        </div>
    </nav>
  )
}

export default Navbar