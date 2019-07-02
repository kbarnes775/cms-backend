import React, { Component } from 'react';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <p>Welcome to Webspot 2.0 Dashboard. </p>
                <p>A custom CMS made with React, MongoDB, Express JS, and Node.js.</p>

                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Change P Tag</span>
                    </div>
                    <textarea className="form-control" aria-label="Change P Tag"></textarea>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}