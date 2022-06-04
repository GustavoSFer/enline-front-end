import React, { useEffect, useState } from 'react';
import MyContext from '../MyContext/MyContext';
import FileArquivo from '../Components/FileArquivo';
import ButtonUpload from '../Components/ButtonUpload';
import { uploadRequest, dataRequest } from '../Services/index';

function FormArquivos() {
  const [file, setFile] = useState('');
  const [bankData, setBankData] = useState([]);

  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    await uploadRequest('/upload', formData)
  }

  const requestDataInit = async () => {
    const data = await dataRequest('/');
    setBankData(data);
  }

  useEffect(() => {
    requestDataInit();
  })

  const contexto = {
    file,
  }

  return (
    <MyContext.Provider value={ contexto }>
      <form method='post' encType='multipart/form-data' onSubmit={upload}>
        <FileArquivo name="file" onChange={ (e) => setFile(e.target.files[0])} />
        <ButtonUpload />
      </form>
      <div>
        <div>
          {
            (bankData.length === 0) ? <h2>Sem arquivos</h2>
              : bankData.map((arquivo) => <div key={arquivo._id}> <p>{ arquivo.name }</p> </div>)
          }
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default FormArquivos;
