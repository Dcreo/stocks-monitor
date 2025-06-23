import { classNames } from "@/shared/lib";
import * as styles from "./Autocomplete.module.scss";
import { useSearchQuery } from "../../model/services/autocompleteApi";

interface AutocompleteProps {
  className?: string;
  action: string;
}

export const Autocomplete = (props: AutocompleteProps) => {
  const {
    className,
    action
  } = props;

  const { data, refetch } = useSearchQuery();

  const onChangeHandler = () => {
    refetch();
  }

  return(
    <div className={classNames(styles.Autocomplete, {}, [className])}>
      <input onChange={onChangeHandler} />
    </div>
  )
}
