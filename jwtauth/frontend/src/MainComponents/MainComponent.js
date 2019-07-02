import React, { Component } from 'react';

import HomeNav from './HomeNav';
import Home from './Home';

export default class MainComponent extends Component {
    render() {
        return(
            <div>
                <HomeNav />
                <Home />
            </div>

        );
    }
}