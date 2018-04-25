import React from 'react'
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { onMailChange, requestLogin } from '../actions';

import {
    Button,
    Form,
    FormControl,
    Col,
    ControlLabel,
    FormGroup
} from 'react-bootstrap';

let Login = ({ user, onMailChange, requestLogin, translate }) => (
    <div style={{maxWidth: 800}}>
        <Form horizontal>
            <FormGroup controlId="formMail">
                <Col componentClass={ControlLabel} md={2}>
                    {translate('mail')}
                </Col>
                <Col md={10}>
                    <FormControl type="text"
                        placeholder={translate('mail')}
                        autoFocus
                        value={user.tempmail}
                        onChange={(event) => onMailChange(event)} />
                </Col>
            </FormGroup>

            <FormGroup>
                <Col mdPush={10} md={2} className="text-right">
                    <Button bsStyle="primary" onClick={() => requestLogin()}>{translate("login")}</Button>
                </Col>
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
        requestLogin: () => dispatch(requestLogin())
    }
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login;