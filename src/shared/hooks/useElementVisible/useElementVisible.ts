import React, { useEffect, useRef, useState, MouseEvent } from "react";

export interface IIsElementVisible {
  initialVisible?: boolean;
  onClose?: () => void;
}

export const useElementVisible = (props: IIsElementVisible) => {
  const {
    initialVisible,
    onClose,
  } = props;

  const [isElementVisible, setIsElementVisible] = useState<boolean>(initialVisible!);

  const ref = useRef<any>(null);

  //  TODO correct event type
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsElementVisible(false)
      if (onClose) onClose();
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    }
  }, [])

  return { ref, isElementVisible, setIsElementVisible }
}
