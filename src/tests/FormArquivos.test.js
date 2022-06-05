import React from 'react';
import { render, screen } from '@testing-library/react';
import FormArquivos from '../Page/FormArquivos';

test('Verifica se existe um input de file na tela', () => {
  render(<FormArquivos />);
  const inputFile = screen.getByTestId("file");

  expect(inputFile).toBeInTheDocument();
});

test('Verifica se existe um botão enviar na tela', () => {
  render(<FormArquivos />);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});