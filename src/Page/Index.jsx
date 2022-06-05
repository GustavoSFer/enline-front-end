import React from 'react';
import FormArquivos from './FormArquivos';
import enline from '../images/enline.png'

export default function Index() {
  return (
    <div className="container">
      <div data-testid="logo" className="p-3 mb-2 bg-info text-dark d-flex justify-content-between rounded-top">
        <h1>
          <img src={enline} alt="Enline" />
        </h1>
        <h5 className="mt-5">Upload de Arquivos</h5>
      </div>
      <FormArquivos />
    </div>
  );
}
