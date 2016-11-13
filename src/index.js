import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './components/header/Header';
import BrowserInfo from './components/recommend/BrowserInfo';
import Recommend from './components/recommend/Recommend';
import { firebaseDbRef } from './util/FirebaseUtil';
import { setLocalStorage, getLocalStorageItem } from './util/LocalStorageUtil';

injectTapEventPlugin();

const userAgent = navigator.userAgent.toLowerCase();

const getUserAgent = (ua) => {
    const ie = (ua.indexOf('msie') !== -1);
    const ie11 = (ua.indexOf('trident') !== -1);
    const edge = (ua.indexOf('edge') !== -1) && (ua.indexOf('chrome') !== -1);
    const chrome = (ua.indexOf('chrome') !== -1) && (ua.indexOf('edge') === -1);
    const firefox = (ua.indexOf('firefox') !== -1) || (ua.indexOf('fxios') !== -1);
    const safari = (ua.indexOf('safari') !== -1) && (ua.indexOf('chrome') === -1);
    let ret = '不明';
    if (ie) {
        const ver = ua.match(/msie\s(\d+)\.(\d+)/);
        ret = `Internet Explorer ${ver[0].replace(/msie\s/, '')}`;
    } else if (ie11) {
        ret = 'Internet Explorer 11';
    } else if (edge) {
        const ver = ua.match(/edge\/(\d+)\.(\d+)/);
        ret = `Microsoft Edge ${ver[0].replace(/edge\//, '')}`;
    } else if (chrome) {
        const ver = ua.match(/chrome\/(\d+)\.(\d+)/);
        ret = `Google Chrome ${ver[0].replace(/chrome\//, '')}`;
    } else if (firefox) {
        const ver = ua.match(/firefox\/(\d+)\.(\d+)/);
        ret = `Firefox ${ver[0].replace(/firefox\//, '')}`;
    } else if (safari) {
        const ver = ua.match(/version\/(\d+)\.(\d+)/);
        ret = `Safari ${ver[0].replace(/version\//, '')}`;
    }
    return ret;
};

const clientInfo = {
    userAgent: userAgent,
    platform: navigator.platform,
    browser: getUserAgent(userAgent),
};

const ref = firebaseDbRef('device');
if (!getLocalStorageItem('isAddedDeviceInfo')) {
    ref.push(clientInfo);
    setLocalStorage('isAddedDeviceInfo', 1);
}
const userAgentName = (ua) => {
    return {
        ios: (ua.indexOf('ipad') !== -1 || ua.indexOf('iphone') !== -1 || ua.indexOf('ipod') !== -1),
        android: (ua.indexOf('android') !== -1 && (ua.indexOf('mobile') !== -1 || ua.indexOf('tablet') !== -1)),
        Tablet: (ua.indexOf('windows') !== -1 && ua.indexOf('touch') !== -1 && ua.indexOf('tablet pc') === -1)
        || (ua.indexOf('firefox') !== -1 && ua.indexOf('tablet') !== -1)
        || ua.indexOf('kindle') !== -1
        || ua.indexOf('silk') !== -1
        || ua.indexOf('playbook') !== -1,
        Mobile: (ua.indexOf('windows') !== -1 && ua.indexOf('phone') !== -1)
        || (ua.indexOf('firefox') !== -1 && ua.indexOf('mobile') !== -1)
        || ua.indexOf('blackberry') !== -1
    };
};

const appStyle = {};
if (window.innerWidth >= 1280) {
    appStyle.margin = '0 15%';
}

const App = () => (
  <div className="App" style={appStyle}>
    <Header />
    <BrowserInfo userAgent={clientInfo.browser} />
    <Recommend userAgent={userAgentName(userAgent)} />
  </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
