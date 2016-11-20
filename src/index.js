import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';
import Top from './components/top/Top';
import Chart from './components/chart/Chart';
import DeviceInfoList from './components/device/DeviceInfoList';

injectTapEventPlugin();

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Top} />
        <Route path="/chart" component={Chart} />
        <Route path="/list" component={DeviceInfoList} />
    </Router>
), document.getElementById('root'));
