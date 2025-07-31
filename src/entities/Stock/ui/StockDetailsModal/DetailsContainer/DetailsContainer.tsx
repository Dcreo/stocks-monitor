import { useEffect, useState } from "react";
import { classNames } from "@/shared/lib";
import * as styles from "./DetailsContainer.module.scss";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { 
  getStockId, 
  Stock, 
  useGetStockQuery 
} from "@/entities/Stock";
import { Modal, TextLine } from "@/shared/ui";
import { ECurrencySymbol } from "@/entities/Currency";
import { TradingViewChart } from "@/widgets/TradingViewChart";
import { TargetPrice } from "@/entities/TargetPrice";
import { EOverflow } from "@/shared/ui/Modal/Modal";

interface DetailsContainerProps {
  className?: string
}

export const DetailsContainer = ({ className }: DetailsContainerProps) => {
  const [isTargetsModalOpen, setIsTargetsModalOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const [stock, setStock] = useState<Stock>();
  const [reloaded, setReloaded] = useState<boolean>(false);

  const id = useAppSelector(getStockId);
  
  const {data, isSuccess} = useGetStockQuery(id);

  useEffect(() => {
    if (data?.id) {
      setStock(data as Stock);
    }
  }, [data])

  return(
    <div className={classNames(styles.DetailsContainer, {}, [className])}>
      {!!stock?.id && (
        <>
          <div className={styles.header}>
            <h1>{ stock?.name }&nbsp;[ID: { id }]</h1>
          </div>
          <div className={styles.content}>
            <div className={styles.leftPart}>
              <TradingViewChart ticker={stock?.ticker} exchange={stock?.exchange} />
            </div>
            <div className={styles.rightPart}>
              <div className={styles.price}>
                <TextLine value={stock?.price} label="Price" symbol={ECurrencySymbol.USD}/>
              </div>
              <div className={styles.info}>
                <TextLine value={stock?.ticker?.toUpperCase()} label="Ticker" />
                <TextLine value={stock?.exchange} label="Exchange" />
              </div>

              <div className={styles.targets}>
                <h1 
                  onClick={() => setIsTargetsModalOpen(true)} 
                  className={styles.targetsTitle}>
                  Targets
                </h1>
                <Modal 
                  isOpen={isTargetsModalOpen} 
                  overflow={EOverflow.AUTO}
                  onClose={() => setIsTargetsModalOpen(false)}>
                  <TargetPrice stock={stock} />
                </Modal>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
