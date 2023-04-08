import React, { useEffect, useState } from "react";


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
      notify("Waiting for Player 2 to join");
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

  const resethandler = () => {
    if (ready === false) {
      notify("Waiting for Player 2 to join");
      return;
    }
    socket.emit("reset", roomid);
  };
  useEffect(() => {
    socket.emit("sync-board", board, roomid, playerChance);
    winnerHandler();
    return () => {
      socket.off("sync-board");
    };
  }, [playerChance]);

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

  useEffect(() => {
    if (winner !== null && playerChance === currentPlayer) {
    }
  }, [winner, playerChance]);

  useEffect(() => {
    notify(message);
    return () => {
      toast.dismiss();
    };
  }, [message]);


  console.log(currentPlayer, playerChance, "currentPlayer", "playerChance");

  return (
    <div className='room'>
      <button className='reset' onClick={resethandler}>
        Reset the board
      </button>
      <div className='room-header'>
        <h1>Tic Tac Toe</h1>
        <h3>
          Room Id:
          <code
            className='roomid'
            onClick={() => {
              navigator.clipboard.writeText(roomid);
              notify("Room Id Copied to Clipboard");
            }}
          >
            {roomid}
          </code>
        </h3>
      </div>
      <div className='room-body'>
        <p className='instructions'>{message}</p>
        {message === "Let's play" && <p>Player {playerChance}'s Turn</p>}
        <div className='main-room'>
          <div className='player1'>
            <h4 className={playerChance == 1 ? "currentChance" : ""}>
              Player 1
            </h4>
          </div>

          <div className='sub'>
            <div className='board'>
              {board.map((row, i) => {
                return (
                  <div key={i} className='row'>
                    {row.map((col, j) => {
                      return (
                        <div
                          key={i + j}
                          className='cell'
                          onClick={() => {
                            playHandler(col, i, j);
                          }}
                        >
                          {col}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className='player2'>
            <h4 className={playerChance == 2 ? "currentChance" : ""}>
              Player 2
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
