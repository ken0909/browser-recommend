import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

export default class Chrome extends Component {
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
            url = 'https://play.google.com/store/apps/details?id=com.android.chrome';
        } else if (ua.ios) {
            url = 'https://appsto.re/jp/NVp8F.i';
        } else if (ua.Mobile || ua.Tablet) {
            url = 'https://www.google.co.jp/chrome/browser/mobile/';
        } else {
            url = 'https://www.google.co.jp/chrome/browser/desktop/';
        }
        return url;
    }

    render() {
        return (
            <div className="Chrome" style={this.style}>
                <MuiThemeProvider>
                    <Card>
                        <CardHeader title="Google Chrome" titleColor="#e91e63" />
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
