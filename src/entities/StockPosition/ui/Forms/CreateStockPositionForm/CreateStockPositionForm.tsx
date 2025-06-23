import { classNames } from "@/shared/lib";
import * as styles from "./CreateStockPositionForm.module.scss";
import { Autocomplete } from "@/features/autocomplete";

interface CreateStockPositionFormProps {
  className?: string
}

export const CreateStockPositionForm = ({ className }: CreateStockPositionFormProps) => {
  return(
    <div className={classNames(styles.CreateStockPositionForm, {}, [className])}>
      <Autocomplete action={"/stocks/search"} />
    </div>
  )
}
