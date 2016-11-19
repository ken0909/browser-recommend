import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import DeviceInfo from '../device/DeviceInfo';

const style = {
    list: {
        item: {
            padding: '8px'
        }
    }
};

const BrowserInfo = ({ browserInfo }) => (
      <MuiThemeProvider>
            <Card>
                <CardHeader title="どのブラウザをお使いですか？" titleColor="#e91e63" />
                <CardText>
                    皆さんはどのブラウザをお使いでしょうか？
                    <List>
                        <ListItem
                            primaryText="・Google Chrome"
                            disableKeyboardFocus={true}
                            disabled={true}
                            style={style.list.item}
                        />
                        <ListItem
                            primaryText="・Firefox"
                            disableKeyboardFocus={true}
                            disabled={true}
                            style={style.list.item}
                        />
                        <ListItem
                            primaryText="・Safari"
                            disableKeyboardFocus={true}
                            disabled={true}
                            style={style.list.item}
                        />
                        <ListItem
                            primaryText="・Microsoft Edge"
                            disableKeyboardFocus={true}
                            disabled={true}
                            style={style.list.item}
                        />
                        <ListItem
                            primaryText="・Internet Explorer"
                            disableKeyboardFocus={true}
                            disabled={true}
                            style={style.list.item}
                        />
                        <ListItem
                            primaryText="・Android標準ブラウザ"
                            disableKeyboardFocus={true}
                            disabled={true}
                            style={style.list.item}
                        />
                    </List>
                    などなど、ブラウザにも色んなものがあります。
                </CardText>
                <CardText>
                    ひとまず、今お使いのブラウザを確認してみましょう。下のボタンを押してみてください。
                </CardText>
                <CardActions>
                    <DeviceInfo browserInfo={browserInfo} />
                </CardActions>
                <CardText>
                    このサイトでは、みなさんのブラウザのデータを集めています。
                    みなさんのお使いの機器すべてにおいてこのサイトにアクセスしてください。
                    例えばスマホとPCをお持ちの方は、スマホでメインで使っているブラウザ、PCでメインで使っているブラウザ両方でアクセスしてください。
                </CardText>
                <CardText>
                    ブラウザによって、機能や性能が異なり、ブラウザの違いでWebサイトによっては閲覧できたりできなかったりします。
                    Internet Explorerや数年前のAndroidスマホにデフォルトで搭載されているブラウザなどの古いブラウザは、
                    深刻なバグや脆弱性と言われるセキュリティ的に問題となる点が多く存在し、機能も貧弱で性能も良くありません。
                    そのため、古いブラウザの使用はおすすめできません。
                    早急に違うブラウザに切り替えるべきでしょう。
                </CardText>
                <CardText>
                    おすすめするのは、機能・性能が良く、サポートがしっかりしていて、バグの解消に務め、
                    セキュリティ面の安全をちゃんと守ってくれていて、頻繁にアップデートしてくれるブラウザです。
                    ここで、おすすめのブラウザを二つ紹介します。
                </CardText>
            </Card>
      </MuiThemeProvider>
    );

export default BrowserInfo;
