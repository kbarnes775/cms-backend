import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import Header from "./Header";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="dashboard" id="uncontrolled-tab-example">
                    <Tab eventKey="dashboard" title="Dashboard">
                        <p>Welcome to Webspot 2.0 Dashboard. </p>
                        <p>A custom CMS made with React, MongoDB, Express JS, and Node.js.</p>
                        <p><strong>I am planning to put analytics here like the original version has.</strong></p>
                    </Tab>
                    <Tab eventKey="header" title="Header">
                        <p>HEADER TAB</p>
                        <p>This tab will allow users to change the navbar.</p>
                        <Header />
                    </Tab>
                    <Tab eventKey="pages" title="Pages">
                        <p>PAGES TAB</p>
                        <p>This tab will allow users to make new pages and edit existing pages</p>
                    </Tab>
                    <Tab eventKey="footer" title="Footer">
                        <p>FOOTER TAB</p>
                        <p>This tab will allow users to change the Footer</p>
                    </Tab>
                    <Tab eventKey="misc" title="Misc">
                        <p>MISC TAB</p>
                        <p>This tab will allow users to change setting that didnt belong in the other tabs</p>
                    </Tab>
                </Tabs>



            </div>
        );
    }
}