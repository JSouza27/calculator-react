import React from 'react';
import { IButton } from '../../interfaces/Interfaces';
import CustomButton from './style';

const Button = ({
  type, label, click, value,
}: IButton) => (
  <CustomButton
    name={type}
    theme={{ label }}
    onClick={() => click(value || label)}
  >
    <span>
      {label}
    </span>
  </CustomButton>
);

export default Button;
