import { classNames } from "@/shared/lib";
import * as styles from "./Autocomplete.module.scss";
import { useSearchQuery } from "../../model/services/autocompleteApi";
import { ChangeEvent, useEffect, useState } from "react";
import { Stock } from "@/entities/Stock";
import { useElementVisible } from "@/shared/hooks";
import { Input } from "@/shared/ui";

interface AutocompleteProps {
  className?: string;
  action: string;
  onSelect: (item: any) => void;
  value?: string;
  hasError?: boolean;
  errorMessage?: string;
}

export const Autocomplete = (props: AutocompleteProps) => {
  const { 
    className, 
    action,
    value,
    hasError,
    errorMessage,
    onSelect,
  } = props;

  const MINIMUM_SEARCH_LETTERS = 1

  const [item, setItem] = useState<any>({});
  const [query, setQuery] = useState<string>("");
  const { ref, isElementVisible, setIsElementVisible } = useElementVisible({ initialVisible: true });
  const { data: results, refetch } = useSearchQuery(
    { action, query }, 
  );

  const onChangeHandler = (value: string) => {
    setQuery(value);
    setIsElementVisible(true);
  }

  const onSelectHandler = (item: any) => {
    setItem(item);
    setQuery(item?.name)
    onSelect(item);
    setIsElementVisible(false);
  }

  const onFocusHandler = () => {
    onChangeHandler(query);
  }

  useEffect(() => {
    setIsElementVisible(false);
  }, [])

  return(
    <div className={classNames(styles.Autocomplete, {}, [className])} ref={ref}>
      <Input 
        onChange={onChangeHandler} 
        onFocus={onFocusHandler}
        defaultValue={value}
        hasError={hasError}
        errorMessage={errorMessage}
        value={query}
      />

      {!!isElementVisible && !!results?.length && (
        <div className={styles.results}>
          {results?.map((item) => {
            return(
              <div 
                onClick={() => onSelectHandler(item)}
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
