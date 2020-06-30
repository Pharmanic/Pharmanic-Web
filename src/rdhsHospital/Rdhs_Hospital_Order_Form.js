import React, { Component } from 'react';
import {Container,Input,Button,Label,Form,FormGroup,Table, Card,
    CardBody, Row,
    CardFooter,
    CardHeader,
    Col,} from 'reactstrap';
import { Link } from 'react-router-dom';


class Rdhs_Hospital_Order_Form extends Component {

  emptyList= {
    cartId:'',
   qty:'',
   state:'',
    hospital_by_rdhs:[],
    medicine:[]
  };

  constructor(props) {
    super(props);
    this.state = { 
      sr_no:'',
      medicine:[],
      isLoading:'',
      name:'',
      availqty:'',
      orqty:'',
      item:this.emptyList,
      reg_no:'',
      hospital:[],
      cart:[]
     }
    
     this.state.sr_no=localStorage.getItem('sr_no');
     this.state.name=localStorage.getItem('name');
     this.state.availqty=localStorage.getItem('quantity');
     this.state.reg_no=localStorage.getItem('reg_no');
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount(){
  
    this.setState({isLoading: true});
    fetch('/medicines/'+this.state.sr_no)
      .then(response => response.json())
      .then(data => this.setState({medicine: data}));
      
      fetch('/rhRequestOrder/getOrderCart')
        .then(response => response.json())
        .then(data => this.setState({cart: data}));
   
      fetch('/hospitalByRdhs/'+this.state.reg_no)
    .then(response => response.json())
    .then(data => this.setState({hospital: data,isLoading:true}));

    console.log(this.state.hospital);


}
handleChange(event) { 
  event.preventDefault();
  console.log('reg'+this.state.reg_no);
  console.log(this.state.hospital);

 const target = event.target;
  const value = target.value; 
  const name = target.name;
  this.state.orqty=value;
  let item = {...this.state.item};  
        item[name] = value;
        item['medicine']=this.state.medicine;
        item['hospital_by_rdhs']=this.state.hospital;
        this.setState({item});
  
  }
  async handleSubmit(event) {
    event.preventDefault();
    let item = {...this.state.item};
    const sto=this.state.cart;
    
    if(sto.find(mcs => mcs.medicine.sr_no==this.state.sr_no)){
      console.log('If statement');
        const currentcart=sto.find(mcs => mcs.medicine.sr_no==this.state.sr_no);
        console.log('current cart : ',currentcart);
        const q3=parseInt(currentcart.qty)+parseInt(this.state.orqty); 
        const cartId=currentcart.cartId;
        console.log(currentcart);
        console.log('cart_id',currentcart.cartId);
        console.log(q3);
        item['qty'] = q3;
        item['medicine']=this.state.medicine;
        item['hospital_by_rdhs']=this.state.hospital;
        item['cartId']=cartId;
        this.setState({item});
        console.log(cartId);
        await fetch('/rhRequestOrder/updateCart/'+cartId, {
          method:'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          
          body: JSON.stringify(item),
        });


       
    }else{
      console.log('else statement');
      item['medicine']=this.state.medicine;
    item['hospital_by_rdhs']=this.state.hospital;

    this.setState({item});
    await fetch('/rhRequestOrder/addToOrderCart', {
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(item),
      }); 
    }
    
   
      window.location.replace("/#/rhexpire");
  }

  render() { 
    return (
      <div className="animated fadeIn">        
      <Row>
        <Col xs="12" md="6">
          <Card>
            <CardHeader>
              <strong>Add to Order Cart</strong> 
            </CardHeader>
            <CardBody>
              <Form onSubmit={this.handleSubmit} method="POST" encType="multipart/form-data" className="form-horizontal">                      
              <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="select">SR Number</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" name="sr_no" id="sr_no"  value={this.state.sr_no} disabled="true"/>                                            
                    
                  </Col>
                </FormGroup>
          
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Name</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="name" name="name"  value={this.state.name} disabled="true"/>
                  </Col>
                </FormGroup>
            
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Available Quantity</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="availableqty" name="availableqty"  value={this.state.availqty} disabled="true"/>

                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Enter Return Quantity</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="text" id="qty" name="qty" placeholder="Enter Order Quantity"  onChange={this.handleChange}></Input>
                  </Col>
                </FormGroup> 
               
                <FormGroup>
                  <Button color="primary" type="submit">Submit</Button>{' '}
                  <Button color="secondary" tag={Link} to="/rhexpire">Cancel</Button>
                 </FormGroup>
              </Form>
            </CardBody>
            
          </Card>           
        </Col>
      </Row>
    </div>

      );
  }
}
 
export default Rdhs_Hospital_Order_Form;