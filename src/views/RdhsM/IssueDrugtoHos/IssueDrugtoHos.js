import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
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
  Row,
  Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
class IssueDrugtoHos extends Component {

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
            telephone:''
        },
        r_store_id:{
            r_store_id:'',
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
    can_supply_status:'',
    supply_status:''
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

    emptyStore={
      r_store_id:'',
      location:''
    }

    emptyMedicine={
      sr_no:'',
      description:'',
      name:'',
      side_effect:''
    }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      item:this.emptyItem,
      collapse: true,
      fadeIn: true,
      timeout: 300,
      rdhsstores: [],
      isLoading: true,
      medicines: [],
      rdhscurrentstocks:[],
      medicine:this.emptyMedicine,
      store:this.emptyStore,
      rdhstracks:[],
      hosreqorderdetail: [], 
      danger: false,modal: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({isLoading: true});
      const {orderId} = this.props;
      fetch('/rdhstracks')
      .then(response => response.json())
      .then(data => this.setState({ministrytracks: data, isLoading: false}));

      fetch(`/hosreqorderdetail/${orderId}`)
      .then(response => response.json())
      .then(data => this.setState({rdhsreqorderdetail: data, isLoading: false}));

  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    console.log('value',value);
    const name = target.name;
    console.log('name',name);
    let item = {...this.state.item};
     if(name=='track_id'){
      const rdhstracks=this.state.rdhstracks;
      console.log('rdhstracks',rdhstracks);
      const rdhstrack = rdhstracks.find(mt => mt.track_id==target.value);
      console.log('rdhstrack',rdhstrack);
      item[name]=rdhstrack;
      this.setState({item});
      console.log('item',item);
    }else if(name=='request_id'){
      const hosreqorderdetail=this.state.hosreqorderdetail;
      console.log('hosreqorderdetail',hosreqorderdetail);
      item[name]=hosreqorderdetail;
      this.setState({item});
      console.log('item',item);
    }else{
      const order=this.state.hosreqorderdetails;
      item[name] = order;
      this.setState({item});
      console.log('item',item);
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;
    console.log('object content',item);
    await fetch('/supplyordertohos/add', {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.setState({ collapse: false });
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleDanger() {
    this.setState({
      danger: !this.state.danger,
    });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    const {item,rdhscurrentstocks,rdhstracks,hosreqorderdetail} = this.state;
    const title = <h2>{'Add Group'}</h2>;
   
   
    const trackList = rdhstracks.map(rdhstrack => {
      return <option 
                key={rdhstrack.track_id} 
           
           value={rdhstrack.track_id}>
            {rdhstrack.destination}
            </option>
    });

    return (
      <div className="animated fadeIn">        
          <Modal isOpen={this.props.shouldShowModal} toggle={this.props.toggle}
                    className={'modal-danger '}>
          <ModalHeader toggle={this.props.toggle}>Accept request from Hospital</ModalHeader>
          <ModalBody>
            <Card>
              <CardHeader>
                <strong>Issue Drug</strong> Form
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal">                      
                <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Batch ID</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="track_id" id="track_id"  value={item.track_id.track_id|| ''} onChange={this.handleChange} >
                            <option>Select a Track</option>
                            {trackList}                                             
                      </Input>   
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Request ID</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="request_id" id="request_id"  value={item.request_id.id|| ''} onChange={this.handleChange} >
                            <option value={hosreqorderdetail.id}> {hosreqorderdetail.id}</option>
                                                                        
                      </Input>           
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary">Cancel</Button>
                   </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card> 
            </ModalBody>
            </Modal>          
      </div>
    );
  }
}

export default IssueDrugtoHos;
