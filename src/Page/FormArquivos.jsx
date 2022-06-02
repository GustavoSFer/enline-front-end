import React from 'react';
import FileArquivo from '../Components/FileArquivo';
import ButtonUpload from '../Components/ButtonUpload';

function FormArquivos() {
  return (
    <form method='post' encType='multipart/form-data'>
      <FileArquivo />
      <ButtonUpload />
    </form>
  );
}

export default FormArquivos;
