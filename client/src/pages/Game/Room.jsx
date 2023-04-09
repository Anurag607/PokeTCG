import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Loader from "../../components/Loader";
import { useSelector, useDispatch } from 'react-redux'
import { dismountCard } from '../../../redux/reducers/selectedCardSlice.mjs'
import sortedpokeData from "../../../data/pokeData";
import Card from "../../components/Card";

export default function Room({ roomid, socket, currentPlayer, notify, toast }) {
  const [playerChance, setPlayerChance] = useState(1);
  const [message, setMessage] = useState("Waiting For Player - 2 to Join");
  const [ready, setReady] = useState(false);
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState([[0,0,0],[0,0,0]]);
  const [uC1,setuC1] = useState([]);
  const [uC2,setuC2] = useState([]);
  const dispatch = useDispatch();
  const { selectedCard } = useSelector(state => state.selectedCard)

  // Function for determining winner ...
  const winnerHandler = () => {
    let allTk = 1;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j]===0) allTk = 0;
      }
    }
    if (allTk) {
      let p1 = 0;
      let p2 = 0;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[0][i]===board[1][j]){
            const card1 = uC1[board[0][i]-1];
            p1 = p1 + (card1.hp+card1.statAttack+card1.statDefense+card1.statSpeed)/4;
            const card2 = uC2[board[0][i]+2];
            p2 = p2 + (card2.hp+card2.statAttack+card2.statDefense+card2.statSpeed)/4;
          }
        }
      }
      if (p1>p2){
        setWinner(1);
        setMessage("Player 1 Won the match");
      }
      else{
        setWinner(2);
        setMessage("Player 2 Won the match");
      }
      dispatch(dismountCard());
    }
  };

  // OnClick handler for Card Button ...
  const cardHandler = (event) => {
    let target = event.currentTarget;
    let player = target.dataset.player;
    
    if (winner===null && ready) {
      if (currentPlayer === player-'0') target.style.translate = "0 1.1rem";
      console.log(player,currentPlayer);
      if(player == 1 && currentPlayer==1) {
        let cards = document.querySelectorAll('.card-1');
        let id = target.dataset.id-1;

        let last = 0;
        for (let i = 0; i < board[1].length; i++) {
          const el = board[1][i];
          if (el>last) last = el;
        }
        last+=1;
        if (board[0][id]===0){
          const newBoard = board;
          newBoard[0][id] = last;
          setBoard(newBoard);
          setPlayerChance(2);
        }
        else{
          notify("Card Already Taken");
        }

      }
      else if(player == 2  && currentPlayer==2) {
        let cards = document.querySelectorAll('.card-2');
        let id = target.dataset.id-1;
        let last = 0;
        for (let i = 0; i < board[1].length; i++) {
          const el = board[1][i];
          if (el>last) last = el;
        }
        last+=1;
        if (board[1][id]===0){
          const newBoard = board;
          newBoard[1][id] = last;
          setBoard(newBoard);
          setPlayerChance(1);
        }
        else{
          notify("Card Already Taken");
        }
      }
      
    }
    
  }

  let cards1 =[];
  useEffect(()=>{
    cards1 = getRandomIndex(sortedpokeData);
  },[]);

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
        [0, 0, 0],
        [0, 0, 0]
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


  const empCards = new Array(3).fill(1);

  function getRandomIndex() {
    let taken = [];
    let cards = []
    while (taken.length!==3) {
      let ind = Math.floor(Math.random() * sortedpokeData.length);
      let fl = 1
      for (let i = 0; i < taken.length; i++) {
        if (taken[i]===ind) fl = 0;
      }
      if (fl){
        taken.push(ind);
        cards.push(sortedpokeData[ind]);
      }
    }
    setuC1(cards);
    let crd = uC1;
    for (let i = 0; i < cards.length; i++) {
      crd.push(cards[i]);
    }
    setuC2(crd);
    return cards
  }

  useEffect(() => {
    notify(`Player ${playerChance}'s Turn`);
  }, [playerChance])

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
            <div className='flex flex-wrap justify-start items-start w-fit h-fit gap-4'>
              {(currentPlayer===1 ? uC1 : empCards).map((el,i) => {
              return (
                <div key={i} 
                  data-id={i+1} 
                  data-player={1} onClick={cardHandler}>
                {(currentPlayer===1) ? <Card hp={el.hp} imgSrc={el.imgSrc} pokeName={el.pokeName} statSpeed={el.statSpeed} statAttack={el.statAttack} statDefense={el.statDefense} /> : <div 
                  key={i} 
                  data-id={i+1} 
                  data-player={1}
                  className={classNames({
                    'card-1': true,
                    'w-[8.75rem] h-[12rem] cursor-default': true,
                    'bg-white shadow-md rounded-md': true,
                    'bg-center bg-cover bg-no-repeat': true,
                    'transition all ease-in-out duration-300': true,
                    'hover:scale-110': false,
                    'mobile:w-[7rem] mobile:h-[10rem]': true,
                  })} 
                  style={{
                    backgroundImage: "url('/card.jpg')",
                  }}
                  onClick={cardHandler}
                />}
                </div>

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
            <h4 className={playerChance == 2 ? "currentChance" : "" + 'flex w-full justify-end card:justify-start max-md:mt-[10rem] card-2:mt-[32.5rem]'}>
              Player 2
            </h4>
            <div className='flex flex-wrap justify-start items-start w-fit h-fit gap-3 pb-[10rem]'>
            {(currentPlayer===2 ? uC1 : empCards).map((el,i) => {
              return (
                <div key={i} 
                  data-id={i+1} 
                  data-player={2} onClick={cardHandler}>
                {(currentPlayer===2) ? <Card hp={el.hp} imgSrc={el.imgSrc} pokeName={el.pokeName} statSpeed={el.statSpeed} statAttack={el.statAttack} statDefense={el.statDefense} /> : <div 
                  key={i} 
                  data-id={i+1} 
                  data-player={2}
                  className={classNames({
                    'card-1 flex ': true,
                    'w-[8.75rem] h-[12rem] cursor-default': true,
                    'bg-white shadow-md rounded-md': true,
                    'bg-center bg-cover bg-no-repeat': true,
                    'transition all ease-in-out duration-300': true,
                    'hover:scale-110': false,
                    'mobile:w-[7rem] mobile:h-[10rem]': true,
                    '':true,
                  })} 
                  style={{
                    backgroundImage: "url('/card.jpg')",
                  }}
                />}
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
