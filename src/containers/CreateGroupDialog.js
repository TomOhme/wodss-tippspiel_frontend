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

class CreateGroupDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            name: '',
        }
    }

    render() {
        return (
            <span>
                <Button bsStyle="success" onClick={this.open}>
                    {this.props.translate('creategroup')}
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.translate('creategroup')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form horizontal>
                            <FormGroup controlId="formName">
                                <Col componentClass={ControlLabel} md={2}>
                                    {this.props.translate('name')}
                                </Col>
                                <Col md={10}>
                                    <FormControl type="text" 
                                        placeholder={this.props.translate('name')} 
                                        autoFocus
                                        value={this.state.name} 
                                        onChange={this.handleChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col mdPush={10} md={2} className="text-right">
                                    <Button bsStyle="primary" onClick={this.submit}>{this.props.translate("create")}</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                </Modal>
            </span>
        )
    }

    handleChange = (e) => {
        if (e.target.id === 'formName') {
            this.setState({ name: e.target.value });
        }
    }
    close = () => {
        this.setState({ showModal: false, name: '' });
    }

    submit = () => {
        this.props.createGroupOnServer(this.state.name);
        this.setState({ showModal: false, name: '' });
    }

    open = () => {
        this.setState({ showModal: true });
    }
};

export default CreateGroupDialog;