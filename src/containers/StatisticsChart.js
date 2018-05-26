import React from 'react';
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';

import _ from 'underscore';

import { Bar as BarChart } from "react-chartjs";

let StatisticsChart = ({ statistics }) => (
    <div className="">
        <BarChart data={statistics.data} redraw options={statistics.chartOptions} width="600" height="350" />
    </div>
);


const mapStateToProps = state => ({
    statistics: state.statistics
});

StatisticsChart = connect(mapStateToProps)(StatisticsChart)
export default StatisticsChart;