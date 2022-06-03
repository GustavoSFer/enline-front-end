import React from 'react';

function ButtonUpload() {
  const upload = () => {
    console.log('chamando o upload')
  }
  return (
    <input type="submit" name="upload" onClick={upload} />
  );
}

export default ButtonUpload;
