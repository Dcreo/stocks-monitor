import { MdDoneOutline } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { classNames } from "@/shared/lib";
import * as styles from "./StockPositionCell.module.scss";
import { StockPositionCellMode } from "../../model/types/StockPosition";

interface StockPositionCellProps {
  className?: string;
  value?: string | number;
  mode?: StockPositionCellMode;
}

export const StockPositionCell = (props: StockPositionCellProps) => {
  const { 
    className, 
    value,
    mode = StockPositionCellMode.READONLY
  } = props;

  return(
    <div className={classNames(styles.StockPositionCell, {}, [className])}>
     { !!value && mode === StockPositionCellMode.EDITABLE && (
       <div className={styles.delete} onClick={() => alert("Удалить")}>
         <RiDeleteBin5Fill />
       </div>
     )} 
     { !value && mode === StockPositionCellMode.EDITABLE && (
       <div className={styles.add} onClick={() => alert("Добавить")}>
         <IoMdAdd />
       </div>
     )} 
     { mode === StockPositionCellMode.READONLY && value && <MdDoneOutline />}
    </div>
  )
}
