import { classNames } from "@/shared/lib";
import * as styles from "./MessagesChannel.module.scss";
import { ReactNode, useState } from "react";

interface MessagesChannelProps {
  className?: string;
  children: ReactNode;
}

const ws = new WebSocket("ws://localhost:3000/cable")

export const MessagesChannel = ({ className, children }: MessagesChannelProps) => {
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

    console.warn("DATA", data)
  }

  return(
    <div className={classNames(styles.MessagesChannel, {}, [className])}>
      { children }
    </div>
  )
}
