const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
app.use(cors());
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://poketcg.onrender.com",
    methods: ["GET", "POST"]
  },
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
