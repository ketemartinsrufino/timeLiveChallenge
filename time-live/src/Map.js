import React from 'react';
import { connect } from 'react-redux';

//Função para retornar os seguidores
const folFunction = (state) =>{
	return {
		'followers' : state.followers
	}
};

let Map = ({ dispatch,followers }) =>{

	//Pra dar tempo do mapa carregar..
	setTimeout( () => {
	
		//Objeto global do mapa
	    let L = window.L;
	    
	    //Posição inicial do mapa
	    let map = L.map('map').setView([-3.731862,-38.526669], 13);

	    //Exemplo pego da página oficial do leaflet
	    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	      maxZoom: 18,
	      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
	        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	      id: 'mapbox.streets'
	    }).addTo(map);

	    let marker = false;
	    let friendsMarkers = [];

	    //Colocando os ícones de amigos no mapa
	    followers.forEach( (el,ind, arr) => {
	    	let pos = el.location;
	    	let legend = '<b>' + el.username + '</b>';
	    	let url  =  `${window.location.host}/local/${el.id}/${pos.latitude}/${pos.longitude}`;

	    	console.log(url);

	    	let myIcon = L.icon({
	    		iconUrl : el.profile_picture,
	    		iconSize: [50, 110],
	    		iconAnchor: [22, 94]
	    	});

	    	friendsMarkers.push( L.marker([pos.latitude,pos.longitude], { icon : myIcon }) );

	    	map.addLayer(friendsMarkers[ind]);

	    	//Nome do amigo no marcador
	    	friendsMarkers[ind].bindPopup(legend).openPopup();

	    });

	    map.on('click', function(event){

	        /* Limpando anteriores */
	        if(marker){
	          map.removeLayer(marker);
	        }

	        if(friendsMarkers.length > 0){
	        	let i = 0;
	        	for(i; i < friendsMarkers.length;i++){
	        		map.removeLayer(friendsMarkers[i]);	
	        	}
	        	
	        }

	        marker = L.marker(event.latlng);
	        map.addLayer(marker);

	        //coordenadas
	        let xy = [event.latlng.lat, event.latlng.lng];

	        //Despachando as informações da primeira página
	        dispatch({ 'type' : 'SET_COORD' , 'coord' : xy });
	        dispatch({'type' : 'COORD_SET'});
	        

	    });

	},200);

    var mapStyle = {
    	'minHeight' : '400px',
        'width': '70%',
        'position' : 'relative',
        'margin' : 'auto'
    }

    return(
    	<div id="map" style={mapStyle}></div>
    );
}

Map = connect(folFunction)(Map);

export default Map;