import React, { Component } from 'react';
import Chrome from './Chrome';
import Firefox from './Firefox';

export default class Recommend extends Component {
    constructor() {
        super();
        this.style = {};
        if (window.innerWidth >= 1280) {
            this.style = {
                display: 'flexbox',
                display: '-webkit-flex',
                flexDirection: 'row'
            };
        }
    }

    render() {
        return (
            <div className="Recommend" style={this.style}>
                <Chrome userAgent={this.props.userAgent}/>
                <Firefox userAgent={this.props.userAgent} />
            </div>
        );
    }
}
