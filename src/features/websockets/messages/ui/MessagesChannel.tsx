import { Message } from "@/entities/Message";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

interface MessagesChannelProps {
  className?: string;
}

const ws = new WebSocket("ws://localhost:3000/cable")

export const MessagesChannel = ({ className }: MessagesChannelProps) => {
  const [guid, setGuid] = useState("");
  
  ws.onopen = () => {
    console.warn("Conntected to websocket server");
    setGuid(Math.random().toString(36).substring(2, 15));

    ws.send(
      JSON.stringify({
        command: "subscribe",
        identifier: JSON.stringify({
          id: guid,
          channel: "MessagesChannel"
        })
      })
    )
  }

  ws.onmessage = (e) => {
    const data = JSON.parse(e.data);

    if (data.type === "ping") return;
    if (data.type === "welcome") return;
    if (data.type === "confirm_subscription") return;
    if (data.type === "disconnect") return;

    console.warn("DATA", data)
    toast.info(<Message message={data.message}/>);
  }

  return(<></>)
}
