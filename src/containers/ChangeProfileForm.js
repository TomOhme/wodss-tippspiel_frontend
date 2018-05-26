import React from 'react'

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
            userId: props.user.id,
            newmail: props.user.email,
            newusername: props.user.name,
            reminders: props.user.reminders,
            dailyresults: props.user.dailyresults,
            password: "",
            newpassword: "",
        };

        this.translate = props.translate;
        this.updateProfileOnServer = props.updateProfileOnServer;
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
            this.setState({ dailyresults: !this.state.dailyresults });
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
                        {this.translate("dailyresults")}
                    </Col>
                    <Col sm={10}>
                        <Checkbox
                            placeholder={this.translate('dailyresults')}
                            autoFocus
                            checked={this.state.dailyresults}
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

export default ChangeProfileForm;