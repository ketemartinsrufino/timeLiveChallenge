import { call, put, select,all,take } from 'redux-saga/effects'
import InstaAPI from './InstaAPI';

function* getFirstPageInfo() {
	
	try{

		yield take('COORD_SET');
debugger;
		const token = yield select( state => state.token);
		const coords = yield select( state => state.coord);

debugger;
		const locations = yield call(InstaAPI.getLocations,token,coords);
debugger;
		yield put({ 'type' : 'SET_LOCATIONS', 'locations' : locations });

		const data = yield call(InstaAPI.getLocationsData,token,locations);
debugger;
		yield put({ 'type' : 'SET_RECENT_LOCATION_MEDIA', 'recentLocationsMedia' : data });

		const fol = yield call(InstaAPI.getFollowedBy, token);

		let followers = [];

		data.forEach( (e,i,a) => {
			
			e.forEach( (el,ind,arr) => {

				let i = 0, j = fol.length;

				for(i; i < j; i++){

					if( fol[i].id == el.user.id ){
						
						//Incluindo junto a informação do usuario, a localização
						followers.push( Object.assign({},fol[i], el.location ));
					}	
				}
				
			});
		});

		yield put({ 'type' : 'SET_FOLLOWERS', 'followers' : followers });

	}catch(e){
		console.log('error' + e.message);
	}
}

function* getSecondPageInfo(){
	try{

		const token = yield select( state => state.token);
		const coords = yield select( state => state.coord);

		const media = yield call(InstaAPI.getMedia, token, coords);

		const friends = yield select( state => state.followers);

		let friPosts = [];

		media.forEach( (el, ind, arr) => {

			let i = 0, j = friends.length;

			for(i; i < j; i++){

				if(el.user.id == friends[i].id){

					let media = el.type == 'image' ? el.images : el.videos;

					friPosts.push( { 'type' : el.type , 'media' : media });

				}
			}
		});

		yield put({ 'type' : 'SET_FOL_POSTS', 'folPosts' : friPosts });

	}catch(e){

	}
}


export default function* rootSaga() {
  yield all([
    getFirstPageInfo(),
    getSecondPageInfo()
  ]);
}
