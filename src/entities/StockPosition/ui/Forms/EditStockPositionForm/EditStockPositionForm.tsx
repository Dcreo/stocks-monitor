import { classNames } from "@/shared/lib";
import * as styles from "./EditStockPositionForm.module.scss";

interface EditStockPositionFormProps {
  className?: string;
  onSuccess?: () => void;
}

export const EditStockPositionForm = ({ className }: EditStockPositionFormProps) => {
  return(
    <div className={classNames(styles.EditStockPositionForm, {}, [className])}>
      Edit Form
    </div>
  )
}
