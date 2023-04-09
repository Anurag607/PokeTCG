import React from "react";
import { useAddress } from "@thirdweb-dev/react";
import { useNavigate } from 'react-router-dom';
import { getUserNFTs } from "../firebase/clientApp.mjs";
import LandingPage from "./pages/LandingPage";
import { useDispatch } from "react-redux";
import { setUserNFTs } from "../redux/reducers/userNFTs.mjs";

export default function Home() {

  const address = useAddress();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if(address) {
      let data = getUserNFTs(address);
      console.log(data);
      dispatch(setUserNFTs(data.nfts));
      navigate('/game', {replace: true});
    }
  }, [address]);

  return (
    <LandingPage />
  );
}
