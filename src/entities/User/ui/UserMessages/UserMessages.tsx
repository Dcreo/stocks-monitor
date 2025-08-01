import { classNames } from "@/shared/lib";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TbMailOpened } from "react-icons/tb";


import * as styles from "./UserMessages.module.scss";
import { IMessage, Message, useGetUserMessagesQuery } from "@/entities/Message";
import { useState } from "react";
import { useElementVisible } from "@/shared/hooks";
import { RoutePath } from "@/shared/config";
import { NavLink } from "react-router-dom";

interface UserMessagesProps {
  className?: string;
}

export const UserMessages = ({ className }: UserMessagesProps) => {
  const { ref, isElementVisible, setIsElementVisible } = useElementVisible({
    initialVisible: true,
    onClose: () => setIsOpen(false),
  });

  const [requestMessages, setRequestMessages] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data: messages, isError, isLoading, refetch } = useGetUserMessagesQuery({
    limit: 8,
  },{
    skip: !requestMessages
  });

  const clickIconHandler = () => {
    setRequestMessages(true);
    setIsOpen(true);
    setIsElementVisible(true);

    setTimeout(() => {
      setRequestMessages(false);
    }, 400);
  }

  const closeMessages = () => {
    setIsOpen(false);
  }

  return(
    <div className={classNames(styles.UserMessages, {}, [className])}>
      {!isOpen && (
        <MdOutlineMarkEmailUnread 
          onClick={clickIconHandler} 
          className={styles.unreadIcon} />
      )}

      {false && (
        <HiOutlineMail 
          className={styles.defaultIcon} />
      )}

      {!!isOpen && (
        <TbMailOpened 
          onClick={closeMessages}
          className={styles.openedIcon} />
      )}

      {!!isOpen && !!isElementVisible && (
        <div className={styles.container} ref={ref}>
          {messages?.map((message: IMessage) => { 
            return(<Message message={message} onClick={closeMessages} />)
          })}
          <div className={styles.footer}>
            <NavLink to={RoutePath.USER_MESSAGES} onClick={closeMessages}>View All</NavLink> 
          </div>
        </div>
      )}
    </div>
  )
}
