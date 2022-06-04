import React from 'react';

function FileArquivo({ name, onChange }) {
  return (
    <input type="file" name={name} onChange={onChange} className="form-control form-control-sm m-4" />
  );
}

export default FileArquivo;
