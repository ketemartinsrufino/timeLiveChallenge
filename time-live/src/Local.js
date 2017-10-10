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

    //Objeto global
    let L = window.L;
    
    let map = L.map('map').setView([51.505, -0.09], 12);

    //Exemplo pego da página oficial do leaflet
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets'
    }).addTo(map);

    return (
      <div className="App">
        <header className="App-header">
    {token}
        </header>

      </div>
    );
  }
}

export default Local;
