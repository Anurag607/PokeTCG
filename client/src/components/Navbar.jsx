import React from 'react'
import ConnectWalletBtn from './ConnectWalletBtn'
import '../images/pokeball.png'

const Navbar = () => {
  return (
    <div className="w-screen h-fit px-10 flex bg-red-500 justify-between items-center py-4">
        <div className="w-fit h-fit flex justify-center items-center gap-2">
            <img src={'/pokeball.png'} width={42} height={42} />
            <h3 className="text-2xl font-bold">PokeTCG</h3>
        </div>
        <div className={"h-fit w-fit absolute right-5 top-2"}>
          <ConnectWalletBtn />
        </div>
    </div>
  )
}

export default Navbar