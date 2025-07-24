import { isNumber } from "@/shared/lib";

export enum ValidatorRules {
  REQUIRED = "required",
  IS_NUMBER = "is_number"
}

export type TValidatorMessages = Record<keyof ValidatorRules, string>

interface DynamicValueData {
  errors: ValidatorRules[];
}

interface IEnum {
  [index: string]: string;
}

export class Validator {
  data : any;
  value: any;
  rules: ValidatorRules[];
  errors: ValidatorRules[];
  // TODO correct type definition for dynamic fields
  [index: string]: any;
  
  constructor(messages: IEnum) {
    this.rules = [];
    this.errors = [];
    this.messages = messages;
  }

  call(data: any, value: any, rules: ValidatorRules[]) {
    this.value = value;
    this.data = data;
    this.rules = rules;
    this[value] = {
      errors: [],
      messages: []
    };

    rules.forEach((rule: ValidatorRules) => {
      switch(rule) {
        case ValidatorRules.REQUIRED: {
          if (!this.data[value]) {
            this.setValidatorErrors(this.value, ValidatorRules.REQUIRED);
          }
        }

        case ValidatorRules.IS_NUMBER: {
          if (!isNumber(this.data[value])) {
            this.setValidatorErrors(this.value, ValidatorRules.IS_NUMBER);
          }
        }
      }
    })
  }

  setValidatorErrors(value: any, key: ValidatorRules) {
    this[value].errors.push(key);
    this[value].messages.push(this.messages[value][key]);
  }

  hasErrors() {
    console.warn("VALIDATE OBJECT:", this);
    let hasErrors: boolean = false;

    Object.keys(this).map((key) => {
      hasErrors = !!this[key]?.errors?.length;
    })

    return hasErrors;
  }
}
