import React, {
  createContext, useMemo, useState,
} from 'react';
import { ICalculatorContext, IChildren } from '../interfaces/Interfaces';

const InitialValue = {
  clearMemory: () => {},
  setOperation: () => {},
  addDigit: () => {},
  displayValue: '0',
  operations: null,
  clearDisplay: false,
  values: [0, 0],
  current: 0,
};

export const CalculatorContext = createContext<ICalculatorContext>(InitialValue);

export const CalculatorProvider = ({ children }: IChildren) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [internalValue, setInternalValue] = useState<string[]>(['0', '0']);
  const [operations, setOperations] = useState<string | null>(null);
  const [clearDisplay, setClearDisplay] = useState<boolean>(false);
  const [values, setValues] = useState<number[]>([0, 0]);
  const [current, setCurrent] = useState<number>(0);

  const clearMemory = () => {
    setDisplayValue('0');
    setInternalValue(['0', '0']);
    setOperations(null);
    setClearDisplay(false);
    setValues([0, 0]);
    setCurrent(0);
  };

  const setOperation = (operation: string) => {
    if (current === 0) {
      setOperations(operation);
      setCurrent(1);
      setDisplayValue(displayValue + operation);
      // setInternalValue('0');
      setClearDisplay(false);
    }
  };

  const addDigit = (n: string | number) => {
    const i = current;

    if (n === '.' && internalValue[i].includes('.')) {
      return;
    }

    const arrValues = [...values];
    const arrInternalValues = [...internalValue];
    const isDisplayClear = (displayValue === '0' && n !== '.') || clearDisplay;
    const isInternalClear = (arrInternalValues[i] === '0' && n !== '.') || clearDisplay;
    const currDisplayValue = isDisplayClear ? '' : displayValue;
    const currInternalValue = isInternalClear ? '' : internalValue[i];

    arrInternalValues[i] = currInternalValue + n;

    setDisplayValue(currDisplayValue + n);
    setInternalValue(arrInternalValues);
    setClearDisplay(false);

    if (n !== '.') {
      const newValue = parseFloat(currInternalValue + n);

      arrValues[i] = newValue;
      setValues(arrValues);
    }
  };

  const providerValue = useMemo(() => ({
    clearMemory,
    setOperation,
    addDigit,
    displayValue,
    clearDisplay,
    operations,
    values,
    current,
  }), [displayValue, values, current, clearDisplay, operations]);

  return (
    <CalculatorContext.Provider value={providerValue}>
      {children}
    </CalculatorContext.Provider>
  );
};
