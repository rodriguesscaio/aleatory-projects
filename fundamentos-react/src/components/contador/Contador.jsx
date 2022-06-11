import React, { Component } from 'react';

export default class Contador extends Component {

  state = {
    valor: this.props.valor || 0,
    passo: this.props.passo || 1,
  };

  incrementar = () => {
    this.setState({ valor: this.state.valor + this.state.passo});
  };

  decrementar = () => {
    this.setState({ valor: this.state.valor - this.state.passo});
  };

  render() {

    return (
      <div>
          <h2>Contador</h2>
          <div>
            <label for="inputPasso">Passo:</label>
            <input id="inputPasso" type="number" 
              style={{ fontSize: '1.4rem', width: '50px' }}
              value={this.state.passo} 
              onChange={e => this.setState({ passo: +e.target.value })} />
          </div>
          
          <h4>Valor: {this.state.valor}</h4>

        <div>
          <button onClick={this.incrementar}>+</button>
          <button onClick={this.decrementar}>-</button>
        </div>
      </div>
    );
  }
}