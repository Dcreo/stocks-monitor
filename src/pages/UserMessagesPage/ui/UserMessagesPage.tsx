import { classNames } from "@/shared/lib";
import * as styles from "./UserMessagesPage.module.scss";
import { IMessage, Message, useGetUserMessagesQuery } from "@/entities/Message";

interface UserMessagesPageProps {
  className?: string
}

export const UserMessagesPage = ({ className }: UserMessagesPageProps) => {
  const { data: messages } = useGetUserMessagesQuery({});

  return(
    <div className={classNames(styles.UserMessagesPage, {}, [className])}>
      <h1>Messages</h1>

      <div className={styles.container}>
        {messages?.length && (
          messages.map((message: IMessage) => <Message message={message} />)
        )}
      </div>
    </div>
  )
}
