import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

export default class Firefox extends Component {
    constructor() {
        super();
        this.style = {};
        if (window.innerWidth >= 1280) {
            this.style.flex = 1;
        }
    }

    locationUrl() {
        const ua = this.props.userAgent;
        let url = '';
        if (ua.android) {
            url = 'https://play.google.com/store/apps/details?id=org.mozilla.firefox';
        } else if (ua.ios) {
            url = 'https://appsto.re/jp/-LZ_6.i';
        } else {
            url = 'https://www.mozilla.org/ja/firefox/new/';
        }
        return url;
    }

    render() {
        return (
            <div className="Firefox" style={this.style}>
                <MuiThemeProvider>
                    <Card>
                        <CardHeader title="Firefox" titleColor="#e91e63" />
                        <CardText>
                            <a href={this.locationUrl()}>
                                こちらからダウンロード・インストールできます
                            </a>
                        </CardText>
                    </Card>
                </MuiThemeProvider>
            </div>
        );
    }
}
