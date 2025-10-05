import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8081});

let userCount = 0;

let allSockets : WebSocket[] =[]

wss.on('connection' , (socket)=>{
    
    //@ts-ignore
    allSockets.push(socket);
     
     console.log("websocket server connected..")
     userCount=userCount+1;

    
     console.log("user connected #" + userCount);


     socket.on("message" , (message)=>{
          console.log("message received " + message.toString() );

          allSockets.map((e)=>{

            e.send(message.toString() + " sent from the server..")

          })
          
     })

     socket.on("disconnect" , ()=>{
        //@ts-ignore
        allSockets = allSockets.filter(x => x !=socket)
     })
} )