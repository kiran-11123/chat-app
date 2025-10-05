"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8081 });
let userCount = 0;
let allSockets = [];
wss.on('connection', (socket) => {
    allSockets.push(socket);
    console.log("websocket server connected..");
    userCount = userCount + 1;
    console.log("user connected #" + userCount);
    socket.on("message", (message) => {
        console.log("message received " + message.toString());
        for (let i = 0; i < allSockets.length; i++) {
            const s = allSockets[i];
            if (s !== socket) {
                s.send(message.toString() + " Sent by Server " + i);
            }
        }
    });
});
