import { classNames } from "@/shared/lib";
import * as styles from "./Autocomplete.module.scss";
import { useSearchQuery } from "../../model/services/autocompleteApi";
import { ChangeEvent, useEffect, useState } from "react";
import { Stock } from "@/entities/Stock";

interface AutocompleteProps {
  className?: string;
  action: string;
  onSelect: (item: any) => void;
}

export const Autocomplete = (props: AutocompleteProps) => {
  const { 
    className, 
    action,
    onSelect
  } = props;

  const MINIMUM_SEARCH_LETTERS = 1

  const [query, setQuery] = useState<string>("");
  const { data: results, refetch } = useSearchQuery(
    { action, query }, 
    { skip: query.length < MINIMUM_SEARCH_LETTERS}
  );

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  return(
    <div className={classNames(styles.Autocomplete, {}, [className])}>
      <input onChange={onChangeHandler} />

      {results?.length && (
        <div className={styles.results}>
          {results?.map((item) => {
            return(
              <div 
                onClick={() => onSelect(item)}
                className={styles.resultsItem}>
                { item.name }
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
