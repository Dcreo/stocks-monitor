import { classNames } from "@/shared/lib";
import * as styles from "./StockPositionTable.module.scss";
// import "ag-grid-community/styles/ag-grid.css"
// import "ag-grid-community/styles/ag-theme-quartz.css";
import { IStockPositionTable, StockPosition, StockPositionCellMode } from "../../model/types/StockPosition";
import { AgGridReact } from 'ag-grid-react';
import { useState } from "react";
import { ColDef } from "ag-grid-community";
import { StockPositionCell } from "../StockPositionCell/StockPositionCell";

interface IStockPositionTableProps {
  className?: string;
  stockPositions: StockPosition[] | undefined;
}

export const StockPositionTable = (props: IStockPositionTableProps) => {
  const { 
    className, 
    stockPositions = []
  } = props;

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

  return(
    <div className={classNames(styles.StockPositionTable, {}, [className])}>
      <AgGridReact<IStockPositionTable> 
        domLayout='autoHeight'
        rowData={stockPositions} 
        columnDefs={extraColumns()}
        rowHeight={50}
      /> 
    </div>
  )
}
