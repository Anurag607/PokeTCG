import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import { useNavigate } from 'react-router-dom';
// import "./styles/Home.css";
import styles from "./styles";
import logo from "../assets/logo.png";
import heroImg from "../assets/hero-img.jpg"

import LandingPage from "./pages/LandingPage";

export default function Home() {

  const address = useAddress();
  const navigate = useNavigate();

  React.useEffect(() => {
    if(address) navigate('/game', {replace: true});
  }, [address]);

  return (
    <LandingPage />
  );

  // return (
  //   <div className={styles.hocContainer}>
  //     {/* {showAlert?.status && <Alert type={showAlert.type} message={showAlert.message} />} */}

  //     <div className={styles.hocContentBox}>
  //       <img src={logo} alt="logo" className={styles.hocLogo} onClick={() => navigate('/')} />

  //       <div className={styles.hocBodyWrapper}>
  //         <div className="flex flex-row w-full">
  //           <h1 className={`flex ${styles.headText} head-text`}>Welcome to WARLORDS <br /> a Web3 NFT Card Game</h1>
  //         </div>

  //         <p className={`${styles.normalText} my-10`}>Connect your wallet to start playing <br /> the ultimate Web3 Battle Card
  //   Game</p>

  //       </div>

  //       {/* <p className={styles.footerText}>Made with 💜 by JavaScript Mastery</p> */}
  //     </div>

  //     <div className="flex flex-1">
  //       <img src={heroImg} alt="hero-img" className="w-full xl:h-full object-cover" />
  //     </div>
  //   </div>
  // );

  // return (
  //   <div className="container">
  //     <main className="main">
  //       <div className={"content"}>
  //         <h1 className="title">
  //           Welcome to PokeTCG
  //         </h1>
  //         <div className="connect">
  //           <ConnectWallet dropdownPosition={{
  //             align: 'center',
  //             side: 'bottom'
  //           }} />
  //         </div>
  //       </div>
  //     </main>
  //   </div>
  // );
}
