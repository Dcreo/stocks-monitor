import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { classNames } from "@/shared/lib";
import * as styles from "./StocksList.module.scss";
import { Stock } from "../../model/types/Stock";
import { ColDef } from "ag-grid-community";
import { MdDoneOutline } from "react-icons/md";
import { StockPositionCell, StockPositionCellMode } from "@/entities/StockPosition";


interface StocksListProps {
  className?: string;
  stocks: Stock[] | undefined;
}

export const StocksList = ({ className, stocks }: StocksListProps) => {
  const [columns, setColumns] = useState<ColDef<Stock>[]>([
    { field: "name", flex: 2 },
    { field: "price" },
    { 
      field: "position.id",
      headerName: "Position",
      cellRenderer: (props: any) => { 
        return <StockPositionCell value={props.value} />
      }
    }
  ]);

  return(
    <div className={classNames(styles.StocksList, {}, [className])}>
      <AgGridReact 
        domLayout='autoHeight'
        rowData={stocks} 
        columnDefs={columns}
        rowHeight={50}
      /> 
    </div>
  )
}
