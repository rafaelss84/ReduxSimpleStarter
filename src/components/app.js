import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return ( //Se exitem routes aninhadas na route deste componente,
      //os componentes destas routes vem para cá na propriedade
      //this.props.children, e precisam ser renderizados
      <div>
        {this.props.children}
      </div>
    );
  }
}
