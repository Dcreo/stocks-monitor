import { isNumber } from "@/shared/lib";

export enum ValidatorRules {
  REQUIRED = "required",
  IS_NUMBER = "is_number"
}

export enum ValidatorErrors {
  EMPTY = "EMPTY",
  NOT_NUMBER = "NOT_NUMBER"
}

interface DynamicValueData {
  errors: ValidatorErrors[];
}

interface IEnum {
  [index: string]: string;
}

export class Validator {
  data : any;
  value: any;
  rules: ValidatorRules[];
  errors: ValidatorErrors[];
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
            this.setValidatorErrors(this.value, ValidatorErrors.EMPTY);
          }
        }

        case ValidatorRules.IS_NUMBER: {
          if (!isNumber(this.data[value])) {
            this.setValidatorErrors(this.value, ValidatorErrors.NOT_NUMBER);
          }
        }
      }
    })
  }

  setValidatorErrors(value: any, key: ValidatorErrors) {
    this[value].errors.push(key);
    this[value].messages.push(this.messages[key]);
  }
}
