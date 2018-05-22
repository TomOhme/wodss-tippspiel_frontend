import React from 'react';
import { connect } from 'react-redux';
import { dismissError, dismissMessage } from '../actions';

import {
    Alert
} from 'react-bootstrap';

class StatusBar extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.props.notification.showError = false;
        this.props.notification.showMessage = false;
    }

    render() {
        return <div>
            {
                (this.props.notification.showMessage)
                ?
                <Alert className="error-box" bsStyle="info" onDismiss={() => this.props.dismissMessage()}>
                    {this.props.notification.message}
                </Alert>
                :
                null
            }
            {
                (this.props.notification.showError)
                ?
                <Alert className="error-box" bsStyle="danger" onDismiss={() => this.props.dismissError()}>
                    {this.props.notification.message}
                </Alert>
                :
                null
            }
        </div>
    }

}

const mapStateToProps = state => ({
    notification: state.notification
});

const mapDispatchToProps = dispatch => {
    return {
        dismissError: () => dispatch(dismissError()),
        dismissMessage: () => dispatch(dismissMessage())
    }
}

StatusBar = connect(mapStateToProps, mapDispatchToProps)(StatusBar)

export default StatusBar;
