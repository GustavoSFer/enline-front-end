import React from 'react';

function ButtonDel({ click, children }) {
  return (
    <button type='button' onClick={ click } className="btn btn-outline-info m-2" >
      { children }
    </button>
  );
};

export default ButtonDel;
