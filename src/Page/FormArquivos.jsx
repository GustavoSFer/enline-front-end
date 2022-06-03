import React, { useState } from 'react';
import MyContext from '../MyContext/MyContext';
import FileArquivo from '../Components/FileArquivo';
import ButtonUpload from '../Components/ButtonUpload';
import { uploadRequest } from '../Services/index';

function FormArquivos() {
  const [file, setFile] = useState('');

  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    await uploadRequest('/upload', formData)
  }

  const contexto = {
    file,
  }

  return (
    <MyContext.Provider value={ contexto }>
      <form method='post' encType='multipart/form-data' onSubmit={upload}>
        <FileArquivo name="file" onChange={ (e) => setFile(e.target.files[0])} />
        <ButtonUpload />
      </form>
    </MyContext.Provider>
  );
}

export default FormArquivos;
