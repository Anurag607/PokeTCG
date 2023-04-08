import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import { useNavigate } from 'react-router-dom';
import "./styles/Home.css";

export default function Home() {

  const address = useAddress();
  const navigate = useNavigate();

  React.useEffect(() => {
    if(address) navigate('/game', {replace: true});
  }, [address]);

  return (
    <div className="container">
      <main className="main">
        <div className={"content"}>
          <h1 className="title">
            Welcome to PokeTCG
          </h1>
          <div className="connect">
            <ConnectWallet dropdownPosition={{
              align: 'center',
              side: 'bottom'
            }} />
          </div>
        </div>
      </main>
    </div>
  );
}
