import React from 'react';
import { AiOutlinePercentage } from 'react-icons/ai';
import { FiDelete } from 'react-icons/fi';
import { ICommand } from '../interfaces/Interfaces';

const commandsList: ICommand[] = [
  {
    label: '0',
    type: 'number',
    value: 0,
    row: 5,
    components: null,
  },
  {
    label: '1',
    type: 'number',
    value: 1,
    row: 4,
    components: null,
  },
  {
    label: '2',
    type: 'number',
    value: 2,
    row: 4,
    components: null,
  },
  {
    label: '3',
    type: 'number',
    value: 3,
    row: 4,
    components: null,
  },
  {
    label: '4',
    type: 'number',
    value: 4,
    row: 3,
    components: null,
  },
  {
    label: '5',
    type: 'number',
    value: 5,
    row: 3,
    components: null,
  },
  {
    label: '6',
    type: 'number',
    value: 6,
    row: 3,
    components: null,
  },
  {
    label: '7',
    type: 'number',
    value: 7,
    row: 2,
    components: null,
  },
  {
    label: '8',
    type: 'number',
    value: 8,
    row: 2,
    components: null,
  },
  {
    label: '9',
    type: 'number',
    value: 9,
    row: 2,
    components: null,
  },
  {
    label: 'AC',
    type: 'operator',
    value: '',
    row: 1,
    components: null,
  },
  {
    label: '( )',
    type: 'operator',
    value: '+',
    row: 1,
    components: null,
  },
  {
    label: null,
    type: 'operator',
    value: '%',
    row: 1,
    components: <AiOutlinePercentage size="2.5rem" />,
  },
  {
    label: null,
    type: 'operator',
    value: '',
    row: 1,
    components: <FiDelete size="2.5rem" />,
  },
  {
    label: 'X',
    type: 'operator',
    value: 'x',
    row: 2,
    components: null,
  },
  {
    label: '-',
    type: 'operator',
    value: '-',
    row: 3,
    components: null,
  },
  {
    label: '+',
    type: 'operator',
    value: '+',
    row: 4,
    components: null,
  },
  {
    label: '=',
    type: 'operator',
    value: '=',
    row: 5,
    components: null,
  },
  {
    label: '.',
    type: 'number',
    value: '.',
    row: 5,
    components: null,
  },
];

export default commandsList;
