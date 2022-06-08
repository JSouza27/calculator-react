import React from 'react';
import { RiSunFill } from 'react-icons/ri';
import { WiMoonFull } from 'react-icons/wi';
import { IToggle } from '../../interfaces/Interfaces';
import { BallContainer, CloudContainer, ToggleWrapper } from './style';

const Toggle = ({ click, toggle }: IToggle) => (
  <ToggleWrapper onClick={() => click()} className={toggle}>
    <BallContainer>
      {toggle === 'light' ? <RiSunFill /> : <WiMoonFull />}
    </BallContainer>
    <CloudContainer>
      <div className="sm" />
      <div className="sm" />
      <div className="md" />
      <div className="lg" />
    </CloudContainer>
  </ToggleWrapper>
);

export default Toggle;
