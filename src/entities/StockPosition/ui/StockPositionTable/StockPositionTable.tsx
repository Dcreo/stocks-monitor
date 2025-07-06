import { classNames } from "@/shared/lib";
import * as styles from "./StockPositionTable.module.scss";
// import "ag-grid-community/styles/ag-grid.css"
// import "ag-grid-community/styles/ag-theme-quartz.css";
import { IStockPositionTable, StockPosition, StockPositionCellMode, StockPositionFormType } from "../../model/types/StockPosition";
import { AgGridReact } from 'ag-grid-react';
import { useState } from "react";
import { ColDef } from "ag-grid-community";
import { StockPositionCell } from "../StockPositionCell/StockPositionCell";
import { useSelector } from "react-redux";
import { getIsModalOpen } from "../../model/selectors/getIsModalOpen/getIsModalOpen";
import { Modal } from "@/shared/ui";
import { useAppDispatch } from "@/shared/hooks";
import { setModalData } from "../../model/slice/stockPositionSlice";
import { StockPositionModal } from "../StockPositionModal/StockPositionModal";
import { getFormType } from "../../model/selectors/getFormType/getFormType";

interface IStockPositionTableProps {
  className?: string;
  stockPositions: StockPosition[] | undefined;
}

export const StockPositionTable = (props: IStockPositionTableProps) => {
  const { 
    className, 
    stockPositions = []
  } = props;

  const isModalOpen = useSelector(getIsModalOpen);
  const formType = useSelector(getFormType);
  const dispatch = useAppDispatch();

  const [columns, setColumns] = useState<ColDef<IStockPositionTable>[]>([
    { field: "stock.name", flex: 2 },
    { 
      field: "stock.price",
      headerName: "Price", 
    },
    { field: "stocksNumber" },
    { field: "averagePrice" },
    { 
      field: "id",
      headerName: "actions",
      cellRenderer: (props: any) => {
        return <StockPositionCell 
                 id={props.value}
                 mode={StockPositionCellMode.EDITABLE} />
      }
    },
  ]);

  const extraColumns = () => {
    return columns.map((o) => ({ 
      ...o, 
      cellClass: styles.cell 
    }))
  }

  const onModalCloseHandler = () => {
    dispatch(setModalData({ isModalOpen: false }))
  }

  return(
    <div className={classNames(styles.StockPositionTable, {}, [className])}>
      <AgGridReact<IStockPositionTable> 
        domLayout='autoHeight'
        rowData={stockPositions} 
        columnDefs={extraColumns()}
        rowHeight={50}
      /> 

      <StockPositionModal 
        isOpen={isModalOpen} 
        formType={formType}
        onClose={onModalCloseHandler} />
    </div>
  )
}
