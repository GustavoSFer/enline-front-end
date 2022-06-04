import React from 'react';
import ButtonDel from './ButtonDel';
import excluir from '../icons/excluir.png';


function ListFile({ file, click }) {
  return (
    <div className="border-bottom border-info border-opacity-25 rounded-pill d-flex justify-content-around">
      <label className="m-3">
        Arquivo: 
      </label>
      <span className="m-3">{ file.name }</span>
      
      <div>
        <ButtonDel click={ click }>
          <img src={ excluir } alt="Excluir Arquivo" id={file._id} />
        </ButtonDel>
      </div>
    </div>
  );
}

export default ListFile;
