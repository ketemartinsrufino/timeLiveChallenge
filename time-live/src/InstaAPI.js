import axios from 'axios';

class InstaAPI{
     
    static getLocations(token,coord = [-3.731862, -38.526669]){

    	let url = `https://api.instagram.com/v1/locations/search?lat=${coord[0]}&lng=${coord[1]}&access_token=${token}`;

    	return axios.get(url);

    }

    static getLocationsData(token,locations = []){

    	if(locations.length  > 0 && token){

    		var proms = [];

    		locations.forEach( (el,ind,arr) => {

    			let req = `https://api.instagram.com/v1/locations/${el.id}/media/recent?access_token=${token}`;

    			proms.push(axios.get(req).then( res => { return res.data; } ));
    		});

    		/* Retonando os resultados de todas
    		   As requisições */
    		return Promise.all(proms);

    	}else{
    		return [];
    	}
    }

    static getFollowedBy(token){

    	return axios.get(`https://api.instagram.com/v1/users/self/followed-by?access_token=${token}`)
    				.then( res => { return res.data } );
    }

    static getMedia(token, coord = [-3.731862, -38.526669]){
    	return axios.get(`https://api.instagram.com/v1/media/search?lat=${coord[0]}&lng=${coord[1]}&access_token=${token}`)
    				.then( res => { return res.data }  );

    }

}

export default InstaAPI;


