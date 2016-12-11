import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Header from '../components/header/Header';
import { firebaseDbRef } from '../util/FirebaseUtil';
import { getPlatformInfo } from '../util/UserAgentUtil';

export default class DevieInfoList extends Component {
    constructor() {
        super();
        this.state = { deviceInfoList: [] };
        this.style = {
            card: {
                margin: '10px 0px',
            }
        };
        if (window.innerWidth >= 1140) {
            this.style.root = {
                margin: '0 15%',
            };
        }
    }

    componentDidMount() {
        this.listenForItem(firebaseDbRef('device'));
    }

    listenForItem(dbRef) {
        dbRef.on('value', (snapshot) => {
            const deviceInfoList = [];
            snapshot.forEach((data) => {
                deviceInfoList.push({
                    browser: data.val().browser,
                    platform: getPlatformInfo(data.val().platform),
                });
            });
            this.setState({ deviceInfoList });
        });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="DeviceInfoList" style={this.style.root}>
                    <Header />
                    {this.state.deviceInfoList.map((data, index) => (
                        <Card style={this.style.card} key={index}>
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
                            </List>
                        </Card>
                    ))}
                </div>
            </MuiThemeProvider>
        );
    }
}
