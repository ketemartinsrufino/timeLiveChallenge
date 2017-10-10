import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let key = '963c0d0b59c9414481f8ba0f7b5db6c9';
    let redirect = 'http://localhost:3000/local';
    let imgSrc = 'http://hitsfm100.com.br/images/instagram.png';
    let authSrc = `https://api.instagram.com/oauth/authorize/?client_id=${key}&redirect_uri=${redirect}&response_type=token`;
    return (
      <div className="App">
        <header className="App-header">
          <img src={imgSrc} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome!</h1>
        </header>
        <p className="App-intro">
          <a id="init-btn" href={authSrc}>Iniciar</a>
          Clique iniciar para começar a utilizar!
        </p>
      </div>
    );
  }
}

export default App;
