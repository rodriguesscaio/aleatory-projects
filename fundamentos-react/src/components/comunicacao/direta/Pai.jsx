import React from 'react';
import Filho from './Filho';

export default props => {

  return (
    <div>
      <Filho {...props}>Caio</Filho>
      <Filho sobrenome={props.sobrenome}>Odair</Filho>
      <Filho sobrenome="rodrigues">Geovana</Filho>
    </div>
  );
};