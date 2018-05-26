import React from 'react'

import _ from 'underscore';

import { connect } from 'react-redux';

import {
    Button,
    Modal
} from 'react-bootstrap';
import { getBetStatistics, setChartLoading } from '../actions/BetActions';
import { stat } from 'fs';

import StatisticsChart from './StatisticsChart';

class BetStatistics extends React.Component {

    constructor({ props, game, translate, getBetStatistics, setChartLoading, statistics }) {
        super(props);

        this.state = {
            showModal: false,
        }

        this.game = game;
        this.getBetStatistics = getBetStatistics;
        this.translate = translate;
        this.statistics = statistics;
        this.setChartLoading = setChartLoading;
    }

    render() {
        return (
            <span>
                <Button bsStyle="blue" onClick={this.open}>
                    {this.translate('betstatistics')}
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.translate('betstatistics')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <StatisticsChart />
                    </Modal.Body>
                </Modal>
            </span>
        )
    }

    open = () => {
        this.setChartLoading();
        this.getBetStatistics(this.game);

        this.setState({ showModal: true });
    }

    close = () => {
        this.setChartLoading();
        this.setState({ showModal: false });
    }
};

const mapStateToProps = state => ({
    statistics: state.statistics
});

const mapDispatchToProps = dispatch => ({
    getBetStatistics: (game) => dispatch(getBetStatistics(game)),
    setChartLoading: () => dispatch(setChartLoading()),
});

BetStatistics = connect(mapStateToProps, mapDispatchToProps)(BetStatistics)
export default BetStatistics;