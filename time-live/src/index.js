import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link, BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import Local from './Local';
import Mosaic from './Mosaic';
import registerServiceWorker from './registerServiceWorker';
import store from './main.js';

ReactDOM.render(
	<BrowserRouter>
      <main>
	    <Switch>
	      <Route exact path='/' component={App}/>
	      <Route path='/local' component={Local}/>
	      <Route path='/local/:user_id/:lat/:lng' component={Mosaic}/>
	    </Switch>
	  </main>
  </BrowserRouter>, 
  document.getElementById('root'));

registerServiceWorker();


