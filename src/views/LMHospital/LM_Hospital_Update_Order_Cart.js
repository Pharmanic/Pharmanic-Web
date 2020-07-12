import React, { Component } from 'react';
import {Input, Button, Label, Form, FormGroup, Table, Card, CardBody, Row, CardHeader, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

class LM_Hospital_Update_Order_Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cartId:'',
      cart:[],
      medicine:[],
      sr:'',
      name:'',
      qty:''
    }
    this.state.cartId=localStorage.getItem('orderCartId');
    this.state.sr=localStorage.getItem('sr');
    this.state.name=localStorage.getItem('name');
    this.state.qty=localStorage.getItem('qty');
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
      const response= await fetch('/dhRequestOrder/cartOrder/'+this.state.cartId);
      const body=await response.json();
      this.setState({cart:body, isLoading:false});
    }

    handleChange(event) {
      const target = event.target;
      const value = target.value; 
      this.state.qty=target.value;
    }
  
    async handleSubmit(event){
      var result=window.confirm("Are you sure want to update?");
      if(result){
        event.preventDefault();
        let cart = {...this.state.cart};
        cart['qty']=this.state.qty;
        this.setState({cart});
        await fetch('/dhRequestOrder/updateCart/'+this.state.cartId, {
          method:'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        
          body: JSON.stringify(cart),
        });
        alert('Updated sucessfully..')
        window.location.replace("/#/dhordercart");
      } else {
      } 
    }
    
    render() { 
      const {cart}=this.state;
      console.log(cart);
      console.log(cart.medicine);

      return ( 
        <div className="animated fadeIn">        
          <Row>
            <Col xs="10" md="10">
              <Card>
                <CardHeader>
                  <strong>Update Order Quantity</strong> 
                </CardHeader>
                <CardBody>
                  <Form  onSubmit={this.handleSubmit} method="PUT" encType="multipart/form-data" className="form-horizontal">                      
                    <FormGroup row>
                      <Col md="5">
                        <Label htmlFor="text-input">SR Number</Label>
                      </Col>
                      <Col xs="12" md="7">
                        <Input type="text" id="sr_no" name="sr_no" value={this.state.sr} disabled="true"/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="5">
                        <Label htmlFor="text-input">Name</Label>
                      </Col>
                      <Col xs="12" md="7">
                        <Input type="text" id="name" name="name" value={this.state.name} disabled="true"/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="5">
                        <Label htmlFor="text-input">Order Quantity</Label>
                      </Col>
                      <Col xs="12" md="7">
                        <Input type="text" id="availableqty" name="availableqty" placeholder={this.state.qty} onChange={this.handleChange}/>

                      </Col>
                    </FormGroup>
                    <FormGroup>
                        <Button color="danger" type="submit">Update</Button>{' '}
                        <Button color="primary" tag={Link} to="/dhordercart">Cancel</Button>
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
 
export default LM_Hospital_Update_Order_Cart;