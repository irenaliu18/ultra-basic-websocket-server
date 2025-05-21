const { Server: ioServer } = require("socket.io");
const io = new ioServer({
  cors: {
    origin: "http://localhost:5173",
  },
});

let currentDoc = "";

io.on("connection", (socket) => {
  // emit a doc change
  // update the current doc based on change
});

io.listen(8000);
