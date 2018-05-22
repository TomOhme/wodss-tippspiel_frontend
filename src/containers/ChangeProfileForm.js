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
            newmail: "",
            newusername: "",
            newpassword: "",
            reminders: props.user.reminders,
            dailyresults: props.user.dailyresults,
        };

        this.translate = props.translate;
        this.changeProfileOnServer = props.changeProfileOnServer;
    }

    handleChange = (e) => {
        if (e.target.id === 'formMail') {
            this.setState({ mail: e.target.value });
        }
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
                            value={this.state.mail}
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
                            value={this.state.mail}
                            onChange={(e) => this.handleChange(e)} />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formPassword">
                    <Col componentClass={ControlLabel} md={2}>
                        {this.translate('newpassword')}
                    </Col>
                    <Col md={5}>
                        <FormControl type="text"
                            placeholder={this.translate('password')}
                            autoFocus
                            value={this.state.mail}
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

                <FormGroup>
                    <Col md={7} className="text-right">
                        <Button
                            bsStyle="blue"
                            onClick={() => this.changeProfileOnServer(this.state.mail)}>
                            {this.translate("update")}
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
};

export default ChangeProfileForm;