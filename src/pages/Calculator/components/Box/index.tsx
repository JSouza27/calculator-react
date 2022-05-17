import React from 'react';
import BoxButton from './style';

type Props = {
  n: string | null,
  type: string
};

const Box = ({ n, type }: Props) => (
  <BoxButton color={type} type="button">{n}</BoxButton>
);

export default Box;
