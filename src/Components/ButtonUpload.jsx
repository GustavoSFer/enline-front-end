import React from 'react';

function ButtonUpload() {
  const upload = () => {
    console.log('chamando o upload')
  }
  return (
    <input type="submit" name="upload" onClick={upload} className="btn btn-outline-info m-3 mt-4 me-4" />
  );
}

export default ButtonUpload;
