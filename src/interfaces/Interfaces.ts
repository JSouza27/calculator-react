import { ReactNode } from 'react';

export interface ICommand {
  label: string | null;
  type: string;
  value: string | number | Function;
  row: number;
  components: any;
}

export interface IButton {
  type: string;
  label: any;
  value?: string | number;
  click: Function;
}

export interface IChildren {
  children: ReactNode;
}

export interface ICalculatorContext {
  clearMemory: Function;
  setOperation: Function;
  addDigit: Function;
  displayValue: string,
  operations: string | null,
  clearDisplay: boolean,
  values: number[],
  current: number,
}
