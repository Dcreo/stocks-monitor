import { useState } from "react";
import { MdDoneOutline } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { classNames } from "@/shared/lib";
import * as styles from "./StockPositionCell.module.scss";
import { 
  StockPositionCellMode, 
  StockPositionFormType 
} from "../../../model/types/StockPosition";
import { CiEdit } from "react-icons/ci";
import { Modal } from "@/shared";
import { useAppDispatch } from "@/shared/hooks";
import { setModalData } from "../../../model/slice/stockPositionSlice";


interface StockPositionCellProps {
  className?: string;
  id?: string | number;
  mode?: StockPositionCellMode;
}

export const StockPositionCell = (props: StockPositionCellProps) => {
  const { 
    className, 
    id,
    mode = StockPositionCellMode.READONLY
  } = props;

  const dispatch = useAppDispatch();

  const onEditHandler = (): void => {
    dispatch(setModalData({
      isModalOpen: true,
      stockPositionId: id,
      formType: StockPositionFormType.EDIT
    }))
  }

  return(
    <div className={classNames(styles.StockPositionCell, {}, [className])}>
     { !!id && mode === StockPositionCellMode.EDITABLE && (
       <div className={styles.actions}>
         <CiEdit 
           className={styles.edit} 
           onClick={onEditHandler} 
         />

         <RiDeleteBin5Fill className={styles.delete} onClick={() => alert("Delete")} />
       </div>
     )} 
     { !id && mode === StockPositionCellMode.EDITABLE && (
       <div className={styles.add} onClick={() => alert("Add")}>
         <IoMdAdd />
       </div>
     )} 
     { mode === StockPositionCellMode.READONLY && id && <MdDoneOutline />}
    </div>
  )
}
