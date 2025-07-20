import { classNames } from "@/shared/lib";
import * as styles from "./Message.module.scss";
import { IMessage } from "../model/types/Message";
import { useNavigate } from "react-router-dom";

interface MessageProps {
  className?: string;
  message: IMessage;
  onClick?: () => void;
}

export const Message = (props: MessageProps) => {
  const {
    className,
    message,
    onClick,
  } = props;

  const navigate = useNavigate();

  const onMessageClickHandler = () => {
    if (onClick) onClick();
    navigate("/users/messages/" + message.id)
  }

  return(
    <div 
      className={classNames(styles.Message, {}, [className])} 
      onClick={onMessageClickHandler}>
      <div className={styles.messageTitle}>{message.title}</div>
      <div className={styles.messageText}>{message.text}</div>
    </div>
  )
}
