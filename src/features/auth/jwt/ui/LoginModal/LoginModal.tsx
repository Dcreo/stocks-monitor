import { useState } from "react";
import { classNames } from "@/shared/lib";
import { Modal } from "@/shared/ui";
import { LoginForm } from "../../";
import * as styles from "./LoginModal.module.scss";

interface LoginModalProps {
  className?: string
}

export const LoginModal = ({ className }: LoginModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const clickHandler = () => {
    setIsOpen(true);
  } 

  const onCloseHandler = () => {
    setIsOpen(false);
  }

  return(
    <>
      <span onClick={clickHandler}>Login</span>
      <Modal 
        className={classNames(styles.LoginModal, {}, [className])} 
        isOpen={isOpen}
        onClose={onCloseHandler}>
        <LoginForm />
      </Modal>
    </>
  )
}
