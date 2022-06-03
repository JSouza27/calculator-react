import React from 'react';
import { AiOutlinePercentage } from 'react-icons/ai';
import { FiDelete } from 'react-icons/fi';
import { GoPrimitiveDot } from 'react-icons/go';
import { RiParenthesesFill } from 'react-icons/ri';
import Button from '../Button';
import { KeyboardContainer, KeyboardWrapper } from './style';

const Keyboard = () => (
  <KeyboardWrapper>
    <KeyboardContainer>
      <Button type="operator" label="AC" />
      <Button type="operator" label={<RiParenthesesFill size="2.81rem" />} />
      <Button type="operator" label={<AiOutlinePercentage size="2.5rem" />} />
      <Button type="operator" label={<FiDelete size="2.5rem" />} />
    </KeyboardContainer>
    <KeyboardContainer>
      <Button type="number" label="7" />
      <Button type="number" label="8" />
      <Button type="number" label="8" />
      <Button type="operator" label="x" />
    </KeyboardContainer>
    <KeyboardContainer>
      <Button type="number" label="4" />
      <Button type="number" label="5" />
      <Button type="number" label="6" />
      <Button type="operator" label="-" />
    </KeyboardContainer>
    <KeyboardContainer>
      <Button type="number" label="1" />
      <Button type="number" label="2" />
      <Button type="number" label="3" />
      <Button type="operator" label="+" />
    </KeyboardContainer>
    <KeyboardContainer>
      <Button type="number" label="0" />
      <Button type="number" label={<GoPrimitiveDot size="1rem" />} />
      <Button type="operator" label="=" />
    </KeyboardContainer>
  </KeyboardWrapper>
);

export default Keyboard;
