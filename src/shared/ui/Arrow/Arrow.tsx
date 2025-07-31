import { classNames } from "@/shared/lib";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import * as styles from "./Arrow.module.scss";

interface ArrowProps {
  className?: string
}

export const Arrow = ({ className }: ArrowProps) => {
  return(
    <div className={classNames(styles.Arrow, {}, [className])}>
      <FaArrowDown />
      <FaArrowUp />
    </div>
  )
}
