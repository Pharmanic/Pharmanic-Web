import React, { Component } from 'react';
import {Container,Input,Button,Label,Form,FormGroup,Table, Card,
    CardBody, Row,
    CardFooter,
    CardHeader,
    Col,} from 'reactstrap';
import { Link } from 'react-router-dom';


class Rdhs_Hospital_Order_Form extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      sr_no:'',
      medicine:[],
      isLoading:'',
      name:'',
      availqty:''
     }
     this.state.sr_no=localStorage.getItem('sr_no');
     this.state.name=localStorage.getItem('name');
     this.state.availqty=localStorage.getItem('quantity');
  }
  async componentDidMount(){
    const response= await fetch('/medicines'+this.state.sr_no);
    const body=await response.json();
    this.setState({medicine:body, isLoading:true});
    //alert(this.state.id);
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
                    <Input type="text" id="quantity" name="quantity" placeholder="Enter Order Quantity"  onChange={this.handleChange}></Input>
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