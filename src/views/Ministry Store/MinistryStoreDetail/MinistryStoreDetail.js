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
import authHeader from '../../../assets/services/auth-header_res';



class MinistryStoreDetail extends Component {
    // supplyToDHModelRef=({toggleDanger}) =>{
    //   this.toggleModal = toggleDanger;
    // }
    // onSupplyClick=()=>{
    //   this.toggleModal();
    // }

    emptyItem = {
        m_store_id: '',
        name: '',
        email: '',
        tel_no: '',
        location: '',
        total_storage: '',
        available_storage: ''

        //enableEdit: false,

        // track_id: {
        //     track_id: '',
        //     vehicle_id: {
        //         vehicle_no: '',
        //         type: '',
        //         capacity: ''
        //     },
        //     driver_id: {
        //         nic: '',
        //         name: '',
        //         email: '',
        //         address: '',
        //         telephone: ''
        //     },
        //     starting_point: '',
        //     destination: '',
        //     date: '',

        // }


    };
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        // this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.state = {
            ministry_store_details: [],
            isLoading: true,
            // ministrytracks: [],
            item: this.emptyItem,
            old_item: this.emptyItem,
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
        fetch(`/ministry_stores/${this.props.match.params.id}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + authHeader(),
      }
    })
            .then(response => response.json())
            .then(data => this.setState({ item: data, isLoading: false, old_item: data, isLoading: false }));
        // this.loadData();

        // fetch('/ministrytracks')
        //   .then(response => response.json())
        //   .then(data => this.setState({ ministrytracks: data, isLoading: false }));
    }

  handleChange(event) {
        console.log("OnChange");
        console.log("Old item"+this.state.old_item.reg_no);
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
        
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
        this.setState({ item: this.state.old_item });
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
        const {ministry_store_details, isLoading, item} = this.state;

        // this.state.enableEdit=false;
        console.log('reqlist', ministry_store_details);
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

        // const groupList = ministry_store_details.map(ministry_store_detail => {
        /*return <tr key={ministry_store_details.reg_no}>
          <td style={{ whiteSpace: 'nowrap' }}>{ministry_store_details.reg_no}</td>
          <td style={{ whiteSpace: 'nowrap' }}>{ministry_store_details.reg_no}</td>
          <td style={{ whiteSpace: 'nowrap' }}>{ministry_store_details.reg_no}</td>
          <td style={{ whiteSpace: 'nowrap' }}>{ministry_store_details.reg_no}</td>*/
        {/*<td style={{ whiteSpace: 'nowrap' }}>
          {ministry_store_detail.can_supply_status === 1 ?
            <Badge color="success">Available</Badge>
            : <Badge color="danger">Not Available</Badge>}
        </td>*/}
        {/*<td> </td>*/ }
        {/*<td></td>*/ }
        {/*<td style={{ whiteSpace: 'nowrap' }}>
          {ministry_store_detail.can_supply_status === 1 ?
            <Button id={ministry_store_detail.id} block outline color="info" onClick={this.toggleModal}>Supply Orders</Button>
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
                                <b>Ministry Store - {item.name}</b>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal" id="ministry_storeForm">



                                    <FormGroup row>
                                        <Col md="6">
                                            <FormGroup check className="radio">
                                                <Input className="form-check-input" type="checkbox" id="radio2" name="radios" value="ministry_store" onClick={() => {
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
                                            <Label htmlFor="text-input">Ministry Store ID</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="m_store_id" name="m_store_id" placeholder="Ministry Store ID" initialValue="" value={item.m_store_id || ''}
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
                                            <Input type="text" id="tel_no" name="tel_no" placeholder="Tel No" initialValue="" value={item.tel_no || ''}
                                                onChange={this.handleChange} autoComplete="tel_no" disabled={!this.state.enableEdit} />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">Location</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="location" name="location" placeholder="Location" initialValue="" value={item.location || ''}
                                                onChange={this.handleChange} autoComplete="location" disabled={!this.state.enableEdit} />
                                        </Col>
                                    </FormGroup>

                                   

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">Total Storage</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="total_storage" name="total_storage" placeholder="Total Storage" initialValue="" value={item.total_storage || ''}
                                                onChange={this.handleChange} autoComplete="total_storage" disabled={!this.state.enableEdit} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">Available Storage</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="available_storage" name="available_storage" placeholder="Available Storage" initialValue="" value={item.available_storage || ''}
                                                onChange={this.handleChange} autoComplete="available_storage" disabled={!this.state.enableEdit} />
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

export default MinistryStoreDetail;
