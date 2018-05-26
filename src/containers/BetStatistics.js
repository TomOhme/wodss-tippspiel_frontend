import React from 'react'

import { connect } from 'react-redux';

import {
    Button,
    Modal
} from 'react-bootstrap';
import { getBetStatistics } from '../actions/BetActions';

import StatisticsChart from './StatisticsChart';

class BetStatistics extends React.Component {

    constructor({ props, game, translate, getBetStatistics, statistics }) {
        super(props);

        this.state = {
            showModal: false,
        }

        this.game = game;
        this.getBetStatistics = getBetStatistics;
        this.translate = translate;
        this.statistics = statistics;
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
        this.getBetStatistics(this.game);

        this.setState({ showModal: true });
    }

    close = () => {
        this.setState({ showModal: false });
    }
};

const mapStateToProps = state => ({
    statistics: state.statistics
});

const mapDispatchToProps = dispatch => ({
    getBetStatistics: (game) => dispatch(getBetStatistics(game)),
});

BetStatistics = connect(mapStateToProps, mapDispatchToProps)(BetStatistics)
export default BetStatistics;