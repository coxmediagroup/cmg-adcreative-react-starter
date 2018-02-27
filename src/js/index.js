import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route,
    hashHistory,
    Switch
} from 'react-router-dom';
import App from './components/app';


ReactDOM.render(
        <Router history={hashHistory}>
            <Switch>
                <Route exact path="/" component={App}/>
            </Switch>
        </Router>
    , document.querySelector('#root'));