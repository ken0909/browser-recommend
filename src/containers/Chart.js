import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/header/Header';
import DeviceChart from '../components/chart/DeviceChart';
import BrowserChart from '../components/chart/BrowserChart';
import { firebaseDbRef } from '../util/FirebaseUtil';

const style = {};
if (window.innerWidth >= 1140) {
    style.margin = '0 15%';
}

const dbref = firebaseDbRef('device');

const Chart = () => (
    <MuiThemeProvider>
        <div className="Chart" style={style}>
            <Header />
            <DeviceChart dbref={dbref} />
            <BrowserChart dbref={dbref} />
        </div>
    </MuiThemeProvider>
);

export default Chart;
