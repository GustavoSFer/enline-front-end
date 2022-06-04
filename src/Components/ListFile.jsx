import React from 'react';
import ButtonDel from './ButtonDel';
import excluir from '../icons/excluir.png';


function ListFile({ file, click }) {
  return (
    <div>
      <p>{ file.name }</p>
      <ButtonDel click={ click }>
        <img src={ excluir } alt="Excluir Arquivo" id={file._id} />
      </ButtonDel>
    </div>
  );
}

export default ListFile;
