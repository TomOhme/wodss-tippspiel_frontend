import React from 'react'
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { onMailChange, onPasswordChange, requestLogin, switchToRegister } from '../actions/LoginRegisterActions';
import { Link } from 'react-router-dom'

import {
    Button,
    Form,
    FormControl,
    Col,
    Row,
    ControlLabel,
    FormGroup
} from 'react-bootstrap';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mail: "",
            password: "",
            loginPossible: false
        }

        this.translate = props.translate;
        this.user = props.user;
        this.requestLogin = props.requestLogin;
    }

    onMailChange(event) {
        this.setState({ mail: event.target.value });
        this.checkLoginPossible();
    }

    onPasswordChange(event) {
        this.setState({ password: event.target.value });
        this.checkLoginPossible();
    }

    checkLoginPossible() {
        if (this.state.mail.length > 0 && this.state.password.length > 0) {
            this.setState({ loginPossible: true });
        } else {
            this.setState({ loginPossible: false });
        }
    }

    render() {
        return <div style={{ maxWidth: 800 }}>
            <h3>
                {this.translate("login")}
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
                            value={this.state.tempmail}
                            onChange={(event) => this.onMailChange(event)} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        {this.translate("password")}
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password"
                            placeholder={this.translate("password")}
                            autoFocus
                            value={this.state.password}
                            onChange={(event) => this.onPasswordChange(event)} />
                    </Col>
                </FormGroup>


                <FormGroup>
                    <Row mdpush={10} md={2} className="text-right">
                        <Button
                            bsStyle="blue"
                            disabled={!this.state.loginPossible}
                            onClick={() => this.requestLogin(this.state.mail, this.state.password)}>
                            {this.translate("login")}
                        </Button>
                        <Button
                            bsStyle="link">
                            <Link to={`/register`} onClick={() => window.location.reload()}>
                                {this.translate("register")}
                            </Link>
                        </Button>
                    </Row>
                </FormGroup>
            </Form>
        </div>
    }
}

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    user: state.user
});

const mapDispatchToProps = dispatch => {
    return {
        requestLogin: (mail, password) => dispatch(requestLogin(mail, password)),
        switchToRegister: () => dispatch(switchToRegister())
    }
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login;