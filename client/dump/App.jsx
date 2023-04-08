import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./Home";
import Room from "./Room";
import io from "socket.io-client";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";


const socket = io("https://Multiplayer-TIC-TAC-TOE.prajjwalkapoor.repl.co");
function App() {
  const [roomid, setRoomid] = useState(null);
  const [player, setPlayer] = useState(1);
  useEffect(() => {
    if (roomid) {
      socket.emit("join-room", roomid);
      socket.on("assign-player-2", () => {
        console.log("player 2 joined");
        setPlayer(2);
      });
      socket.on("room-full", () => {
        console.log("room full");
        setRoomid(null);
        setTimeout(() => {
          notify("Room is Full");
        }, 500);
      });
    }
    return () => {
      socket.off("room-full");
      socket.off("assign-player-2");
    };
  }, [roomid]);

  function notify(message) {
    toast(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      theme: "dark",
    });
  }
  console.log(player, "player");
  return (
    <div className='App'>
      <ToastContainer />
      {roomid ? (
        <Room
          notify={notify}
          toast={toast}
          currentPlayer={player}
          socket={socket}
          roomid={roomid}
        />
      ) : (
        <Home setRoomid={setRoomid} />
      )}
    </div>
  );
}

export default App;
