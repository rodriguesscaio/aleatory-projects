import './App.css';
import React from 'react';

import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import ComFilhos from './components/basicos/ComFilhos';
import ComParametro from './components/basicos/ComParametro';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Contador from './components/contador/Contador';
import Input from './components/form/Input';

export default props => 
<div className="App">
  <h1>Fundamentos React</h1>
  <div className="cards">
    <Card titulo="# 10 - Contador" color="#AF25E7">
      <Contador valor={100} passo={25} />
    </Card> 

    <Card titulo="# 9 -Input como componente" color="#9C0F5F">
      <Input />
    </Card>

    <Card titulo="# 8 - Comunicação Indireta" color="#000">
      <Super />
    </Card>

    <Card titulo="# 7 - Comunicação Direta" color="#FA6058">
      <Pai sobrenome="Freitas" />
    </Card>

    <Card titulo="# 6 -Componente Condicional com IF versão 2" color="#FA6900">
      <CondicionalComIf numero={5} />
    </Card>

    <Card titulo="# 5 - Componente com Condicional versão 1" color="#E94C6F">
      <Condicional numero={7} />
    </Card>

    <Card titulo="# 4 - Componente com Repetição" color="#00BBBA">
      <Repeticao />
    </Card>

    <Card titulo="# 3 - Componente com Filhos" color="#D96459">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>BIa</li>
          <li>Marcelo</li>
          <li>Gustavo</li>
        </ul>
      </ComFilhos>
    </Card>

    <Card titulo="# 2 - Componente com Parametro" color="#FF85CB">
      <ComParametro titulo="Esse é o título" subtitulo="Subtitulo esse aqui" />
    </Card>

    <Card titulo="# 1 - Primeiro Componente" color="#92B06A">
      <Primeiro />
    </Card>
  </div>
</div>