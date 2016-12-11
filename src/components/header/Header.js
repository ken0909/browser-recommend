import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { blue500 } from 'material-ui/styles/colors';
import { Link } from 'react-router';

export default class Header extends Component {
    constructor() {
        super();
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    render() {
        const style = {
            link: {
                textDecoration: 'none',
                color: blue500,
            }
        }
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
                    <MenuItem onTouchTap={this.handleClose}><Link to="/" style={style.link}>おすすめのブラウザ</Link></MenuItem>
                    <MenuItem onTouchTap={this.handleClose}><Link to="/chart" style={style.link}>サマリーを見る</Link></MenuItem>
                    <MenuItem onTouchTap={this.handleClose}><Link to="/list" style={style.link}>登録された機器情報一覧</Link></MenuItem>
                </Drawer>
            </div>
        );
    }
}
