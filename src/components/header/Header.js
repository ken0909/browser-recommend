import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const Header = () => (
    <MuiThemeProvider>
        <AppBar
            title="ブラウザ調査"
        />
    </MuiThemeProvider>
);

export default Header;
