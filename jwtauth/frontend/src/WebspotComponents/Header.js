import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbars: {},
            isSticky: false
        }
    }

    componentDidMount() {

    }

    addNavbar(thisNav){
        let newNav = thisNav;
        console.log(newNav);
        return newNav;
    }

    render() {
        return(
            <div>
                <p>Choose a Navbar File</p>
                <input id="upload" ref="upload" type="file"
                           onChange={(nav)=> {
                               this.addNavbar(nav)
                           }}
                           onClick={(nav)=> {
                               nav.target.value = null
                           }}
                />
            </div>
        );
    }
}
export default Header;

