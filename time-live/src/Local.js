import React, { Component } from 'react';
import './App.css';

class Local extends Component {

  render() {

    let L = window.L;
    let map = L.map('map').setView([51.505, -0.09], 13);

    return (
      <div className="App">
        <header className="App-header">
    
        </header>

          <div id="map"></div>
      </div>
    );
  }
}

export default Local;
