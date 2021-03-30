import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home'
import StartPage from './views/Start';

const App = () => {
    return (
        <Router>
            
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/start' component={StartPage}></Route>
                </Switch>
                </Router>
  );
}

export default App;
