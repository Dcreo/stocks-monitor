import { classNames } from "@/shared/lib";
import * as styles from "./StockPositionNameCell.module.scss";
import { useAppDispatch } from "@/shared/hooks";
import { 
  setModalData,
  EStockModalType
} from "@/entities/Stock";

interface StockPositionNameCellProps {
  className?: string;
  data: any;
}

export const StockPositionNameCell = (props: StockPositionNameCellProps) => {
    const { className, data: { stock: {name, id} } } = props;

  const dispatch = useAppDispatch();

  const  onNameClickHandler = () => {
    dispatch(setModalData({
      modal: {
        type: EStockModalType.INFO,
        isOpen: true
      }, id
    }))
  }

  return(
    <div className={classNames(styles.StockPositionNameCell, {}, [className])}>
      <div onClick={onNameClickHandler} className={styles.link}>
        { name }
      </div>
    </div>
  )
}
