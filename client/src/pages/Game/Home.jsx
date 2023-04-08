import React, { useState } from "react";
import { useEffect } from "react";
export default function Home({ setRoomid }) {
  const [selected, setSelected] = useState(null);
  const [createRoomLoading, setCreateRoomLoading] = useState(false);
  const [joinRoomLoading, setJoinRoomLoading] = useState(false);

  useEffect(() => {
    if (selected === "create") {
      setCreateRoomLoading(true);
      setTimeout(() => {
        setRoomid(String(Math.floor(Math.random() * 1000000)));
        setCreateRoomLoading(false);
      }, 1000);
    }
  }, [selected]);
  return (
    <div className='home'>
      <h1>Multiplayer Tic tac toe</h1>
      <div className='buttons'>
        <button onClick={() => setSelected("create")}>
          {createRoomLoading ? "Loading.." : "Create Room"}
        </button>
        <button onClick={() => setSelected("join")}>Join Room</button>
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
  );
}
