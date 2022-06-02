import React from 'react';
import { IButton } from '../../interfaces/Interfaces';
import CustomButton from './style';

const Button = ({ type, label }: IButton) => (
  <CustomButton name={type}>
    {label}
  </CustomButton>
);

export default Button;
