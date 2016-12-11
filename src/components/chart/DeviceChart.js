import React, { Component } from 'react';
import RC2 from 'react-chartjs2';
import { Card, CardHeader } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import { orange500, red500, cyan500, cyan300, lime500, lime300, blue500, blue300, grey400, grey200, lightBlack, minBlack } from 'material-ui/styles/colors';
import { getPlatformInfo } from '../../util/UserAgentUtil';

export default class DeviceChart extends Component {
    constructor() {
        super();
        this.style = {
            chart: {
                marginBottom: '10px',
            }
        };
        this.barData = {
            labels: ['iOS', 'Android', 'Mac', 'Windows', 'その他'],
            datasets: [
                {
                    label: 'OSシェア',
                    backgroundColor: orange500,
                    borderColor: red500,
                    borderWidth: 1,
                    hoverBackgroundColor: orange500,
                    hoverBorderColor: red500,
                }
            ]
        };
        this.pieData = {
            labels: ['iOS', 'Android', 'Mac', 'Windows', 'その他'],
            datasets: [
                {
                    backgroundColor: [cyan500, lime500, grey400, blue500, lightBlack],
                    hoverBackgroundColor: [cyan300, lime300, grey200, blue300, minBlack],
                    data: [],
                }
            ]
        };
    }

    componentDidMount() {
        this.barChart = this.refs['barChart'].getChart();
        this.pieChart = this.refs['pieChart'].getChart();
        this.listenForItem(this.props.dbref);
    }

    listenForItem(dbRef) {
        dbRef.on('value', (snapshot) => {
            const deviceData = {
                ios: 0,
                android: 0,
                mac: 0,
                windows: 0,
                other: 0,
            };
            snapshot.forEach((data) => {
                const device = getPlatformInfo(data.val().platform);
                if (device === 'iOS') {
                    deviceData.ios += 1;
                } else if (device === 'Android') {
                    deviceData.android += 1;
                } else if (device === 'Mac') {
                    deviceData.mac += 1;
                } else if (device === 'Windows') {
                    deviceData.windows += 1;
                } else {
                    deviceData.other += 1;
                }
            });
            this.updateBarChart(deviceData);
            this.updatePieChart(deviceData);
        });
    }

    updateBarChart(deviceData) {
        this.barChart.data.datasets[0].data = [
            deviceData.ios,
            deviceData.android,
            deviceData.mac,
            deviceData.windows,
            deviceData.other,
        ];
        this.barChart.update();
    }

    updatePieChart(deviceData) {
        this.pieChart.data.datasets[0].data = [
            deviceData.ios,
            deviceData.android,
            deviceData.mac,
            deviceData.windows,
            deviceData.other,
        ];
        this.pieChart.update();
    }

    render() {
        return (
            <Card style={this.style.chart}>
                <CardHeader title="使用されているOSのサマリー" />
                <RC2 data={this.barData} type="bar" ref="barChart" />
                <Divider />
                <RC2 data={this.pieData} type="pie" ref="pieChart" />
            </Card>
        );
    }
}
