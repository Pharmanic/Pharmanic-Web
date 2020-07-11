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
class SupplyToDHModel extends Component {

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

    emptyStore={
      m_store_id:'',
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
      ministrystores: [],
      isLoading: true,
      medicines: [],
      ministrycurrentstocks:[],
      medicine:this.emptyMedicine,
      store:this.emptyStore,
      ministrytracks:[],
      dhreqorderdetails: [], 
      danger: false,modal: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({isLoading: true});
      const {orderId} = this.props;
      fetch('/ministrytracks')
      .then(response => response.json())
      .then(data => this.setState({ministrytracks: data, isLoading: false}));

      fetch(`/dhreqorderdetail/${orderId}`)
      .then(response => response.json())
      .then(data => this.setState({dhreqorderdetails: data, isLoading: false}));

  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    console.log('value',value);
    const name = target.name;
    console.log('name',name);
    console.log('fguwef');
    let item = {...this.state.item};
     if(name=='track_id'){
      const ministrytracks=this.state.ministrytracks;
      console.log('ministrytracks',ministrytracks);
      const ministrytrack = ministrytracks.find(mt => mt.track_id==target.value);
      console.log('ministrytrack',ministrytrack);
      item[name]=ministrytrack;
      this.setState({item});
      console.log('item',item);
    }else if(name=='request_id'){
      const dhreqorderdetails=this.state.dhreqorderdetails;
      console.log('dhreqorderdetails',dhreqorderdetails);
      item[name]=dhreqorderdetails;
      this.setState({item});
      console.log('item',item);
    }else{
      const order=this.state.dhreqorderdetails;
      item[name] = order;
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
    const {item,ministrycurrentstocks,ministrytracks,dhreqorderdetails} = this.state;
    const title = <h2>{'Add Group'}</h2>;
   
   
    const trackList = ministrytracks.map(ministrytrack => {
      return <option 
                key={ministrytrack.track_id} 
           
           value={ministrytrack.track_id}>
            {ministrytrack.destination}
            </option>
    });

    // const orderList = dhreqorderdetails.map(dhreqorderdetail => {
    //   return <option 
    //             key={dhreqorderdetail.id} 
    //             value={dhreqorderdetail.id}>
    //         {dhreqorderdetail.id}
    //         </option>
    // });

    // console.log(this.props.toggleModal);
    return (
      <div className="animated fadeIn">        
          <Modal isOpen={this.props.shouldShowModal} toggle={this.props.toggle}
                    className={'modal-danger '}>
          <ModalHeader toggle={this.props.toggle}>Accept request from Line ministry hospital</ModalHeader>
          <ModalBody>
            <Card>
              <CardHeader>
                <strong>Accept Request Form</strong> Form
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal">                      
                <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Diliver Track</Label>
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
                      <option>Select Request ID</option>
                            <option value={dhreqorderdetails.id}> {dhreqorderdetails.id}</option>
                                                                        
                      </Input>           
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" tag={Link} to="/ministrycurrentstocks">Cancel</Button>
                   </FormGroup>
                </Form>
              </CardBody>
              
            </Card> 
            </ModalBody>
            </Modal>          
      </div>
    );
  }
}

export default SupplyToDHModel;
