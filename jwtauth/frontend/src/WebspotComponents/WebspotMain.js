import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Register from "./Register";
import Login from "./Login";


export default class WebspotMain extends Component {
    render() {
        return (
            <div>
                <Navbar/>

                <Switch>
                    <Route exact path="/webspot" component={ Login }/>
                    <Route path="/webspot/register" component={ Register }/>
                    <Route path="/webspot/dashboard" component={ Dashboard }/>
                </Switch>
                {/*<Route path="/webspot" component={ Dashboard }/>*/}
                {/*<Route path="/webspot/register" component={ Register }/>*/}
                {/*<Route path="/webspot/login" component={ Login }/>*/}

            </div>
        );
    }
}
