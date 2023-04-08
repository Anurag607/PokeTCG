import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
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
