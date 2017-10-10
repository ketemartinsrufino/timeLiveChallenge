import React, { Component } from 'react';
import './App.css';

class Local extends Component {

  render() {

    let sub = window.location.hash;
    let token = '';

    //Se retornado um token
    if(sub.indexOf('token') !=  -1){

      token = sub.substring( sub.indexOf('=') + 1);
    }

    let L = window.L;
    // let map = L.map('map').setView([51.505, -0.09], 13);

    return (
      <div className="App">
        <header className="App-header">
    {token}
        </header>

          <div id="map"></div>
      </div>
    );
  }
}

export default Local;
