import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class DeviceInfo extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
        };
        this.style = {
            display: 'flex',
            display: '-webkit-flex',
            justifyContent: 'center'
        };
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

        return (
            <div className="deviceInfo" style={this.style}>
                <RaisedButton label="あなたのブラウザの情報を確認する" onTouchTap={handleOpen} />
                <Dialog
                    title="ブラウザ情報"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={handleClose}
                >
                    {this.props.userAgent}
                </Dialog>
            </div>
        );
    }
}
