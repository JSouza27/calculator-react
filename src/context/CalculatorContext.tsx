/* eslint-disable @typescript-eslint/semi */
import React, { createContext, useMemo } from 'react';
import { ICalculatorContext, IChildren } from '../interfaces/Interfaces';

const InitialValue = {
  clearMemory: () => {},
  setOperation: () => {},
  addDigit: () => {},
}

export const CalculatorContext = createContext<ICalculatorContext>(InitialValue);

export const CalculatorProvider = ({ children }: IChildren) => {
  const clearMemory = () => {
    console.log('limpar');
  }

  const setOperation = (operation: string) => {
    console.log(operation);
  }

  const addDigit = (n: string | number) => {
    console.log(n);
  }

  const providerValue = useMemo(() => ({ clearMemory, setOperation, addDigit }), []);

  return (
    <CalculatorContext.Provider value={providerValue}>
      {children}
    </CalculatorContext.Provider>
  )
};
