const InitialUser = {
	token : '' , 
	coord : [],
	locations : [],
	recentLocationsMedia: [],
	followers : []
}


function mainReducer(state = InitialUser, action){
	
	switch(action.type){

		case 'SET_TOKEN':

			return Object.assign({}, state, {
		    	token: action.token
		  	})

		case 'SET_COORD':

			return Object.assign({}, state, {
		    	coord: action.coord
		  	})

		case 'SET_LOCATIONS':

			return Object.assign({}, state, {
		    	locations: action.locations
		  	})

		case 'SET_RECENT_LOCATION_MEDIA':

			return Object.assign({}, state, {
		    	recentLocationsMedia: action.recentLocationsMedia
		  	})

		case 'SET_FOLLOWERS':

			return Object.assign({}, state, {
		    	followers: action.followers
		  	})



		default:
		return state;

	}
}


// function todoUserArrays(state = [], action){
// 	switch(action.type){
		
// 	}
// }

// const todoApp = combineReducers({ todoUser, todoUserArrays});

export default mainReducer;