import React, { useCallback, useEffect, useState } from 'react';
import commandsList from '../../helpers/command';
import { ICommandType } from '../../models/Commands';
import Box from './componets/Box';
import { CalculatorWrapper, CommandsContainer, ViewContainer } from './style';

const Calculator = () => {
  const [buttonsRow1, setButtonsRow1] = useState<ICommandType[] | []>([]);
  const [buttonsRow2, setButtonsRow2] = useState<ICommandType[] | []>([]);
  const [buttonsRow3, setButtonsRow3] = useState<ICommandType[] | []>([]);
  const [buttonsRow4, setButtonsRow4] = useState<ICommandType[] | []>([]);
  const [buttonsRow5, setButtonsRow5] = useState<ICommandType[] | []>([]);

  const getCommands = useCallback(() => {
    const row1 = commandsList.filter((command) => (command.row === 1));
    const row2 = commandsList.filter((command) => (command.row === 2));
    const row3 = commandsList.filter((command) => (command.row === 3));
    const row4 = commandsList.filter((command) => (command.row === 4));
    const row5 = commandsList.filter((command) => (command.row === 5));

    setButtonsRow1(row1);
    setButtonsRow2(row2);
    setButtonsRow3(row3);
    setButtonsRow4(row4);
    setButtonsRow5(row5);
  }, []);

  useEffect(() => {
    getCommands();
  }, []);

  return (
    <CalculatorWrapper>
      <ViewContainer>view</ViewContainer>
      <CommandsContainer>
        <div>
          {
            buttonsRow1.map((el) => (
              <Box
                n={el.name !== null ? el.name : el.icon}
                type={el.type}
              />
            ))
          }
        </div>
        <div>
          {
            buttonsRow2.map((el) => (
              <Box
                n={el.name !== null ? el.name : el.icon}
                type={el.type}
              />
            ))
          }
        </div>
        <div>
          {
            buttonsRow3.map((el) => (
              <Box
                n={el.name !== null ? el.name : el.icon}
                type={el.type}
              />
            ))
          }
        </div>
        <div>
          {
            buttonsRow4.map((el) => (
              <Box
                n={el.name !== null ? el.name : el.icon}
                type={el.type}
              />
            ))
          }
        </div>
        <div>
          {
            buttonsRow5.map((el) => (
              <Box
                n={el.name !== null ? el.name : el.icon}
                type={el.type}
              />
            ))
          }
        </div>
      </CommandsContainer>
    </CalculatorWrapper>
  );
};

export default Calculator;
