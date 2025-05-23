const { Server: ioServer } = require("socket.io");
const io = new ioServer({
  cors: {
    origin: "http://localhost:5173",
  },
});

let currentDoc = "";

io.on("connection", (socket) => {
  // emit a doc change
  socket.emit("docChange", currentDoc);
  
  socket.on("inputChange", (val) => {
    // update the current doc based on change
    currentDoc = val;
    socket.broadcast.emit("docChange", currentDoc);
  });
});

io.listen(8000);
