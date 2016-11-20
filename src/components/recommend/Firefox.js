import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import { blue500, fullWhite } from 'material-ui/styles/colors';


export default class Firefox extends Component {
    constructor() {
        super();
        this.style = {
            flex: 1,
        };
        if (window.innerWidth >= 1140) {
            this.style.marginLeft = '2px';
        } else {
            this.style.marginBottom = '5px';
        }
    }

    locationUrl() {
        const ua = this.props.deviceInfo;
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
                <Card>
                    <CardHeader title="Firefox" titleColor="#e91e63" />
                    <CardText>
                        Firefoxは、Mozillaが開発しているブラウザです。
                        Google Chromeと比べれば、あまり有名ではないかもしれませんが、
                        Firefoxも同じくらい強力な機能を備えており、高速で安定して動作するので、安心してお使いいただけるブラウザです。
                        こちらも最新の機能の搭載にも積極的で、アップデートも頻度も高く、セキュリティ的にも安全と言えるでしょう。
                    </CardText>
                    <CardText>
                        Firefoxの優れている点としては、拡張機能が豊富にあることです。
                        拡張機能を使うことで、Firefoxを自由にカスタマイズできます。
                        また、FirefoxはGoogle Chromeと比べて軽量で、メモリの消費が少ないため、スペックの低い機器でも十分に快適に動作するでしょう。
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
            </div>
        );
    }
}
