import { classNames } from "@/shared/lib";
import * as styles from "./Message.module.scss";
import { IMessage } from "../model/types/Message";

interface MessageProps {
  className?: string;
  message: IMessage;
}

export const Message = (props: MessageProps) => {
  const {
    className,
    message
  } = props;

  return(
    <div className={classNames(styles.Message, {}, [className])}>
      <div className={styles.messageTitle}>{message.title}</div>
      <div className={styles.messageText}>{message.text}</div>
    </div>
  )
}
