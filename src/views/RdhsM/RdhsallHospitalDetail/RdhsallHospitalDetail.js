import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    Table,
    Button, Modal, ModalBody, ModalFooter, ModalHeader,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
    Label,
    Badge
} from 'reactstrap';

import { } from 'reactstrap';

import { Link, withRouter } from 'react-router-dom';


class RdhsallHosDetail extends Component {
   
    emptyItem = {
        reg_no: '',
        name: '',
        address: '',
        email: '',
        telephone: '',
        doctor_incharge: ''

    };
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            hospital_details: [],
            isLoading: true,
            item: this.emptyItem,
            modalOrderId: -1
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
       
        this.setState({ isLoading: true, danger: false, modal: false, });
        this.toggleDanger = this.toggleDanger.bind(this);
        console.log('param', this.props.match);
        fetch(`/hospitalByRdhs/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => this.setState({ item: data, isLoading: false,old_item: data, isLoading: false }));
    }

    handleChange(event) {
        console.log("OnChange");
        console.log("Old item" + this.state.old_item.reg_no);
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    toggleDanger() {
        this.setState({
            danger: !this.state.danger,
        });
    }

    enableEditing() {
        console.log(!this.state.enableEdit);
    }
    resetForm = () => {
        this.setState({ item: this.state.old_item });
    }

    formFieldsChanged(){
        
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>


    render() {
        const {isLoading, item} = this.state;
        console.log('reqlist', item);
        if (isLoading) {
            return <p>Loading...</p>;
        }
       
        return (
            <div className="animated fadeIn">

                <Row>
                    <Col xs="12" md="8">
                        <Card>
                            <CardHeader style={{ backgroundColor: '#1b8eb7', color: 'white', borderRadius: '5px' }}>
                                <b>Hospital under RDHS  - {item.name}</b>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal" id="RDHS HospitalForm">



                                    <FormGroup row>
                                        <Col md="6">
                                            <FormGroup check className="radio">
                                                <Input className="form-check-input" type="checkbox" id="radio2" name="radios" value="RDHS Hospital" onClick={() => {
                                                    this.setState({ enableEdit: !this.state.enableEdit }); this.enableEditing();
                                                }} />
                                                <Label check className="form-check-label" htmlFor="radio2">Enable Editing</Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>
                                  
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">Register No</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="reg_no" name="reg_no" placeholder="Register No" initialValue="" value={item.reg_no || ''}
                                                onChange={this.handleChange} autoComplete="reg_no" disabled={!this.state.enableEdit} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">Name</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="name" name="name" placeholder="Name" initialValue="" value={item.name || ''}
                                                onChange={this.handleChange} autoComplete="name" disabled={!this.state.enableEdit} />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">Address</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="address" name="address" placeholder="Address" initialValue="" value={item.address || ''}
                                                onChange={this.handleChange} autoComplete="address" disabled={!this.state.enableEdit} />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">E-Mail</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="email" name="email" placeholder="E-Mail" initialValue="" value={item.email || ''}
                                                onChange={this.handleChange} autoComplete="email" disabled={!this.state.enableEdit} />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">Tel No</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="telephone" name="telephone" placeholder="Tel No" initialValue="" value={item.telephone || ''}
                                                onChange={this.handleChange} autoComplete="telephone" disabled={!this.state.enableEdit} />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">Doctor Incharge</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="doctor_incharge" name="doctor_incharge" placeholder="Tel No" initialValue="" value={item.telephone || ''}
                                                onChange={this.handleChange} autoComplete="telephone" disabled={!this.state.enableEdit} />
                                        </Col>
                                    </FormGroup>

                                    <br />

                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default RdhsallHosDetail;
