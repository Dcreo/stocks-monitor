import React, { useEffect, useRef, useState, MouseEvent } from "react";

export const useElementVisible = (initialVisible: boolean) => {
  const [isElementVisible, setIsElementVisible] = useState<boolean>(initialVisible);

  const ref = useRef<any>(null);

  //  TODO correct event type
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsElementVisible(false)
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
