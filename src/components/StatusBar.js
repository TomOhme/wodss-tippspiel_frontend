import React from 'react';
import { connect } from 'react-redux';
import { dismissError } from '../actions';

import {
    Alert
} from 'react-bootstrap';

class StatusBar extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        console.log(this.props.error);
    }

    render() {
        return <div>
            {
                (this.props.error.showError)
                ?
                <Alert className="error-box" bsStyle="danger" onDismiss={() => this.props.dismissError()}>
                    {this.props.error.message}
                </Alert>
                :
                null
            }
        </div>
    }

}

const mapStateToProps = state => ({
    error: state.error
});

const mapDispatchToProps = dispatch => {
    return {
        dismissError: () => dispatch(dismissError())
    }
}

StatusBar = connect(mapStateToProps, mapDispatchToProps)(StatusBar)

export default StatusBar;
