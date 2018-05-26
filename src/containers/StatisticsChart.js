import React from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

import _ from 'underscore';

var BarChart = require("react-chartjs").Bar;


let StatisticsChart = ({ statistics }) => (
    <div className="">
        <BarChart data={statistics.data} options={statistics.chartOptions} width="500" height="250"/>
    </div>
);

const mapStateToProps = state => ({
    statistics: state.statistics
});

StatisticsChart = connect(mapStateToProps)(StatisticsChart)
export default StatisticsChart;