import React, { useEffect, useState } from 'react';
import MyContext from '../MyContext/MyContext';
import FileArquivo from '../Components/FileArquivo';
import ButtonUpload from '../Components/ButtonUpload';
import { uploadRequest, dataRequest, deleteFileRequest } from '../Services/index';
import ListFile from '../Components/ListFile';

function FormArquivos() {
  const [file, setFile] = useState('');
  const [bankData, setBankData] = useState([]);

  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    await uploadRequest('/upload', formData)
  };

  const requestDataInit = async () => {
    const data = await dataRequest('/');
    setBankData(data);
  };

  const hadleClickDelete = async ({ target }) => {
    await deleteFileRequest('/', target.id);
    requestDataInit();
  };

  useEffect(() => {
    requestDataInit();
  });

  const contexto = {
    file,
  };

  return (
    <MyContext.Provider value={ contexto }>
      <form method='post' encType='multipart/form-data' onSubmit={upload}>
        <div className="form-label d-flex">
          <FileArquivo name="file" onChange={ (e) => setFile(e.target.files[0])} />
          <ButtonUpload />

        </div>
      </form>
      <div>
        <div className="d-flex flex-column">
          {
            (bankData.length === 0) ? <h2>Sem arquivos</h2>
              : bankData.map((file) => <ListFile key={file._id} file={file} click={hadleClickDelete} />)
          }
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default FormArquivos;
