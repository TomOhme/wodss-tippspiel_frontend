import React from 'react'

import {
    Button,
    Modal,
    Form,
    FormControl,
    Col,
    ControlLabel,
    FormGroup
} from 'react-bootstrap';

class JoinGroupPasswordDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            password: ''
        }
    }

    render() {
        return (
            <span>
                <Button className="button" bsStyle="blue" onClick={this.open}>
                    {this.props.translate('joingroup')}
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.translate('joingroup')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form horizontal>
                            <FormGroup controlId="formPassword">
                                <Col componentClass={ControlLabel} md={2}>
                                    {this.props.translate('passwordoptional')}
                                </Col>
                                <Col md={10}>
                                    <FormControl type="text" 
                                        placeholder={this.props.translate('password')} 
                                        autoFocus
                                        value={this.state.password} 
                                        onChange={this.handleChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col mdpush={10} md={2} className="text-right">
                                    <Button 
                                        bsStyle="blue" 
                                        onClick={this.submit}>
                                        {this.props.translate("joingroup")}
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                </Modal>
            </span>
        )
    }

    handleChange = (e) => {
        if (e.target.id === 'formPassword') {
            this.setState({ password: e.target.value });
        }
    }

    close = () => {
        this.setState({ showModal: false, password: '' });
    }

    submit = () => {
        this.props.joinGroupOnServer(this.props.group, this.state.password, this.props.userId);
        this.setState({ showModal: false, password: '' });
    }

    open = () => {
        this.setState({ showModal: true });
    }
};

export default JoinGroupPasswordDialog;