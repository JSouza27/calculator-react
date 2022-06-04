import React, { useContext } from 'react';
import { TbDivide } from 'react-icons/tb';
import { FiDelete } from 'react-icons/fi';
import { GoPrimitiveDot } from 'react-icons/go';
import { CgMathPercent } from 'react-icons/cg';
import { CalculatorContext } from '../../context/CalculatorContext';
import Button from '../Button';
import { KeyboardContainer, KeyboardWrapper } from './style';

const Keyboard = () => {
  const { addDigit, clearMemory, setOperation } = useContext(CalculatorContext);

  return (
    <KeyboardWrapper>
      <KeyboardContainer>
        <Button
          type="operator"
          label="AC"
          click={clearMemory}
        />
        <Button
          type="operator"
          label={<CgMathPercent size="2.81rem" />}
          click={setOperation}
          value="%"
        />
        <Button
          type="operator"
          label={<TbDivide size="2.5rem" />}
          click={setOperation}
          value="/"
        />
        <Button
          type="operator"
          label={<FiDelete size="2.5rem" />}
          click={clearMemory}
        />
      </KeyboardContainer>

      <KeyboardContainer>
        <Button type="number" label="7" click={addDigit} />
        <Button type="number" label="8" click={addDigit} />
        <Button type="number" label="9" click={addDigit} />
        <Button type="operator" label="x" click={setOperation} value="x" />
      </KeyboardContainer>

      <KeyboardContainer>
        <Button type="number" label="4" click={addDigit} />
        <Button type="number" label="5" click={addDigit} />
        <Button type="number" label="6" click={addDigit} />
        <Button type="operator" label="-" click={setOperation} value="-" />
      </KeyboardContainer>

      <KeyboardContainer>
        <Button type="number" label="1" click={addDigit} />
        <Button type="number" label="2" click={addDigit} />
        <Button type="number" label="3" click={addDigit} />
        <Button type="operator" label="+" click={setOperation} value="+" />
      </KeyboardContainer>

      <KeyboardContainer>
        <Button type="number" label="0" click={addDigit} />
        <Button
          type="number"
          label={<GoPrimitiveDot size="1rem" />}
          click={addDigit}
          value="."
        />
        <Button type="operator" label="=" click={setOperation} value="=" />
      </KeyboardContainer>
    </KeyboardWrapper>
  );
};

export default Keyboard;
