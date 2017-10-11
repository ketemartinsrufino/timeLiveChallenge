import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Link, BrowserRouter} from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import mainReducer fom './reducers';

import './index.css';
import App from './App';
import Local from './Local';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<BrowserRouter>
      <main>
	    <Switch>
	      <Route exact path='/' component={App}/>
	      <Route path='/local' component={Local}/>
	      <Route path='/local/:user_id/:lat/:lng' component={Local}/>
	    </Switch>
	  </main>
  </BrowserRouter>, 
  document.getElementById('root'));

registerServiceWorker();


