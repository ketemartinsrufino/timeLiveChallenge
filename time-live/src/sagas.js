import { call, put } from 'redux-saga/effects'
import InstaAPI from './InstaAPI';

function* getFirstPageInfo(token, coords) {
	
	try{

		const locations = yeld call(InstaAPI.getLocations,token,coords);

		yeld put({ 'type' : 'SET_LOCATIONS', 'locations' : locations });

		const data = yeld call(InstaAPI.getLocationsData,token,locations);

		yeld put({ 'type' : 'SET_RECENT_LOCATION_MEDIA', 'recentLocationsMedia' : data });

		const fol = yeld call(InstaAPI.getFollowedBy, token);

		let followers = [];

		data.forEach( (e,i,a) => {
			
			e.forEach( (el,ind,arr) => {

				let i = 0, j = fol.length;

				for(i; i < j; i++){

					if( fol[i].id == el.user.id ){
						
						//Incluindo junto a informação do usuario a localização
						followers.push( Object..assign({},fol[i], ele.location ));
					}	
				}
				
			});
		});

		yeld put({ 'type' : 'SET_FOLLOWERS', 'followers' : followers });

	}catch(e){
		console.log('error' + e.message);
	}
}

function* getSecondPageInfo(token, coords){
	try{


	}catch(e){

	}
}


export default function* rootSaga() {
  yield all([
    getFirstPageInfo(),
    getSecondPageInfo()
  ]);
}
