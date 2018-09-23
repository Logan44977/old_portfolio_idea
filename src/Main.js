import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App';
import Works from './Works';

const Main = () =>(
    <main>
        <Switch>
            <Route exact path = '/' component={App}/>
            <Route path = '/works' component={Works}/>
        </Switch>
    </main>
)

export default Main;