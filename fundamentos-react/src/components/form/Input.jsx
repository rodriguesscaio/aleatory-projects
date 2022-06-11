import React, { useState } from 'react';

export default props => {
  const [nome, setNome] = useState('Caio');

  return (
    <>
      <h1>{nome}</h1>
      <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
    </>
  );
};