import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    let imgSrc = 'http://hitsfm100.com.br/images/instagram.png';

    return (
      <div className="App">
        <header className="App-header">
          <img src={imgSrc} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome!</h1>
        </header>
        <p className="App-intro">
          <a id="init-btn" href="http://www.gooogle.com">Iniciar</a>
          Clique iniciar para começar a utilizar!
        </p>
      </div>
    );
  }
}

export default App;
