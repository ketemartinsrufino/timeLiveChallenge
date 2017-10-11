import axios from 'axios';

class InstaAPI{

	//Pegando id do lugar a partir das coordenadas
	static getFacePlaceId(token,coord = [-3.731862, -38.526669]){

		let url = `https://graph.facebook.com/search?q=&type=place&center=${coord[0]},${coord[1]}
					&distance=5000&access_token=${token}&expires_in=5184000`;
		return axios.get(url);
	}

	static getInstaPlaceId(token, placeId){

		if(token && placeId){

		let url = `https//:api.instagram.com/v1/locations/search?facebook_places_id=${placeId}
				&access_token=${token}`;

		 return axios.get(url);
		}

	}

	// Medias recentes a partir de um local
	// https://api.instagram.com/v1/locations/514276/media/recent?access_token=ACCESS-TOKEN

}