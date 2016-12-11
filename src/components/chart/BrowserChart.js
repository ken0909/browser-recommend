import React, { Component } from 'react';
import RC2 from 'react-chartjs2';
import { Card, CardHeader } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import { orange500, orange300, red500, yellow500, yellow300, lime500, lime300, blue500, blue300, lightBlack, minBlack, indigo500, indigo300, lightBlue500, lightBlue300, purple500, purple300 } from 'material-ui/styles/colors';

export default class BrowserChart extends Component {
    constructor() {
        super();
        this.style = {
            chart: {
                marginBottom: '10px',
            }
        };
        this.barData = {
            labels: ['Chrome', 'Firefox', 'Safari', 'Edge', 'IE', 'Androidブラウザ', 'Samsungブラウザ', 'その他'],
            datasets: [
                {
                    label: 'ブラウザシェア',
                    backgroundColor: orange500,
                    borderColor: red500,
                    borderWidth: 1,
                    hoverBackgroundColor: orange500,
                    hoverBorderColor: red500,
                }
            ]
        };
        this.pieData = {
            labels: ['Chrome', 'Firefox', 'Safari', 'Edge', 'IE', 'Androidブラウザ', 'Samsungブラウザ', 'その他'],
            datasets: [
                {
                    backgroundColor: [yellow500, orange500, blue500, indigo500, lightBlue500, lime500, purple500, lightBlack],
                    hoverBackgroundColor: [yellow300, orange300, blue300, indigo300, lightBlue300, lime300, purple300, minBlack],
                    data: [],
                }
            ]
        }
    }

    componentDidMount() {
        this.barChart = this.refs['barChart'].getChart();
        this.pieChart = this.refs['pieChart'].getChart();
        this.listenForItem(this.props.dbref);
    }

    listenForItem(dbRef) {
        dbRef.on('value', (snapshot) => {
            const browserData = {
                chrome: 0,
                firefox: 0,
                safari: 0,
                edge: 0,
                ie: 0,
                android: 0,
                samsung: 0,
                other: 0,
            };
            snapshot.forEach((data) => {
                const browserInfo = data.val().browser;
                if (browserInfo.indexOf('Chrome') !== -1) {
                    browserData.chrome += 1;
                } else if (browserInfo.indexOf('Firefox') !== -1) {
                    browserData.firefox += 1;
                } else if (browserInfo.indexOf('Safari') !== -1) {
                    browserData.safari += 1;
                } else if (browserInfo.indexOf('Edge') !== -1) {
                    browserData.edge += 1;
                } else if (browserInfo.indexOf('Internet Explorer') !== -1) {
                    browserData.ie += 1;
                } else if (browserInfo.indexOf('Android') !== -1) {
                    browserData.android += 1;
                } else if (browserInfo.indexOf('Samsung') !== -1) {
                    browserData.samsung += 1;
                } else {
                    browserData.other += 1;
                }
            });
            this.updateBarChart(browserData);
            this.updatePieChart(browserData);
        });
    }

    updateBarChart(browserData) {
        this.barChart.data.datasets[0].data = [
            browserData.chrome,
            browserData.firefox,
            browserData.safari,
            browserData.edge,
            browserData.ie,
            browserData.android,
            browserData.samsung,
            browserData.other,
        ];
        this.barChart.update();
    }

    updatePieChart(browserData) {
        this.pieChart.data.datasets[0].data = [
            browserData.chrome,
            browserData.firefox,
            browserData.safari,
            browserData.edge,
            browserData.ie,
            browserData.android,
            browserData.samsung,
            browserData.other,
        ];
        this.pieChart.update();
    }

    render() {
        return (
            <Card style={this.style.chart}>
                <CardHeader title="使用されているブラウザのサマリー" />
                <RC2 data={this.barData} type="bar" ref="barChart" />
                <Divider />
                <RC2 data={this.pieData} type="pie" ref="pieChart" />
            </Card>
        );
    }
}
