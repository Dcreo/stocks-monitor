import { classNames } from "@/shared/lib";
import * as styles from "./TargetPrice.module.scss";
import { Stock } from "@/entities/Stock";
import { useState } from "react";
import { Button, Input, Select } from "@/shared/ui";
import { ETargetPriceDirection } from "../../model/types/TargetPrice";
import { TargetPriceDirectionSelect } from "../TargetPriceDirectionSelect/TargetPriceDirectionSelect";

interface TargetPriceProps {
  className?: string;
  stock: Stock;
}

export const TargetPrice = ({ className }: TargetPriceProps) => {
  const [newTargetPrice, setNewTargetPrice] = useState<boolean>(false);

  const addTargetPriceHandler = () => {
    setNewTargetPrice(prev => !prev);
  }

  const saveTargetPriceHandler = () => {

  }

  const onDirectionChange = (value: string) => {
    console.warn(value)
  }

  return(
    <div className={classNames(styles.TargetPrice, {}, [className])}>
      <h1>Targets</h1>
      {!newTargetPrice && (
        <Button onClick={addTargetPriceHandler}>
          Add 
        </Button>
      )}

      {!!newTargetPrice && (
        <div className={styles.fields}>
          <Input placeholder={"Target price"} />
          <TargetPriceDirectionSelect onChange={onDirectionChange} />
        </div>
      )}
        
      {!!newTargetPrice && (
        <div className={styles.actions}>
          <Button onClick={saveTargetPriceHandler}>
            Save
          </Button>
          <Button onClick={addTargetPriceHandler} className={styles.cancelButton}>
            Cancel 
          </Button>
        </div>
      )}
    </div>
  )
}
