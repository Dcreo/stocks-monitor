import { classNames } from "@/shared/lib";
import * as styles from "./TargetPrice.module.scss";
import { Stock } from "@/entities/Stock";
import { useState } from "react";
import { Button, Input } from "@/shared/ui";

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

  return(
    <div className={classNames(styles.TargetPrice, {}, [className])}>
      <h1>Targets</h1>
      {!newTargetPrice && (
        <Button onClick={addTargetPriceHandler}>
          Add 
        </Button>
      )}

      {!!newTargetPrice && (
        <div>
          <Input placeholder={"Целевая цена"} />
        </div>
      )}
        
      {!!newTargetPrice && (
        <>
          <Button onClick={saveTargetPriceHandler}>
            Save
          </Button>
          <Button onClick={addTargetPriceHandler}>
            Cancel 
          </Button>
        </>
      )}
    </div>
  )
}
