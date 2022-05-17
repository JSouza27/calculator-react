import React from 'react';
import { mount } from '@cypress/react';
import App from '../App';

it('checks if the number buttons are visible', () => {
  mount(<App />);
  cy.get('button').contains('0');
  cy.get('button').contains('1');
  cy.get('button').contains('2');
  cy.get('button').contains('3');
  cy.get('button').contains('4');
  cy.get('button').contains('5');
  cy.get('button').contains('6');
  cy.get('button').contains('7');
  cy.get('button').contains('8');
  cy.get('button').contains('9');
});
