import React from 'react'
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { requestRegister } from '../actions/LoginRegisterActions';

import {
    Button,
    Alert,
    Form,
    FormControl,
    Col,
    Row,
    ControlLabel,
    FormGroup,
    Checkbox
} from 'react-bootstrap';

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            mail: '',
            username: '',
            password1: '',
            password2: '',
            reminders: true,
            registerPossible: false
        }

        this.translate = this.props.translate;
        this.requestRegister = this.props.requestRegister;
    }

    handleChange(e) {
        if (e.target.id === 'formMail') {
            this.setState({ mail: e.target.value });
        }
        else if (e.target.id === 'formUsername') {
            this.setState({ username: e.target.value });
        }
        else if (e.target.id === 'formPassword1') {
            this.setState({ password1: e.target.value });
        }
        else if (e.target.id === 'formPassword2') {
            this.setState({ password2: e.target.value });
        }
        else if (e.target.id === 'formReminders') {
            this.setState({ reminders: e.target.value });
        }
    }

    isRegisterPossible() {
        // check if register possible
        if (this.state.mail.length > 0
            && this.state.username.length > 0
            && this.state.password1.length > 0
            && this.state.password2.length > 0
            && this.passwordsMatch()) {
            return true;
        }
        else {
            return false;
        }
    }

    passwordsMatch() {
        return this.state.password1 === this.state.password2;
    }

    toggleReminders() {
        const oldReminders = this.state.reminders;
        this.setState({ reminders: !oldReminders });
    }

    render() {
        return <div style={{ maxWidth: 800 }}>
            <h3>
                {this.translate("register")}
            </h3>
            <br />
            <Form horizontal>
                <FormGroup controlId="formMail">
                    <Col componentClass={ControlLabel} sm={2}>
                        {this.translate("mail")}
                    </Col>
                    <Col sm={10}>
                        <FormControl
                            type="text"
                            placeholder={this.translate('mail')}
                            autoFocus
                            value={this.state.mail}
                            onChange={(event) => this.handleChange(event)} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formUsername">
                    <Col componentClass={ControlLabel} sm={2}>
                        {this.translate("username")}
                    </Col>
                    <Col sm={10}>
                        <FormControl
                            type="text"
                            placeholder={this.translate('username')}
                            autoFocus
                            value={this.state.username}
                            onChange={(event) => this.handleChange(event)} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formPassword1">
                    <Col componentClass={ControlLabel} sm={2}>
                        {this.translate("password")}
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password"
                            placeholder={this.translate("password")}
                            autoFocus
                            value={this.state.password1}
                            onChange={(event) => this.handleChange(event)} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formPassword2">
                    <Col componentClass={ControlLabel} sm={2}>
                        {this.translate("passwordagain")}
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password"
                            placeholder={this.translate("password")}
                            autoFocus
                            value={this.state.password2}
                            onChange={(event) => this.handleChange(event)} />
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

                <Row>
                    <Alert bsStyle="danger"
                        hidden={this.passwordsMatch()}>
                        {this.translate("passwordnomatch")}
                    </Alert>
                </Row>

                <FormGroup>
                    <Row mdpush={10} md={2} className="text-right">
                        <Button
                            bsStyle="blue"
                            disabled={!this.isRegisterPossible()}
                            onClick={() => this.requestRegister(this.state)}>
                            {this.translate("register")}
                        </Button>
                    </Row>
                </FormGroup>
            </Form>
        </div>
    }
};

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
});

const mapDispatchToProps = dispatch => ({
    requestRegister: (state) => dispatch(requestRegister(state)),
});

Register = connect(mapStateToProps, mapDispatchToProps)(Register)

export default Register;