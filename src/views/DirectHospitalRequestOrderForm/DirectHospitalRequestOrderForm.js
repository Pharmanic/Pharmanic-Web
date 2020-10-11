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
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
class DirectHospitalRequestOrderForm extends Component {

    emptyItem = {
      date: '',
        quantity:'',
        reason:'',
        batch_id:{
          batch_id:'',
          expire_date: '',
          name: '',
          available_quantity: '',
          import_quantity:'0',
          supplyed_quantity:'0',
          damage_quantity:'0',
          m_store_id:{
            m_store_id:'',
            location:''
          },
          sr_no: {
            sr_no:'',
            description:'',
            name:'',
            side_effect:''         
          },
          stock_id:{
            stock_id:'',
            export_date:'',
            order_date:''
          }
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
      store:this.emptyStore
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({isLoading: true});
    fetch('/ministrystores')
      .then(response => response.json())
      .then(data => this.setState({ministrystores: data}));

      fetch('/medicines')
      .then(response => response.json())
      .then(data => this.setState({medicines: data, isLoading: false}));

      fetch('/ministrycurrentstocks')
      .then(response => response.json())
      .then(data => this.setState({ministrycurrentstocks: data, isLoading: false}));

  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    console.log('value',value);
    const name = target.name;
    console.log('name',name);
    let item = {...this.state.item};
     if(name=='batch_id'){
      const ministrycurrentstocks=this.state.ministrycurrentstocks;
      console.log('ministrycurrentstocks',ministrycurrentstocks);
      const ministrycurrentstock = ministrycurrentstocks.find(mcs => mcs.batch_id==target.value);
      console.log('ministrycurrentstock',ministrycurrentstock);
      item[name]=ministrycurrentstock;
      this.setState({item});
      console.log('item',item);
    }else{
      item[name] = value;
      this.setState({item});
      console.log('item',item);
    }
   
  }

  // handleSelect(event){
  //   const target = event.target;
  //   const value = target.value;
  //   const ministrystores= state.ministrystores;
  //   console.log('stores',ministrystores);
  //   const store = ministrystores.find(ms => ms.m_store_id==target.value);
  //   const name = target.name;
  //   let item = {...this.state.item};
  //   item[name] = value;
  //   this.setState({item});
  // }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;
    console.log('object content',item);
    await fetch('/ministrydamagestock/add', {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    //this.props.history.push('/ministrydamagestocks');
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    const {item,ministrycurrentstocks} = this.state;
    const title = <h2>{'Add Group'}</h2>;
   
    const batchList = ministrycurrentstocks.map(ministrycurrentstock => {
      return <option 
                key={ministrycurrentstock.batch_id} 
                value={ministrycurrentstock.batch_id}>
            {ministrycurrentstock.batch_id}
            </option>
    });

    return (
      <div className="animated fadeIn">        
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Order Drugs
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal">                      
                <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Order ID</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="batch_id" id="batch_id"  value={item.batch_id.batch_id|| ''} onChange={this.handleChange} >
                            <option>Select a batch</option>
                            {batchList}                                              
                      </Input>
                     
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Date</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="date" name="date" placeholder=" Date" value={item.date|| ''}
                            onChange={this.handleChange} autoComplete="date"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Quantity</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="quantity" name="quantity" placeholder="quantity" value={item.quantity|| ''}
                            onChange={this.handleChange} autoComplete="quantity"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Reason</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="reason" name="reason" placeholder="reason" value={item.reason|| ''}
                            onChange={this.handleChange} autoComplete="reason"/>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Button size="sm" color="primary" type="submit"><i className="fa fa-dot-circle-o"></i>Place Order</Button>{' '}
                    <Button size="sm" color="danger" >Cancel</Button>
                   </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>           
          </Col>
        </Row>
      </div>
    );
  }
}

export default DirectHospitalRequestOrderForm;
