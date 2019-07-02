import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomeNav extends Component {

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">MainPage</Link>
            </nav>
        );
    }
}
