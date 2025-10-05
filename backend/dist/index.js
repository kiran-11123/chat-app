"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8081 });
wss.on('connection', (socket) => {
    console.log("websocket server connected..");
    socket.send("hi there");
});
