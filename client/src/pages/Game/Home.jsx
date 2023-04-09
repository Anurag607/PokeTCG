import React, { useEffect, useState } from "react";
import '../../styles/index.css';
import { Fade } from "react-awesome-reveal";
import { getUserNFTs } from "../../../firebase/clientApp.mjs";
import { useAddress } from "@thirdweb-dev/react";
import {useDispatch, useSelector } from "react-redux";
import { setUserNFTs } from "../../../redux/reducers/userNFTs.mjs";

export default function Home({ setRoomid }) {
  const [selected, setSelected] = useState(null);
  const [createRoomLoading, setCreateRoomLoading] = useState(false);
  const [joinRoomLoading, setJoinRoomLoading] = useState(false);
  const address = useAddress();
  const dispatch = useDispatch();
  const { userNFTs } = useSelector(state => state.userNFTs)

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
    let data = getUserNFTs(address);
    console.log(data);
    dispatch(setUserNFTs(data.nfts));
  }, [address])

  return (
    <Fade cascade>
      <div className='home'>
        <div className={"flex justify-center items-center gap-14 w-screen"}>
          <div className={"flex justify-center items-center flex-wrap w-fit h-fit gap-6 mt-[7.5rem]"}>
            <button onClick={() => setSelected("create")} className="w-fit text-2xl btn-gradient">
              {createRoomLoading ? "Loading.." : "Create Room"}
            </button>
            <button onClick={() => setSelected("join")} className="w-fit text-2xl btn-gradient">
              Join Room
            </button>
          </div>
        </div>
        {selected == "join" && (
          <form
            className='join-room'
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
              className='room-input'
              placeholder='Enter room id'
            />
            <button className='join-btn' type='submit'>
              {joinRoomLoading ? "Loading.." : "Join"}
            </button>
          </form>
        )}
      </div>
    </Fade>
  );
}
