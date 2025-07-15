import { classNames } from "@/shared/lib";
import * as styles from "./StockPositionTable.module.scss";
// import "ag-grid-community/styles/ag-grid.css"
// import "ag-grid-community/styles/ag-theme-quartz.css";
import { 
  EStockPositionTableFields as Fields, 
  IStockPositionTable, 
  StockPosition, 
  StockPositionCellMode, 
  StockPositionFormType 
} from "../../model/types/StockPosition";
import { AgGridReact } from 'ag-grid-react';
import { useState } from "react";
import { ColDef, ValueFormatterParams } from "ag-grid-community";
import { StockPositionCell } from "../StockPositionTable/StockPositionCell/StockPositionCell";
import { useSelector } from "react-redux";
import { getIsModalOpen } from "../../model/selectors/getIsModalOpen/getIsModalOpen";
import { Modal } from "@/shared/ui";
import { useAppDispatch } from "@/shared/hooks";
import { setModalData } from "../../model/slice/stockPositionSlice";
import { StockPositionModal } from "../StockPositionModal/StockPositionModal";
import { getFormType } from "../../model/selectors/getFormType/getFormType";
import { ECurrencySymbol } from "@/entities/Currency";
import { StockPositionNameCell } from "./StockPositionNameCell/StockPositionNameCell";
import { StockDetailsModal } from "@/entities/Stock/ui/StockDetailsModal/StockDetailsModal";

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
  const [currency, setCurrency] = useState<ECurrencySymbol>(ECurrencySymbol.USD)

  const [columns, setColumns] = useState<ColDef<IStockPositionTable>[]>([
    { 
      field: Fields.STOCK_NAME, 
      flex: 2,
      width: 300,
      cellRenderer: StockPositionNameCell 
    },
    { 
      field: Fields.STOCK_PRICE,
      width: 100,
      headerName: "Price", 
    },
    { 
      field: Fields.STOCKS_NUMBER,
      width: 150,
    },
    { 
      field: Fields.AVERAGE_PRICE, 
      width: 130,
    },
    { 
      field: Fields.CURRENT_COST,
      width: 120,
    },
    { 
      field: Fields.BASE_COST,
      width: 120,
    },
    { 
      field: Fields.PROFIT,
      width: 120,
    },
    {
      field: Fields.PERCENTS,
      headerName: "%",
      width: 85,
      valueFormatter: params => params.value + " %"
    },
    { 
      field: Fields.ID,
      width: 100,
      headerName: "actions",
      cellRenderer: (props: any) => {
        return <StockPositionCell 
                 data={props?.data}
                 mode={StockPositionCellMode.EDITABLE} />
      }
    },
  ]);

  const extraColumns = () => {
    return columns.map((o) => ({ 
      ...o, 
      ...([
        Fields.STOCK_PRICE,
        Fields.AVERAGE_PRICE,
        Fields.CURRENT_COST,
        Fields.BASE_COST,
        Fields.PROFIT,
      ].includes(o.field as Fields) && {
        valueFormatter: (params: ValueFormatterParams) => params.value + " " + currency
      }),
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

      <StockDetailsModal />
      <StockPositionModal 
        isOpen={isModalOpen} 
        formType={formType}
        onClose={onModalCloseHandler} />
    </div>
  )
}
