import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import AlertWarning from 'material-ui/svg-icons/alert/warning';
import { red500, blue500, fullWhite } from 'material-ui/styles/colors';

export default class DeviceInfo extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
        };
        this.style = {
            deviceInfo: {
                display: 'flex',
                justifyContent: 'center',
            }
        };
        if (window.innerWidth <= 980) {
            this.style.dialog = {
                width: '100%',
                maxWidth: 'none',
            };
        }
    }

    render() {
        const handleOpen = () => {
            this.setState({ open: true });
        };

        const handleClose = () => {
            this.setState({ open: false });
        };

        const actions = [
            <FlatButton
              label="閉じる"
              primary={true}
              onTouchTap={handleClose}
            />
        ];

        const messageList = [
            <ListItem
                key={1}
                primaryText={this.props.browserInfo.browser}
                disableKeyboardFocus={true}
                disabled={true}
            />
        ];
        const ua = this.props.browserInfo.ua;
        if (ua === 'webView') {
            messageList.push(
                <ListItem
                    key={2}
                    primaryText={this.props.browserInfo.message}
                    disableKeyboardFocus={true}
                    disabled={true}
                    leftIcon={<AlertWarning color={red500} />}
                />
            );
        } else if (ua === 'ie' || ua === 'android') {
            messageList.push(
                <ListItem
                    key={2}
                    primaryText={this.props.browserInfo.message}
                    disableKeyboardFocus={true}
                    disabled={true}
                    leftIcon={<AlertWarning color={red500} />}
                />
            );
        } else if (ua === 'chrome' || ua === 'firefox') {
            messageList.push(
                <ListItem
                    key={2}
                    primaryText={this.props.browserInfo.message}
                    disableKeyboardFocus={true}
                    disabled={true}
                    leftIcon={<ActionThumbUp color={blue500} />}
                />
            );
        }

        return (
            <div className="deviceInfo" style={this.style.deviceInfo}>
                <RaisedButton
                    label="あなたのブラウザの情報を確認する"
                    onTouchTap={handleOpen}
                    backgroundColor={blue500}
                    labelColor={fullWhite}
                />
                <Dialog
                    title="ブラウザ情報"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={handleClose}
                    contentStyle={this.style.dialog}
                >
                    <List>
                        {messageList}
                    </List>
                </Dialog>
            </div>
        );
    }
}
