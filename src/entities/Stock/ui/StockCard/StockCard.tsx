import { classNames } from "@/shared/lib";
import * as styles from "./StockCard.module.scss";
import { Stock } from "../../model/types/Stock";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";

interface StockCardProps {
  className?: string;
  stock: Stock
}

export const StockCard = ({ className, stock }: StockCardProps) => {
  return(
    <Card className={classNames(styles.StockCard, {}, [className])} variant="outlined">
      <CardContent sx={{ pt: "24px", }}>
        <div className={styles.name}>{ stock.name }</div>
        <div className={styles.ticker}>({stock.ticker})</div>
      </CardContent>
    </Card>
  )
}
