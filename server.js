
const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

let documents = {};

io.on("connection", (socket) => {

  socket.on("join-document", (docId) => {
    socket.join(docId);
  });

  socket.on("send-changes", ({docId, content}) => {
    documents[docId] = content;
    socket.to(docId).emit("receive-changes", content);
  });

  socket.on("chat-message", ({docId, message}) => {
    io.to(docId).emit("chat-message", message);
  });

});

app.get("/", (req,res)=>{
  res.send("SyncDoc backend running");
});

server.listen(5000, ()=>{
  console.log("Server running on port 5000");
});
