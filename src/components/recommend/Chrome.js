import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import { blue500, fullWhite } from 'material-ui/styles/colors';

export default class Chrome extends Component {
    constructor() {
        super();
        this.style = {
            flex: 1,
        };
        if (window.innerWidth >= 1140) {
            this.style.marginRight = '2px';
        } else {
            this.style.marginBottom = '5px';
        }
    }

    locationUrl() {
        const ua = this.props.deviceInfo;
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
                            Google Chromeは、その名の通り、Googleが開発しているブラウザです。
                            現在最も多く使われていて、強力な機能を豊富に備えており、高速に動作するブラウザと言って良いでしょう。
                            とりあえずChromeを使っておけば間違いないと言えるほど、安心と信頼をおいてお使いいただけます。
                            世界を牽引するGoogleが開発しているだけあって、最新の機能もいち早く取り入れており、アップデート頻度も高いです。
                        </CardText>
                        <CardText>
                            しかしGoogle Chromeは、メモリを最大限使って高速に動作しようとするので、
                            あまり性能の良くない機器で使用したり、たくさんアプリを起動している状態で使用したりすると、
                            あまり快適に動作してくれないかもしれません。
                        </CardText>
                        <RaisedButton
                            label="ダウンロード・インストールはこちら"
                            fullWidth={true}
                            href={this.locationUrl()}
                            icon={<FileFileDownload />}
                            backgroundColor={blue500}
                            labelColor={fullWhite}
                        />
                    </Card>
                </MuiThemeProvider>
            </div>
        );
    }
}
