import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Loader from "../../components/Loader";
import { useSelector, useDispatch } from 'react-redux'
import { mountCard, dismountCard } from '../../../redux/reducers/selectedCardSlice.mjs'

export default function Room({ roomid, socket, currentPlayer, notify, toast }) {
  const [playerChance, setPlayerChance] = useState(1);
  const [message, setMessage] = useState("Waiting For Player - 2 to Join");
  const [ready, setReady] = useState(false);
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [winner, setWinner] = useState(null);
  const dispatch = useDispatch();
  const { selectedCard } = useSelector(state => state.selectedCard)

  // Function for determining winner ...
  const winnerHandler = () => {
    // check rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2] &&
        board[i][0] !== ""
      ) {
        if (board[i][0] === "X") {
          setWinner(1);
          setMessage("Player 1 Won the match");
        } else {
          setWinner(2);
          setMessage("Player 2 Won the match");
        }
      }
    }
    // check columns
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i] &&
        board[0][i] !== ""
      ) {
        if (board[0][i] === "X") {
          setWinner(1);
          setMessage("Player 1 Won the match");
        } else {
          setWinner(2);
          setMessage("Player 2 Won the match");
        }
      }
    }
    // check diagonals
    if (
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2] &&
      board[0][0] !== ""
    ) {
      if (board[0][0] === "X") {
        setWinner(1);
        setMessage("Player 1 Won the match");
      } else {
        setWinner(2);
        setMessage("Player 2 Won the match");
      }
    }
    if (
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0] &&
      board[0][2] !== ""
    ) {
      if (board[0][2] === "X") {
        setWinner(1);
        setMessage("Player 1 Won the match");
      } else {
        setWinner(2);
        setMessage("Player 2 Won the match");
      }
    }

    // check draw
    let draw = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "") {
          draw = false;
        }
      }
    }
    if (draw && winner === null) {
      setWinner(0);
      setMessage("Match Draww!!!");
    }
  };

  // // OnClick handler for Play Button ...
  const playHandler = (col, i, j) => {
    if (
      col === "" &&
      winner === null &&
      playerChance === currentPlayer &&
      ready
    ) {
      const newBoard = board;
      newBoard[i][j] = playerChance === 1 ? "X" : "O";
      setBoard(newBoard);
      setPlayerChance(playerChance === 1 ? 2 : 1);
    } else if (ready === false) {
      notify("Waiting for Player - 2 to join");
    } else if (
      col !== "" &&
      winner === null &&
      playerChance !== currentPlayer
    ) {
      notify("Cell Already Filled");
    } else if (
      col === "" &&
      winner === null &&
      playerChance !== currentPlayer
    ) {
      notify("Not Your Chance");
    } else if (winner !== null) {
      notify("Match Over");
    }
  };

  // OnClick handler for Reset Button ...
  const resethandler = () => {
    if (ready === false) {
      notify("Waiting For Player - 2 to Join");
      return;
    }
    socket.emit("reset", roomid);
  };

  // OnClick handler for Card Button ...
  const cardHandler = (event) => {
    let target = event.currentTarget;
    let player = target.dataset.player
    target.style.translate = '0 1rem';

    // alert(`player ${player}, card ${target.dataset.id}`)
    
    if(player === 1) {
      let cards = document.querySelectorAll('.card1');
      console.log(cards);
      cards.forEach((card,i) => {
        if(card.dataset.id !== target.dataset.id) card.style.translate = '0 0rem';
      })
    }
    
    if(player === 2) {
      let cards = document.querySelectorAll('.card2');
      cards.forEach((card,i) => {
        if(card.dataset.id !== target.dataset.id) card.style.translate = '0 0rem';
      })
    }

    dispatch(mountCard({player, id: target.dataset.id}))
  }

  // Functin for checking for winner when player alternates ...
  useEffect(() => {
    socket.emit("sync-board", board, roomid, playerChance);
    winnerHandler();
    return () => {
      socket.off("sync-board");
    };
  }, [playerChance]);

  // Socket ...
  useEffect(() => {
    socket.on("player-2-connected", () => {
      setReady(true);
      setMessage("Let's play");
    });
    socket.on("get-board", (board, playerChance) => {
      setBoard(board);
      setPlayerChance(playerChance);
    });
    socket.on("reset-board", () => {
      setBoard([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
      setPlayerChance(1);
      setWinner(null);
      setMessage("Let's play");
    });

    return () => {
      socket.off("player-2-connected");
      socket.off("get-board");
      socket.off("reset-board");
    };
  }, [socket]);

  // Notification and Loader Delta W.R.T message ...
  useEffect(() => {

    // Loader Display ..
    let loader = document.querySelector('#loader');
    if(message === "Waiting For Player - 2 to Join") {
      loader.style.display = 'flex';
    } else loader.style.display = 'none';

    // Toastify ...
    notify(message);
    return () => {
      toast.dismiss();
    };
  }, [message]);

  // console.log(currentPlayer, playerChance, "currentPlayer", "playerChance");

  const cards = new Array(3).fill(1);

  return (
    <div className='py-[2rem] w-screen h-fit'>
      
      {/* Header Section (Details) ... */}
      <section className={classNames({
        'relative h-fit flex justify-between items-center w-screen px-10 mb-6': true,
        'nav-bar:flex-col nav-bar:gap-8': true,
      })}>
        {/* Messages ... */}
        <div className='flex justify-start items-start gap-4 h-[100%] relative'>
          <div className='flex top-bar:flex-col top-bar:items-start justify-start items-center gap-4 h-[100%] nav-bar:items-center'>
            <p className='text-md max-sm:text-sm'>{message}</p>
            <Loader />
          </div>
          {message === "Let's play" && <p>Player {playerChance}'s Turn</p>}
        </div>
        <div className='flex top-bar:flex-col justify-end items-center gap-4'>
          {/* Room Id ... */}
          <h3 className='text-md max-sm:text-sm'>
            Room Id:&nbsp;&nbsp;
            <code
              className={classNames({
                'text-[#bb86fc] text-md bg-[#1a1a1a]': true,
                "hover:bg-[#bb86fc] hover:text-[#1a1a1a]": true,
                'px-1 py-1': true,
                'transition-all duration-300 ease-in-out': true,
                'cursor-pointer': true,
                'max-sm:text-sm': true,
              })}
              onClick={() => {
                navigator.clipboard.writeText(roomid);
                notify("Room Id Copied to Clipboard");
              }}
            >
              {roomid}
            </code>
          </h3>
          {/* Reset Button ... */}
          <button className='text-md max-sm:text-sm' onClick={resethandler}>
            Reset the board
          </button>
        </div>
      </section>
      
      {/* Game Board Section ... */}
      <section className='w-screen h-[calc(100vh-122px)] relative'>
        <div className={classNames({
          "h-full px-10 mb-10": true,
          'flex justify-between items-start': true,
          "max-lg:flex-col max-lg:gap-[7.5rem] max-lg:px-7": true,
          "card:flex-col card:gap-[7.5rem] mobile:gap-[3rem]": true,
        })}>

          {/* Player 1 ... */}
          <div className={classNames({
            'w-fit h-full': true,
            "flex flex-col justify-start items-start gap-6": true,
            "max-lg:w-[90vw]": true,
          })}>
            <h4 className={playerChance == 1 ? "currentChance" : ""}>
              Player 1
            </h4>
            <div className='flex flex-wrap justify-start items-start w-fit h-fit gap-3'>
              {cards.map((el,i) => {
              return (
                <div 
                  key={i} 
                  data-id={i} 
                  data-player={1}
                  className={classNames({
                    'card-1 flex flex-grow-1': true,
                    'w-[8.75rem] h-[12rem] cursor-pointer': true,
                    'bg-white shadow-md rounded-md': true,
                    'bg-center bg-cover bg-no-repeat': true,
                    'transition all ease-in-out duration-300': true,
                    'hover:scale-110': true,
                    'mobile:w-[7rem] mobile:h-[10rem]': true,
                  })} 
                  style={{
                    backgroundImage: `url('/card.jpg')`
                  }}
                  onClick={cardHandler}
                />
              )
            })}
            </div>
          </div>

          {/* Player 2 ... */}
          <div className={classNames({
            'relative w-fit h-full': true,
            'flex flex-col justify-start items-start gap-6': true,
            "max-lg:w-[90vw] max-lg:items-end": true,
            'max-sm:w-fit max-sm:mr-[10rem]': true,
            "card:items-start card:w-[90vw]": true,
          })}>
            <h4 className={playerChance == 2 ? "currentChance" : "" + 'flex w-full justify-end card:justify-start'}>
              Player 2
            </h4>
            <div className='flex flex-wrap justify-start items-start w-fit h-fit gap-3'>
              {cards.map((el,i) => {
              return (
                <div 
                  key={i} 
                  data-id={i} 
                  data-player={2}
                  className={classNames({
                    'card-2 flex flex-grow-1': true,
                    'w-[8.75rem] h-[12rem] cursor-pointer': true,
                    'bg-white shadow-md rounded-md': true,
                    'bg-center bg-cover bg-no-repeat': true,
                    'transition all ease-in-out duration-300': true,
                    'hover:scale-110': true,
                    'mobile:w-[7rem] mobile:h-[10rem]': true,
                  })} 
                  style={{
                    backgroundImage: `url('/card.jpg')`
                  }}
                  onClick={cardHandler}
                />
              )
            })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
