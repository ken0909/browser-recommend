import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './components/header/Header';
import BrowserInfo from './components/recommend/BrowserInfo';
import Recommend from './components/recommend/Recommend';
import { firebaseDbRef } from './util/FirebaseUtil';
import { setLocalStorage, getLocalStorageItem } from './util/LocalStorageUtil';
import { getBrowserInfo, ua, deviceInfo } from './util/UserAgentUtil';

injectTapEventPlugin();

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

const appStyle = {};
if (window.innerWidth >= 1140) {
    appStyle.margin = '0 15%';
}

const App = () => (
    <div className="App" style={appStyle}>
        <Header />
        <BrowserInfo browserInfo={browserInfo} />
        <Recommend deviceInfo={deviceInfo} />
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
