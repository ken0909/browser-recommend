import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { firebaseDbRef } from '../../util/FirebaseUtil';
import { setLocalStorage, getLocalStorageItem } from '../../util/LocalStorageUtil';
import { getBrowserInfo, ua, deviceInfo } from '../../util/UserAgentUtil';
import Header from '../../components/header/Header';
import BrowserInfo from '../../components/recommend/BrowserInfo';
import Recommend from '../../components/recommend/Recommend';

const ref = firebaseDbRef('device');
const browserInfo = getBrowserInfo();
if (!getLocalStorageItem('isAddedDeviceInfo')) {
    if (browserInfo.ua !== 'webView') {
        ref.push({
            userAgent: ua,
            platform: navigator.platform,
            browser: browserInfo.browser,
        });
        setLocalStorage('isAddedDeviceInfo', 1);
    }
}

const style = {};
if (window.innerWidth >= 1140) {
    style.margin = '0 15%';
}

const Top = () => (
    <MuiThemeProvider>
        <div className="Top" style={style}>
            <Header />
            <BrowserInfo browserInfo={browserInfo} />
            <Recommend deviceInfo={deviceInfo} />
        </div>
    </MuiThemeProvider>
);

export default Top;
