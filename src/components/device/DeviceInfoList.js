import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Header from '../header/Header';
import { firebaseDbRef } from '../../util/FirebaseUtil';

const deviceList = [];
firebaseDbRef('device').on('value', (snapshot) => {
    snapshot.forEach((data) => {
        deviceList.push({
            browser: data.val().browser,
            platform: data.val().platform,
            userAgent: data.val().userAgent,
        });
    });
});

const style = {
    card: {
        margin: '10px 0px',
    }
};
if (window.innerWidth >= 1140) {
    style.root = {
        margin: '0 15%',
    };
}

const DeviceInfoList = () => (
    <MuiThemeProvider>
        <div className="DeviceInfoList" style={style.root}>
            <Header />
            {deviceList.map((data, index) => (
                <Card style={style.card} key={index}>
                    <List>
                        <ListItem
                            primaryText={data.browser}
                            disableKeyboardFocus={true}
                            disabled={true}
                        />
                        <Divider />
                        <ListItem
                            primaryText={data.platform}
                            disableKeyboardFocus={true}
                            disabled={true}
                        />
                        <Divider />
                        <ListItem
                            primaryText={data.userAgent}
                            disableKeyboardFocus={true}
                            disabled={true}
                        />
                    </List>
                </Card>
            ))}
        </div>
    </MuiThemeProvider>
);

export default DeviceInfoList;
