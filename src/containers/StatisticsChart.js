import React from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';

import _ from 'underscore';

let StatisticsChart = ({ statistics }) => (
    <div className="">
        test
    </div>
);

const mapStateToProps = state => ({
    statistics: state.statistics
});

StatisticsChart = connect(mapStateToProps)(StatisticsChart)
export default StatisticsChart;