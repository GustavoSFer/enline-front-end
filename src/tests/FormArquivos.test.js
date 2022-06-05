import React from 'react';
import { render, screen } from '@testing-library/react';
import FormArquivos from '../Page/FormArquivos';
import Index from '../Page/Index';

test('Verifica se existe um input de file na tela', () => {
  render(<FormArquivos />);
  const inputFile = screen.getByTestId("file");

  expect(inputFile).toBeInTheDocument();
});

test('Verifica se existe um botão "Enviar" na tela', () => {
  render(<FormArquivos />);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test('Verifica se esta escrito na tela "Upload de Arquivos"', () => {
  render(<Index />);
  const uploadFile = screen.getByText(/Upload de Arquivos/i);

  expect(uploadFile).toBeInTheDocument();
});

test('Verifica se é renderizado o logo "imagem"', () => {
  render(<Index />);
  const logo = screen.getByTestId("logo");

  expect(logo).toBeInTheDocument();
});