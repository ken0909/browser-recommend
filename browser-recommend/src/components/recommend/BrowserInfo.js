import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import DeviceInfo from '../device/DeviceInfo';

const BrowserInfo = ({ userAgent }) => (
      <MuiThemeProvider>
            <Card>
                <CardHeader title="どのブラウザをお使いですか？" titleColor="#e91e63" />
                <CardText>
                    <div>皆さんはどのブラウザをお使いでしょうか？</div>
                    <div>・Google Chrome</div>
                    <div>・Firefox</div>
                    <div>・Safari</div>
                    <div>・Microsoft Edge</div>
                    <div>・Internet Explorer</div>
                    <div>などなど、ブラウザにも色んなものがあります。</div>
                </CardText>
                <CardActions>
                    <DeviceInfo userAgent={userAgent} />
                </CardActions>
                <CardText>
                    <div>
                        ブラウザによって、機能や性能が異なります。
                        Webサイトによっては、あるブラウザでは閲覧できなかったり、逆にあるブラウザでしか閲覧できないといったこともあります。
                    </div>
                    <div>
                        また、同じブラウザでもバージョンがあり、新しいバージョンのものでないと機能しないものもあります。
                    </div>
                    <div>
                        なので、できるだけブラウザを製作している企業が機能や性能を積極的に強化しているブラウザを使用することと、
                        ブラウザを常に最新の状態に保つことをおすすめします。
                    </div>
                </CardText>
                <CardText>
                    このような状況を踏まえて、どのブラウザを使うのが良いのか、おすすめを提案しようと思います。
                </CardText>
            </Card>
      </MuiThemeProvider>
    );

export default BrowserInfo;
