import { 
    capitalize,
  classNames, 
  Validator, 
  ValidatorRules as VRules,
} from "@/shared/lib";
import * as styles from "./TargetPrice.module.scss";
import { Stock } from "@/entities/Stock";
import { useEffect, useState } from "react";
import { Arrow, Button, ERenders, Input, Select, TextLine } from "@/shared/ui";
import { 
  ETargetPriceDirection, 
  ITargetPrice, 
  ITargetPriceValidationMessages, 
} from "../../model/types/TargetPrice";
import { TargetPriceDirectionSelect } from "../TargetPriceDirectionSelect/TargetPriceDirectionSelect";
import { useTermitValidator } from "@/shared/hooks";
import { TargetPriceValidatorOptions as VOptions} from "../../model/validator/options";
import { useCreateTargetPriceMutation, useGetTargetPricesQuery } from "../../model/services/targetPriceApi";
import { useThemeProps } from "@mui/material/styles";
import { ECurrencySymbol } from "@/entities/Currency";
import { EColorizedFields } from "@/shared/ui";
import { EOverflow } from "@/shared/ui/Modal/Modal";

interface TargetPriceProps {
  className?: string;
  stock: Stock;
}

export const TargetPrice = (props: TargetPriceProps) => {
  const { className, stock } = props

  const [formOpen, setFormOpen] = useState<boolean>(false);
  const [targetPrice, setTargetPrice] = useState<ITargetPrice>({ 
    stock_id: stock?.id,
    direction: ETargetPriceDirection.ABOVE
  } as ITargetPrice);

  const [createTargetPrice, { isSuccess: isTargetPriceCreateSuccess }] = useCreateTargetPriceMutation();
  const {data: targetPrices = {}, isLoading: isTargetPricesLoading} = useGetTargetPricesQuery(stock?.id);
  
  // TODO types for validator
  const { validator } = useTermitValidator<ITargetPrice>(targetPrice, VOptions);
  
  const addTargetPriceHandler = () => {
    setFormOpen(prev => !prev);
  }

  const saveTargetPriceHandler = () => {
    createTargetPrice(targetPrice); 
  }

  const onDirectionChange = (value: string) => {
    setTargetPrice({...targetPrice, direction: value as ETargetPriceDirection})
  }

  const onPriceChange = (value: string) => {
    setTargetPrice({...targetPrice, ...{ price: Number(value) }})
  }

  const colorizedFields = (targetPriceItem: ITargetPrice) => {
    console.warn("targetPRice", targetPriceItem, !!targetPriceItem?.activatedAt);
    const colorFields: EColorizedFields[] = []

    if (!!targetPriceItem?.activatedAt) {
      colorFields.push(EColorizedFields.VALUE)
    }

    console.warn("colors", colorFields)
    return colorFields
  }

  useEffect(() => {
    setFormOpen(false);
  }, [isTargetPriceCreateSuccess])
  
  return(
    <div className={classNames(styles.TargetPrice, {}, [className])}>
      <h1>Price targets</h1>
      {!formOpen && (
        <Button onClick={addTargetPriceHandler}>
          Add 
        </Button>
      )}

      {!!formOpen && (
        <div className={styles.fields}>
          <Input 
            placeholder={"Target price"} 
            hasError={validator?.price?.errors?.length} 
            onChange={onPriceChange}
            errorMessage={validator?.price?.messages[0]} />
          <TargetPriceDirectionSelect onChange={onDirectionChange} />
        </div>
      )}
        
      {!!formOpen && (
        <div className={styles.actions}>
          <Button 
            onClick={saveTargetPriceHandler} 
            disabled={validator.hasErrors()}>
            Save
          </Button>
          <Button onClick={addTargetPriceHandler} className={styles.cancelButton}>
            Cancel 
          </Button>
        </div>
      )}

      {!!Object.keys(targetPrices).length && (
        <div className={styles.targetPrices}>
          {Object.keys(targetPrices).map((directionGroupName: string, index: number) => {
            return(
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>
                      { capitalize(directionGroupName) }
                    </th>
                    <th>
                      Actions 
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(targetPrices).length && (
                    <>
                      {(targetPrices[directionGroupName as keyof typeof targetPrices] as ITargetPrice[])
                        .map((targetPriceItem: ITargetPrice, index: number) => {
                          return(
                            <tr>
                              <td>
                                <TextLine 
                                  value={targetPriceItem.price}
                                  renders={[
                                    ERenders.SYMBOL, 
                                    ERenders.VALUE,
                                  ]}
                                  colorizedFields={colorizedFields(targetPriceItem)}
                                  symbol={ECurrencySymbol.USD} />
                              </td>
                              <td>
                                <div>
                                  Activate
                                  Delete
                                </div>
                              </td>
                            </tr>
                          )
                      })}
                    </>
                  )}
                </tbody>                
              </table>
            )
          })}
        </div>
      )}
    </div>
  )
}
