import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './main.js';
import './index.css';
import App from './App';
import Local from './Local';
import Mosaic from './Mosaic';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
	      <main>
		    <Switch>
		      <Route exact path='/' component={App}/>
		      <Route path='/local' component={Local}/>
		      <Route path='/local/:user_id/:lat/:lng' component={Mosaic}/>
		    </Switch>
		  </main>
	    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));

registerServiceWorker();


