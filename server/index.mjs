import express from "express"
import cors from "cors"
import http from "http"
import { Server } from 'socket.io'

const app = express();
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "OPTIONS", "POST", "PUT"],
  },
  handlePreflightRequest: (req, res) => {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS",
    });
    res.end();
  }
});


io.on("connection", (server) => {
  console.log("a user connected", io.engine.clientsCount);
  server.on("join-room", (roomId) => {
    if (
      io.sockets.adapter.rooms.get(roomId) &&
      io.sockets.adapter.rooms.get(roomId).size >= 2
    ) {
      server.emit("room-full");
    } else if (
      io.sockets.adapter.rooms.get(roomId) &&
      io.sockets.adapter.rooms.get(roomId).size === 1
    ) {
      server.emit("assign-player-2");
      server.join(roomId);
      io.to(roomId).emit("player-2-connected");
    } else {
      server.join(roomId);
    }
  });

  server.on("sync-board", (board, roomId, playerChance) => {
    console.log("syncing board", board, roomId, playerChance);
    server.broadcast.to(roomId).emit("get-board", board, playerChance);
  });
  server.on("reset", (roomId) => {
    io.in(roomId).emit("reset-board");
  });
  server.on("disconnect", () => {
    server.leave();
    console.log("user disconnected");
  });
});
io.on("disconnect", (server) => {
  console.log("a user disconnected", io.engine.clientsCount);
});
server.listen(5001, () => {
  console.log("server has started");
});
