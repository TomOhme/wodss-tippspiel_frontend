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

class ChangeMailDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            mail: '',
        }
    }

    render() {
        return (
            <span>
                <Button bsStyle="default" onClick={this.open}>
                    {this.props.translate('changemail')}
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.translate('changemail')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form horizontal>
                            <FormGroup controlId="formMail">
                                <Col componentClass={ControlLabel} md={2}>
                                    {this.props.translate('mail')}
                                </Col>
                                <Col md={10}>
                                    <FormControl type="text" 
                                        placeholder={this.props.translate('mail')} 
                                        autoFocus
                                        value={this.state.mail} 
                                        onChange={this.handleChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col mdpush={10} md={2} className="text-right">
                                    <Button bsStyle="primary" onClick={this.submit}>{this.props.translate("change")}</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                </Modal>
            </span>
        )
    }

    handleChange = (e) => {
        if (e.target.id === 'formMail') {
            this.setState({ mail: e.target.value });
        }
    }

    close = () => {
        this.setState({ showModal: false, mail: '' });
    }

    submit = () => {
        this.props.changeMailOnServer(this.state.mail);
        this.setState({ showModal: false, mail: '' });
    }

    open = () => {
        this.setState({ showModal: true });
    }
};

export default ChangeMailDialog;