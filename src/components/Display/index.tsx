import React, { useContext } from 'react';
import { CalculatorContext } from '../../context/CalculatorContext';
import { CountWrapper, DisplayWrapper } from './style';

const Display = () => {
  const { displayValue } = useContext(CalculatorContext);

  return (
    <DisplayWrapper>
      <CountWrapper>{displayValue}</CountWrapper>
    </DisplayWrapper>
  );
};

export default Display;
