import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import About from './components/About'
import Contact from './components/Contact'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {PrivateRoute} from './components/PrivateRoute'
import LoginPage from './components/Login/Page';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/contact-us" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/login" component={LoginPage}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));