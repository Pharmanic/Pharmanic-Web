import React, { Component } from 'react';
// import SupplyToDHModel from '../SupplyToDHModel/SupplyToDHModel';
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


class DirectHospitalDetail extends Component {
    // supplyToDHModelRef=({toggleDanger}) =>{
    //   this.toggleModal = toggleDanger;
    // }
    // onSupplyClick=()=>{
    //   this.toggleModal();
    // }

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
        // this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.state = {
            direct_hospital_details: [],
            isLoading: true,
            // ministrytracks: [],
            item: this.emptyItem,
            // shouldShowModal: false,
            modalOrderId: -1
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // if (this.props.match.params.id !== 'new') {
        //     const group = await (await fetch(`/dhreqorderdetails/${this.props.match.params.id}`)).json();
        //     this.setState({item: group});
        //   }
        this.setState({ isLoading: true, danger: false, modal: false, });
        this.toggleDanger = this.toggleDanger.bind(this);
        console.log('param', this.props.match);
        fetch(`/directhospitals/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => this.setState({ direct_hospital_details: data, isLoading: false }));
        // this.loadData();

        // fetch('/ministrytracks')
        //   .then(response => response.json())
        //   .then(data => this.setState({ ministrytracks: data, isLoading: false }));
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        // let item = { ...this.state.item };
        // item[name] = value;
        // this.setState({ item });
        this.state.direct_hospital_details.name = value;
        //this.setState((direct_hospital_details));
    }

    // enableEdit(event) {


    // }

    // async handleSubmit(event) {
    //   event.preventDefault();
    //   const {item} = this.state;
    //   console.log('object content', item);
    //   await fetch('/supplyordertodh/add', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(item),
    //   });
    //   this.props.history.push('/ministrydamagestocks');
    // }
    loadData(){
          this.setState({
            reg_no:  this.state.direct_hospital_details.reg_no,
            address: this.state.direct_hospital_details.address,
            name: this.state.direct_hospital_details.name,
            email:  this.state.direct_hospital_details.email,
            telephone:  this.state.direct_hospital_details.telephone,
            doctor_incharge:  this.state.direct_hospital_details.doctor_incharge,
        });
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
        // this.reg_no.Enabled = !this.state.enableEdit;
        // this.name.=false;

    }
    resetForm = () => {
        this.setState({ item: this.emptyItem });
    }


    // onRadioBtnClick(radioSelected) {
    //   this.setState({
    //     radioSelected: radioSelected,
    //   });
    // }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

    // toggleModal = (event) => {
    //   console.log(event.target.id);
    //   this.setState({ shouldShowModal: !this.state.shouldShowModal, modalOrderId: event.target.id })
    // }

    render() {
        const {direct_hospital_details, isLoading, item} = this.state;

        // this.state.enableEdit=false;
        console.log('reqlist', direct_hospital_details);
        if (isLoading) {
            return <p>Loading...</p>;
        }
        /*
            const trackList = ministrytracks.map(ministrytrack => {
              return <option
                key={ministrytrack.track_id}
                value={ministrytrack.track_id}>
                {ministrytrack.destination}
              </option>
            });*/

        // const groupList = direct_hospital_details.map(direct_hospital_detail => {
        /*return <tr key={direct_hospital_details.reg_no}>
          <td style={{ whiteSpace: 'nowrap' }}>{direct_hospital_details.reg_no}</td>
          <td style={{ whiteSpace: 'nowrap' }}>{direct_hospital_details.reg_no}</td>
          <td style={{ whiteSpace: 'nowrap' }}>{direct_hospital_details.reg_no}</td>
          <td style={{ whiteSpace: 'nowrap' }}>{direct_hospital_details.reg_no}</td>*/
        {/*<td style={{ whiteSpace: 'nowrap' }}>
          {direct_hospital_detail.can_supply_status === 1 ?
            <Badge color="success">Available</Badge>
            : <Badge color="danger">Not Available</Badge>}
        </td>*/}
        {/*<td> </td>*/ }
        {/*<td></td>*/ }
        {/*<td style={{ whiteSpace: 'nowrap' }}>
          {direct_hospital_detail.can_supply_status === 1 ?
            <Button id={rdhs_detail.id} block outline color="info" onClick={this.toggleModal}>Supply Orders</Button>
            : <Button block outline color="info" disabled>Supply Order</Button>}
        </td>*/}
        {/*</tr>*/ }
        // });

        //const {shouldShowModal, modalOrderId} = this.state;
        //console.log("shouldShowModal: " + shouldShowModal);
        return (
            <div className="animated fadeIn">

                <Row>
                    <Col xs="12" md="8">
                        <Card>
                            <CardHeader style={{ backgroundColor: '#1b8eb7', color: 'white', borderRadius: '5px' }}>
                                <b>Direct Hospital - {direct_hospital_details.name}</b>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal" id="Direct HospitalForm">



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
                                    {/*<Button size="sm" color="success" onClick={() => {
                                        this.setState({ enableEdit: true }); this.enableEditing(); }} >Enable Edit</Button>*/}

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">Register No</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="reg_no" name="reg_no" placeholder="Register No" initialValue="" value={direct_hospital_details.reg_no || ''}
                                                onChange={this.handleChange} autoComplete="reg_no" disabled={!this.state.enableEdit} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">Name</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="name" name="name" placeholder="Name" initialValue="" value={direct_hospital_details.name || ''}
                                                onChange={this.handleChange} autoComplete="name" disabled={!this.state.enableEdit} />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">Address</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="address" name="address" placeholder="Address" initialValue="" value={direct_hospital_details.address || ''}
                                                onChange={this.handleChange} autoComplete="address" disabled={!this.state.enableEdit} />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">E-Mail</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="email" name="email" placeholder="E-Mail" initialValue="" value={direct_hospital_details.email || ''}
                                                onChange={this.handleChange} autoComplete="email" disabled={!this.state.enableEdit} />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">Tel No</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="telephone" name="telephone" placeholder="Tel No" initialValue="" value={direct_hospital_details.telephone || ''}
                                                onChange={this.handleChange} autoComplete="telephone" disabled={!this.state.enableEdit} />
                                        </Col>
                                    </FormGroup>

                                     <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">Doctor Incharge</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="doctor_incharge" name="doctor_incharge" placeholder="Doctor In-Charge" initialValue="" value={direct_hospital_details.doctor_incharge || ''}
                                                onChange={this.handleChange} autoComplete="telephone" disabled={!this.state.enableEdit} />
                                        </Col>
                                    </FormGroup>




                                    {/*<FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Order date</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="order_date" name="order_date" placeholder="Order Date" value={item.order_date|| ''}
                            onChange={this.handleChange} autoComplete="order_date"/>
                    </Col>
                  </FormGroup>*/}
                                    {/*<FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" tag={Link} to="/directhospitals">Cancel</Button>
                   </FormGroup>*/}

                                    <br />

                                    <FormGroup>
                                        <Button type="submit" size="sm" color="primary" disabled={!this.state.enableEdit}><i className="fa fa-dot-circle-o"></i> Update</Button>{' '}
                                        <Button type="reset" size="sm" color="danger" disabled={!this.state.enableEdit} onClick={this.resetForm}><i className="fa fa-ban"></i> Reset</Button>
                                    </FormGroup>

                                </Form>
                            </CardBody>
                            {/*<CardFooter>*/}
                            {/*<Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>{' '}
                  <Button type="reset" size="sm" color="danger" tag={Link} to="/ministry_stores/ministry_stores_list"><i className="fa fa-ban"></i> Reset</Button>*/}
                            {/*</CardFooter>*/}
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DirectHospitalDetail;
