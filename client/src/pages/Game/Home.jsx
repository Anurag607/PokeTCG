import React, { useEffect, useState } from "react";
import '../../styles/index.css';
import { Fade } from "react-awesome-reveal";
import { getUserNFTs } from "../../../firebase/clientApp.mjs";
import { useAddress, useContract, useListings } from "@thirdweb-dev/react";
import {useDispatch, useSelector } from "react-redux";
import { setUserNFTs } from "../../../redux/reducers/userNFTs.mjs";
import Card from "../../components/Card";
import BuyButton from "../../components/BuyButton";
import { useNavigate } from "react-router-dom";

export default function Home({ setRoomid }) {
  const [selected, setSelected] = useState(null);
  const [createRoomLoading, setCreateRoomLoading] = useState(false);
  const [joinRoomLoading, setJoinRoomLoading] = useState(false);
  const address = useAddress();
  const dispatch = useDispatch();
  // const { userNFTs } = useSelector(state => state.userNFTs)
  const [userNFTs, setUserNFTS] = useState([1]);
  const { contract } = useContract("0x2ED184a348935C941F821B2ac142db9C9c33EBe0","marketplace");
  const {data , isLoading, error} = useListings(contract);
  const navigate = useNavigate()

  console.log(data);

  useEffect(() => {
    if (selected === "create") {
      setCreateRoomLoading(true);
      setTimeout(() => {
        setRoomid(String(Math.floor(Math.random() * 1000000)));
        setCreateRoomLoading(false);
      }, 1000);
    }
  }, [selected]);

  useEffect(() => {
    let data = {}
    const func= async () => {
      data = await getUserNFTs(address);
      return data
    }
    func().then(()=>{
      console.log(data)
      setUserNFTS(data.nfts);
      dispatch(setUserNFTs(data.nfts));
    })
  }, [address])
  
  useEffect(() => {
    let data = {}
    const func= async () => {
      data = await getUserNFTs(address);
      return data
    }
    func().then(()=>{
      console.log(data)
      setUserNFTS(data.nfts);
      dispatch(setUserNFTs(data.nfts));
    })
  }, [])

  console.log("user");
  console.log(userNFTs);

  return (
    <Fade cascade>
      <div className='home'>
      <div className={"flex justify-center items-center gap-14 w-screen"}>
          <div className={"flex justify-center items-center w-screen flex-wrap px-10"}>
            <div className={"flex justify-between items-center flex-wrap w-screen h-fit gap-6 mt-[7.5rem]"}>
              <div className={"flex gap-2"}>
                  <button onClick={() => setSelected("create")} className="w-fit text-xl btn-gradient">
                    {createRoomLoading ? "Loading.." : "Create Room"}
                  </button>
                  <button onClick={() => setSelected("join")} className="w-fit text-xl btn-gradient">
                    Join Room
                  </button>    
              </div>          
              <button onClick={() => navigate('/marketplace', {replace: true})} className="w-fit text-xl btn-gradient">
                MarketPlace
              </button>  
            </div>
          </div>
        </div>
        {selected == "join" && (
          <form
            className='w-screen flex justify-center items-center mt-3'
            onSubmit={(e) => {
              e.preventDefault();
              setJoinRoomLoading(true);
              setTimeout(() => {
                setRoomid(e.target[0].value);
                setJoinRoomLoading(false);
              }, 1000);
            }}
          >
            <input
              type='text'
              className='bg-[#e8e8e8] px-4 py-2 rounded-md text-[#1d1a1b] font-bold'
              placeholder='Enter room id'
            />
            <button className='btn-gradient ml-3' type='submit'>
              {joinRoomLoading ? "Loading.." : "Join"}
            </button>
          </form>
        )}
      </div>
      <div className="card-container">
        {userNFTs && data && userNFTs.map((index) => {
          return (
            <div className="flex flex-col justify-center items-center gap-1 mb-10">
              <Card pokeName={data[index].asset.name} imgSrc={data[index].asset.image} hp={data[index].asset.attributes[0].value} statAttack={data[index].asset.attributes[1].value} statDefense={data[index].asset.attributes[2].value} statSpeed={data[index].asset.attributes[3].value} price={data[index].buyoutCurrencyValuePerToken.displayValue}/>
            </div>
          )
        })}
      </div>
    </Fade>
  );
}
