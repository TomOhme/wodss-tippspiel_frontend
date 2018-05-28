import React from 'react'

import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { updateProfileOnServer, deleteProfileOnServer } from '../../actions/ProfileActions';

import {
    Button,
    Form,
    FormControl,
    Col,
    ControlLabel,
    FormGroup,
    Checkbox
} from 'react-bootstrap';

class ChangeProfileForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.user.id,
            newmail: this.props.user.email,
            newusername: this.props.user.name,
            reminders: this.props.user.reminders,
            dailyResults: this.props.user.dailyResults,
            password: "",
            newpassword: "",
        };

        this.translate = this.props.translate;
        this.updateProfileOnServer = this.props.updateProfileOnServer;
    }

    handleChange = (e) => {
        if (e.target.id === 'formName') {
            this.setState({ newusername: e.target.value });
        }
        if (e.target.id === 'formMail') {
            this.setState({ newmail: e.target.value });
        }
        if (e.target.id === 'formNewPassword') {
            this.setState({ newpassword: e.target.value });
        }
        if (e.target.id === 'formPassword') {
            this.setState({ password: e.target.value });
        }
    }

    toggleDailyResults = () => {
        this.setState({ dailyResults: !this.state.dailyResults });
    }

    toggleReminders = () => {
        this.setState({ reminders: !this.state.reminders });
    }

    render() {
        return (
            <Form horizontal>
                <FormGroup controlId="formName">
                    <Col componentClass={ControlLabel} md={2}>
                        {this.translate('newusername')}
                    </Col>
                    <Col md={5}>
                        <FormControl type="text"
                            placeholder={this.translate('username')}
                            autoFocus
                            value={this.state.newusername}
                            onChange={(e) => this.handleChange(e)} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formMail">
                    <Col componentClass={ControlLabel} md={2}>
                        {this.translate('newmail')}
                    </Col>
                    <Col md={5}>
                        <FormControl type="text"
                            placeholder={this.translate('mail')}
                            autoFocus
                            value={this.state.newmail}
                            onChange={(e) => this.handleChange(e)} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formReminders">
                    <Col componentClass={ControlLabel} sm={2}>
                        {this.translate("reminders")}
                    </Col>
                    <Col sm={10}>
                        <Checkbox
                            placeholder={this.translate('reminders')}
                            autoFocus
                            checked={this.state.reminders}
                            onChange={() => this.toggleReminders()} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formDailyResults">
                    <Col componentClass={ControlLabel} sm={2}>
                        {this.translate("dailyResults")}
                    </Col>
                    <Col sm={10}>
                        <Checkbox
                            placeholder={this.translate('dailyResults')}
                            autoFocus
                            checked={this.state.dailyResults}
                            onChange={() => this.toggleDailyResults()} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formNewPassword">
                    <Col componentClass={ControlLabel} md={2}>
                        {this.translate('newpassword')}
                    </Col>
                    <Col md={5}>
                        <FormControl type="password"
                            placeholder={this.translate('password')}
                            autoFocus
                            value={this.state.newpassword}
                            onChange={(e) => this.handleChange(e)} />
                    </Col>
                </FormGroup>

                <br />

                <FormGroup controlId="formPassword">
                    <Col componentClass={ControlLabel} md={2}>
                        {this.translate('passwordforconfirm')}
                    </Col>
                    <Col md={5}>
                        <FormControl type="password"
                            placeholder={this.translate('password')}
                            autoFocus
                            value={this.state.mail}
                            onChange={(e) => this.handleChange(e)} />
                    </Col>
                </FormGroup>


                <FormGroup>
                    <Col md={7} className="text-right">
                        <Button
                            bsStyle="blue"
                            onClick={() => this.updateProfileOnServer(this.state)}>
                            {this.translate("update")}
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
};

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    updateProfileOnServer: (state) => dispatch(updateProfileOnServer(state))
});

ChangeProfileForm = connect(mapStateToProps, mapDispatchToProps)(ChangeProfileForm)

export default ChangeProfileForm;