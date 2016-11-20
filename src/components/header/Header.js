import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

export default class Header extends Component {
    constructor() {
        super();
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    render() {
        return (
            <div className="Header">
                <AppBar
                    title="ブラウザ調査"
                    onLeftIconButtonTouchTap={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem onTouchTap={this.handleClose}><Link to="/">おすすめのブラウザ</Link></MenuItem>
                    <MenuItem onTouchTap={this.handleClose}><Link to="/chart">サマリーを見る</Link></MenuItem>
                    <MenuItem onTouchTap={this.handleClose}><Link to="/list">登録された機器情報一覧</Link></MenuItem>
                </Drawer>
            </div>
        );
    }
}
