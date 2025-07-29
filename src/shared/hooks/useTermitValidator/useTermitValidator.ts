import { SetStateAction, useEffect, useState } from "react";
import { 
  Validator, 
  ValidatorRules 
} from "@/shared/lib";

// TODO dynamic types for different objects
export interface ITermitValidator {
  messages: any;
  rules: Record<string, ValidatorRules[]>;
}

export const useTermitValidator = <T>(object: T, { messages, rules }: ITermitValidator): {
  validator: Validator;
} => {
  const [validator] = useState<Validator>(
    new Validator(messages)
  );
  
  const [_, setTouchValidator] = useState<boolean>(false);
  
  const validate = () => {
    Object.keys(rules).forEach((field) => {
      validator.call(object, field, rules[field])
    })

    setTouchValidator(prev => !prev)
  }

  useEffect(() => {
    validate(); 
  }, [object]);


  return { validator }
}
