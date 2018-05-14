import React from 'react'
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { onMailChange, onPasswordChange, requestLogin, switchToRegister } from '../actions';
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

let Login = ({ user, onMailChange, onPasswordChange, requestLogin, switchToRegister, translate }) => (
    <div style={{ maxWidth: 800 }}>
        <Form horizontal>
            <FormGroup controlId="formMail">
                <Col componentClass={ControlLabel} sm={2}>
                    {translate("mail")}
                </Col>
                <Col sm={10}>
                    <FormControl
                        type="text"
                        placeholder={translate('mail')}
                        autoFocus
                        value={user.tempmail}
                        onChange={(event) => onMailChange(event)} />
                </Col>
            </FormGroup>

            <FormGroup controlId="formPassword">
                <Col componentClass={ControlLabel} sm={2}>
                    {translate("password")}
                </Col>
                <Col sm={10}>
                    <FormControl type="password"
                        placeholder={translate("password")}
                        autoFocus
                        value={user.temppassword}
                        onChange={(event) => onPasswordChange(event)} />
                </Col>
            </FormGroup>


            <FormGroup>
                <Row mdpush={10} md={2} className="text-right">
                    <Button
                        bsStyle="blue"
                        disabled={!user.loginPossible}
                        onClick={() => requestLogin({mail: user.tempmail, password: user.temppassword})}>
                        {translate("login")}
                    </Button>
                    <Button
                        bsStyle="link">
                        <Link to={`/register/`}>
                            {translate("register")}
                        </Link>
                    </Button>
                </Row>
            </FormGroup>
        </Form>
    </div>
);

const mapStateToProps = state => ({
    translate: getTranslate(state.locale),
    user: state.user
});

const mapDispatchToProps = dispatch => {
    return {
        onMailChange: (event) => dispatch(onMailChange(event)),
        onPasswordChange: (event) => dispatch(onPasswordChange(event)),
        requestLogin: () => dispatch(requestLogin()),
        switchToRegister: () => dispatch(switchToRegister())
    }
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login;