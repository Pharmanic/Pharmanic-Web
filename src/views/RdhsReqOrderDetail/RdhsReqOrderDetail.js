import React, { Component} from 'react';
import SupplyToRdhsModel from '../SupplyOrderToRdhsModal/SupplyOrderToRdhsModal';
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
  Badge,
} from 'reactstrap';

import { } from 'reactstrap';

import { Link, withRouter } from 'react-router-dom';


class DHReqOrderDetail extends Component {
  supplyToDHModelRef=({toggleDanger}) =>{
    this.toggleModal = toggleDanger;
  }
  onSupplyClick=()=>{
    this.toggleModal();
  }

  emptyItem = {
    request_id:{
        id:'',
        order_id:{
          order_id:'',
          hospital_reg_no:{
            reg_no:'',
            name:'',
            address:'',
            email:'',
            telephone:'',
            doctor_incharge:''
          },
          m_store_id:{
            m_store_id:'',
            location:''
          },
          date:'',
          state:''
        },
        sr_no:{
          sr_no:'',
          name:'',
          side_effect:'',
          description:''
        },
        quantity:'',
        can_supply_status:''
        },
  track_id:{
    track_id:'',
    vehicle_id:{
      vehicle_no:'',
      type:'',
      capacity:''
    },
    driver_id:{
      nic:'',
      name:'',
      email:'',
      address:'',
      telephone:''
    },
    starting_point:'',
    destination:'',
    date:''
  }

            
    };
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {
      rdhsreqorderdetails: [], 
      rdhsreqorderdetailssupplied: [], 
      isLoading: true,
      ministrytracks:[],
      item:this.emptyItem,
      shouldShowModal: false,
      modalOrderId: -1 }; 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // if (this.props.match.params.id !== 'new') {
    //     const group = await (await fetch(`/dhreqorderdetails/${this.props.match.params.id}`)).json();
    //     this.setState({item: group});
    //   }
    this.setState({isLoading: true,danger: false,modal: false,});
    this.toggleDanger = this.toggleDanger.bind(this);
    console.log('param',this.props.match);
    fetch(`/rdhsreqorderdetails/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => this.setState({rdhsreqorderdetails: data, isLoading: false}));

      fetch(`/rdhsreqorderdetailssupplied/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => this.setState({rdhsreqorderdetailssupplied: data, isLoading: false}));


      fetch('/ministrytracks')
      .then(response => response.json())
      .then(data => this.setState({ministrytracks: data, isLoading: false}));
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    console.log('value',value);
    const name = target.name;
    console.log('name',name);
    let item = {...this.state.item};
    if(name=='track_id'){
      const ministrytracks=this.state.ministrytracks;
      console.log('ministrytracks',ministrytracks);
      const ministrytrack = ministrytracks.find(mt => mt.track_id===target.value);
      console.log('ministrytrack',ministrytrack);
      item[name]=ministrytrack;
      this.setState({item});
      console.log('item',item);
    }else{
      item[name] = value;
      this.setState({item});
      console.log('item',item);
    } 
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;
    console.log('object content',item);
    await fetch('/supplyordertodh/add', {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/ministrydamagestocks');
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

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  toggleModal = (event)=>{
    console.log(event.target.id);
    this.setState({shouldShowModal: !this.state.shouldShowModal, modalOrderId: event.target.id})
  }

  render() {
    const {rdhsreqorderdetails, isLoading,ministrytracks,item,rdhsreqorderdetailssupplied} = this.state;
    console.log('reqlist',rdhsreqorderdetails);
    if (isLoading) {
      return <p>Loading...</p>;
    }

    const trackList = ministrytracks.map(ministrytrack => {
      return <option 
                key={ministrytrack.track_id} 
                value={ministrytrack.track_id}>
            {ministrytrack.destination}
            </option>
    });

    const groupList = rdhsreqorderdetails.map(rdhsreqorderdetail => {
      return <tr key={rdhsreqorderdetail.id}>
        <td style={{whiteSpace: 'nowrap'}}>{rdhsreqorderdetail.order_id.order_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{rdhsreqorderdetail.sr_no.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{rdhsreqorderdetail.quantity}</td>
        <td style={{whiteSpace: 'nowrap'}}>{rdhsreqorderdetail.order_id.m_store_id.m_store_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>
              {rdhsreqorderdetail.can_supply_status===1?
                <Badge color="success">Available</Badge>
            :<Badge color="danger">Not Available</Badge>}
        </td>
      <td style={{whiteSpace: 'nowrap'}}>
      {rdhsreqorderdetail.can_supply_status===1?    
      <Button id = {rdhsreqorderdetail.id} block outline color="info" onClick= {this.toggleModal}>Supply Order</Button>               
            : <Button block outline color="info" disabled>Supply Order</Button>}    
      </td>
      </tr>
    });

    const groupList1 = rdhsreqorderdetailssupplied.map(rdhsreqorderdetailssupplie => {
      return <tr key={rdhsreqorderdetailssupplie.id}>
        <td style={{whiteSpace: 'nowrap'}}>{rdhsreqorderdetailssupplie.order_id.order_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{rdhsreqorderdetailssupplie.sr_no.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{rdhsreqorderdetailssupplie.quantity}</td>
        <td style={{whiteSpace: 'nowrap'}}>{rdhsreqorderdetailssupplie.order_id.m_store_id.m_store_id}</td>
      <td style={{whiteSpace: 'nowrap'}}>
              {rdhsreqorderdetailssupplie.supply_status===1?
                <Badge color="success">Supplied</Badge>
            :<Badge color="danger">Not Supplied</Badge>}
        </td>
      </tr>
    });
    
    const {shouldShowModal, modalOrderId} = this.state;
    console.log("shouldShowModal: "+ shouldShowModal);
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Damage Stock
              </CardHeader>
              <CardBody>                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th>Order ID</th>
                    <th>Medicine</th>
                    <th>Quantity</th>
                    <th>Ministry store ID</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  {groupList}
                  </tbody>
                </Table>
                <Button block outline color="info" tag={Link} to="/ministry/directhospitalreqorder">Go Back</Button> 
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{borderRadius:'20px'}}>
              <CardHeader style={{backgroundColor:'#1b8eb7',color:'white',borderRadius:'5px'}}>
                Order Details From RDHS
              </CardHeader>
              <Row>
                <Col md="10">
                </Col>
                <Col md="2">
                <Button block outline color="info" tag={Link} to="/ministry/rdhsreqorder">Go Back</Button> 

                </Col>
              </Row>
              <CardBody>                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead style={{backgroundColor:'#244EAD', color:'white',borderRadius:'20px !important'}}>
                  <tr>
                    <th>Order ID</th>
                    <th>Medicine</th>
                    <th>Quantity</th>
                    <th>Ministry store ID</th>
                    <th>Supply Status</th>
                  </tr>
                  </thead>
                  <tbody>
                  {groupList1}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {shouldShowModal ? <SupplyToRdhsModel 
          orderId = {modalOrderId}
         toggle={this.toggleModal} shouldShowModal = {shouldShowModal}/> : null}
      </div>
    );
  }
}

export default DHReqOrderDetail;
