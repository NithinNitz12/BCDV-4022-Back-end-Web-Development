const express = require("express");
const http = require("http");
const path = require("path");

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "public")));

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const socketIo = require("socket.io");

const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  socket.on("chat message", (msg) => {
    console.log("Message received:", msg);
    io.emit("chat message", msg); // Broadcast the message to all connected clients
  });
});
