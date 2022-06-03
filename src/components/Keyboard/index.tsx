import React, { useCallback, useEffect, useState } from 'react';
import commandsList from '../../helpers/Command';
import { ICommand } from '../../interfaces/Interfaces';
import Button from '../Button';
import { KeyboardContainer, KeyboardWrapper } from './style';

const Keyboard = () => {
  const [buttonsRow1, setButtonsRow1] = useState<ICommand[] | []>([]);
  const [buttonsRow2, setButtonsRow2] = useState<ICommand[] | []>([]);
  const [buttonsRow3, setButtonsRow3] = useState<ICommand[] | []>([]);
  const [buttonsRow4, setButtonsRow4] = useState<ICommand[] | []>([]);
  const [buttonsRow5, setButtonsRow5] = useState<ICommand[] | []>([]);

  const getCommands = useCallback(() => {
    setButtonsRow1(commandsList.filter((command) => command.row === 1));
    setButtonsRow2(commandsList.filter((command) => command.row === 2));
    setButtonsRow3(commandsList.filter((command) => command.row === 3));
    setButtonsRow4(commandsList.filter((command) => command.row === 4));
    setButtonsRow5(commandsList.filter((command) => command.row === 5));
  }, []);

  useEffect(() => {
    getCommands();
  }, []);

  return (
    <KeyboardWrapper>
      <KeyboardContainer>
        {buttonsRow1.map(({ type, label, components }) => (
          <Button type={type} label={label || components} />
        ))}
      </KeyboardContainer>
      <KeyboardContainer>
        {buttonsRow2.map(({ type, label, components }) => (
          <Button type={type} label={label || components} />
        ))}
      </KeyboardContainer>
      <KeyboardContainer>
        {buttonsRow3.map(({ type, label, components }) => (
          <Button type={type} label={label || components} />
        ))}
      </KeyboardContainer>
      <KeyboardContainer>
        {buttonsRow4.map(({ type, label, components }) => (
          <Button type={type} label={label || components} />
        ))}
      </KeyboardContainer>
      <KeyboardContainer>
        {buttonsRow5.map(({ type, label, components }) => (
          <Button type={type} label={label || components} />
        ))}
      </KeyboardContainer>
    </KeyboardWrapper>
  );
};

export default Keyboard;
