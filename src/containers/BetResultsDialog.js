import React from 'react'
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';

import {
    Button,
    Modal
} from 'react-bootstrap';

class BetResultsDialog extends React.Component {

    constructor({ props, translate, currentLanguage }) {
        super(props);
        this.translate = translate;
        this.state = {
            showModal: false,
        }
    }

    render() {
        return (
            <span>
                <Button bsStyle="primary" onClick={this.open}>
                    {this.translate('betresults')}
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.translate('betresults')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        TODO
                    </Modal.Body>
                </Modal>
            </span>
        )
    }

    open = () => {
        this.setState({ showModal: true });
    }

    close = () => {
        this.setState({ showModal: false });
    }
};

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    currentLanguage: getActiveLanguage(state.locale).code
});

BetResultsDialog = connect(mapStateToProps)(BetResultsDialog)

export default BetResultsDialog;