import React, { Component } from 'react';
import Chrome from './Chrome';
import Firefox from './Firefox';

export default class Recommend extends Component {
    constructor() {
        super();
        this.style = {
            display: 'flex',
            margin: '5px 0px',
        };
        if (window.innerWidth <= 1140) {
            this.style.flexDirection = 'column';
        }
    }

    render() {
        return (
            <div className="Recommend" style={this.style}>
                <Chrome deviceInfo={this.props.deviceInfo}/>
                <Firefox deviceInfo={this.props.deviceInfo} />
            </div>
        );
    }
}
