import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route,Link } from 'react-router-dom'
import './index.css';
import App from './App';
import Local from './Local';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<HashRouter>
      <main>
	    <Switch>
	      <Route exact path='/' component={App}/>
	      <Route path='/local' component={Local}/>
	      <Route path='/local:user_id/:lat/:lng' component={Local}/>
	    </Switch>
	  </main>
  </HashRouter>, 
  document.getElementById('root'));

registerServiceWorker();


