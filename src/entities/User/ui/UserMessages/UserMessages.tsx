import { classNames } from "@/shared/lib";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TbMailOpened } from "react-icons/tb";


import * as styles from "./UserMessages.module.scss";
import { useGetUserMessagesQuery } from "@/entities/Message";
import { useState } from "react";

interface UserMessagesProps {
  className?: string;
}

export const UserMessages = ({ className }: UserMessagesProps) => {
  const [requestMessages, setRequestMessages] = useState<boolean>(false);

  const { data: messages, isError, isLoading, refetch } = useGetUserMessagesQuery(undefined,{
    skip: !requestMessages
  });

  const clickIconHandler = () => {
    setRequestMessages(true);

    setTimeout(() => {
      setRequestMessages(false);
    }, 400);
  }

  return(
    <div className={classNames(styles.UserMessages, {}, [className])}>
      <MdOutlineMarkEmailUnread 
        onClick={clickIconHandler} 
        className={styles.unreadIcon} />

      <HiOutlineMail 
        className={styles.defaultIcon} />

      <TbMailOpened 
        className={styles.openedIcon} />

      {messages?.length && (
        <></>
      )}
    </div>
  )
}
