import React from 'react';

function FileArquivo({ name, onChange }) {
  return (
    <input type="file" name={name} onChange={onChange} />
  );
}

export default FileArquivo;
