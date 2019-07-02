import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }

    componentDidMount() {

    }

    render() {
        return(
            <div>
                Hello From inside Header.js
            </div>
        );
    }
}
export default Header;

