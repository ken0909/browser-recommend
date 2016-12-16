export const ua = navigator.userAgent.toLowerCase();

export const getBrowserInfo = () => {
    const ie = ua.indexOf('msie') !== -1;
    const ie11 = ua.indexOf('trident') !== -1;
    const edge = ua.indexOf('edge') !== -1 && ua.indexOf('chrome') !== -1;
    const chrome = (ua.indexOf('chrome') !== -1 && ua.indexOf('edge') === -1) || (ua.indexOf('safari') !== -1 && ua.indexOf('crios') !== -1);
    const firefox = (ua.indexOf('firefox') !== -1 || ua.indexOf('fxios') !== -1) || (ua.indexOf('safari') !== -1 && ua.indexOf('fxios') !== -1);
    const safari = ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1;
    const androidBrowser = ua.indexOf('android') !== -1 && ua.indexOf('linux; u;') !== -1 && ua.indexOf('chrome') === -1;
    const samsungBrowser = ua.indexOf('samsungbrowser') !== -1;
    const line = ua.indexOf('line') !== -1;
    const facebook = ua.indexOf('fban') !== -1;
    const twitter = ua.indexOf('twitter') !== -1;
    const webView = ua.indexOf('wv)') !== -1;

    const ret = {
        browser: 'お使いのブラウザを判別できませんでした'
    };
    if (line || facebook || twitter || webView) {
        ret.browser = 'これはアプリ内Webビューです';
        ret.message = '普段お使いのブラウザでアクセスしてください';
        ret.ua = 'webView';
    } else if (ie) {
        const ver = ua.match(/msie\s(\d+)\.(\d+)/);
        ret.browser = `Internet Explorer ${ver[0].replace(/msie\s/, '')}`;
        ret.message = '今すぐブラウザを変更することを推奨します！';
        ret.ua = 'ie';
    } else if (ie11) {
        ret.browser = 'Internet Explorer 11';
        ret.message = '今すぐブラウザを変更することを推奨します！';
        ret.ua = 'ie';
    } else if (samsungBrowser) {
        const ver = ua.match(/samsungbrowser\/(\d+)\.(\d+)/);
        ret.browser = `Samsungブラウザ ${ver[0].replace(/samsungbrowser\//, '')}`;
        ret.ua = 'samsung';
    } else if (androidBrowser) {
        const ver = ua.match(/version\/(\d+)\.(\d+)/);
        ret.browser = `Androidブラウザ ${ver[0].replace(/version\//, '')}`;
        ret.message = '今すぐブラウザを変更することを推奨します！';
        ret.ua = 'android';
    } else if (edge) {
        const ver = ua.match(/edge\/(\d+)\.(\d+)/);
        ret.browser = `Microsoft Edge ${ver[0].replace(/edge\//, '')}`;
        ret.ua = 'edge';
    } else if (chrome) {
        const ver = ua.match(/(chrome\/(\d+)\.(\d+)|crios\/(\d+)\.(\d+))/);
        ret.browser = `Google Chrome ${ver[0].replace(/(chrome\/|crios\/)/, '')}`;
        ret.message = '素晴らしい！';
        ret.ua = 'chrome';
    } else if (firefox) {
        const ver = ua.match(/(firefox\/(\d+)\.(\d+)|fxios\/(\d+)\.(\d+))/);
        ret.browser = `Firefox ${ver[0].replace(/(firefox\/|fxios\/)/, '')}`;
        ret.message = '素晴らしい！';
        ret.ua = 'firefox';
    } else if (safari) {
        const ver = ua.match(/version\/(\d+)\.(\d+)/);
        ret.browser = `Safari ${ver[0].replace(/version\//, '')}`;
        ret.ua = 'safari';
    } else {
        ret.browser = 'ブラウザを判別できませんでした';
        ret.ua = 'other';
    }
    return ret;
};

export const deviceInfo = {
    ios: (ua.indexOf('ipad') !== -1 || ua.indexOf('iphone') !== -1 || ua.indexOf('ipod') !== -1),
    android: (ua.indexOf('android') !== -1),
    Tablet: (ua.indexOf('windows') !== -1 && ua.indexOf('touch') !== -1 && ua.indexOf('tablet pc') === -1)
        || (ua.indexOf('firefox') !== -1 && ua.indexOf('tablet') !== -1)
        || ua.indexOf('kindle') !== -1
        || ua.indexOf('silk') !== -1
        || ua.indexOf('playbook') !== -1,
    Mobile: (ua.indexOf('windows') !== -1 && ua.indexOf('phone') !== -1)
        || (ua.indexOf('firefox') !== -1 && ua.indexOf('mobile') !== -1)
        || ua.indexOf('blackberry') !== -1
};

export const getPlatformInfo = (platform) => {
    let ret = '';
    const lowerPlatform = platform.toLowerCase();
    if (lowerPlatform.indexOf('linux arm') !== -1) {
        ret = 'Android';
    } else if (lowerPlatform.indexOf('iphone') !== -1 || lowerPlatform.indexOf('ipod') !== -1) {
        ret = 'iOS';
    } else if (lowerPlatform.indexOf('mac') !== -1) {
        ret = 'Mac';
    } else if (lowerPlatform.indexOf('win') !== -1) {
        ret = 'Windows';
    } else if (lowerPlatform.indexOf('linux') !== -1) {
        ret = 'Linux';
    } else {
        ret = platform;
    }
    return ret;
};
