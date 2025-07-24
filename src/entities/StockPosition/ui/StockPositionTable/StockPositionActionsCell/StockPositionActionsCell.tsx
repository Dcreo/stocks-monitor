import { useState } from "react";
import { MdDoneOutline } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { classNames } from "@/shared/lib";
import * as styles from "./StockPositionActionsCell.module.scss";
import { 
    StockPosition,
  StockPositionCellMode, 
  StockPositionFormType 
} from "../../../model/types/StockPosition";
import { CiEdit } from "react-icons/ci";
import { Modal } from "@/shared";
import { useAppDispatch } from "@/shared/hooks";
import { setModalData } from "../../../model/slice/stockPositionSlice";
import { useDeleteStockPositionMutation } from "@/entities/StockPosition";


interface StockPositionCellProps {
  className?: string;
  data?: StockPosition;
  mode?: StockPositionCellMode;
}

export const StockPositionActionsCell = (props: StockPositionCellProps) => {
  const { 
    className, 
    data,
    mode = StockPositionCellMode.READONLY
  } = props;

  const [deleteStockPosition, {isLoading}] = useDeleteStockPositionMutation();

  const dispatch = useAppDispatch();

  const onEditHandler = (): void => {
    console.warn(data)
    dispatch(setModalData({
      isModalOpen: true,
      stockPosition: data,
      formType: StockPositionFormType.EDIT
    }))
  }

  const onDeleteHandler = () => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    deleteStockPosition(data?.id!);
  }

  return(
    <div className={classNames(styles.StockPositionCell, {}, [className])}>
     { !!data?.id && mode === StockPositionCellMode.EDITABLE && (
       <div className={styles.actions}>
         <CiEdit 
           className={styles.edit} 
           onClick={onEditHandler} 
         />

         <RiDeleteBin5Fill className={styles.delete} onClick={onDeleteHandler} />
       </div>
     )} 
     { !data?.id && mode === StockPositionCellMode.EDITABLE && (
       <div className={styles.add} onClick={() => alert("Add")}>
         <IoMdAdd />
       </div>
     )} 
     { mode === StockPositionCellMode.READONLY && data?.id && <MdDoneOutline />}
    </div>
  )
}
