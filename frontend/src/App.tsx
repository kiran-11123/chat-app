import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState("")
  const [socket , setSocket] = useState();

  function sendMessage() {
    

    if(message.trim()!==""){
      //@ts-ignore
       socket.send(message);
    }

  }

  useEffect(()=>{

    const ws = new WebSocket("ws://localhost:8081");
     //@ts-ignore
    setSocket(ws);

    ws.onmessage = (ev)=>{
       alert(ev.data);
    }

  },[])

  return (

    <div>

      <input type="text" placeholder='send message' onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage} >Submit</button>

    </div>
   
  )
}

export default App
