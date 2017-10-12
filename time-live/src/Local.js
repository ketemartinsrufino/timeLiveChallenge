import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import './Local.css';
import Map from './Map'
import store from './main.js';

let localComp = ({ dispatch }) => {

    let sub = window.location.hash;
    let token = '';

    //Se retornado um token
    if(sub.indexOf('token') !=  -1){

      token = sub.substring( sub.indexOf('=') + 1);

      dispatch( {'type' : 'SET_TOKEN', 'token' : token } );

    }


  return(

    <div className="App">
      <header className="App-header">
      <h2 className="local-tit">Selecione sua localização no mapa para encontrar amigos</h2>
      </header>
      <Map />
    </div>
  )
}

let Local = connect()(localComp);

export default Local;
