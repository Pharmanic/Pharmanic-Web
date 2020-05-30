import React, { Component } from 'react';
import {Container,Input,Button,Label,Form,FormGroup,Table, Card,
    CardBody, Row,
    CardFooter,
    CardHeader,
    Col,} from 'reactstrap';
import { Link } from 'react-router-dom';

class Rdhs_Hospital_Return_Confirm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            batchId:'',
            sr_no:'',
            name:'',
            qty:'',
            expiredate:''
         }
         this.state.batchId=localStorage.getItem('batch_id');
         this.state.sr_no=localStorage.getItem('sr_no');
         this.state.name=localStorage.getItem('name');
         this.state.qty=localStorage.getItem('quantity');
         this.state.expiredate=localStorage.getItem('expire');
        
  //       document.getElementById('available_qty').value="aggs";

    }
    render() { 
        //document.getElementById('sr_no').value=this.state.sr_no;
        return ( 
            //document.getElementById('sr_no').value=''+this.state.sr_no;
           // document.getElementById('available_qty').value="aggs"
            <div className="animated fadeIn">
                
        
            <Row>
              <Col xs="15" md="8">
                <Card>
                  <CardHeader>
                    <strong>Enter return Quantity If you want</strong> 
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal">           
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Batch ID</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="batch_id" name="batch_id" value={this.state.batchId} disabled="true"/>
                        </Col>
                       
                          
                            
                          
                        
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">SR Number</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="sr_no" name="sr_no" value={this.state.sr_no} disabled="true"></Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Name</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="name" name="name" value={this.state.name} disabled="true"/>
                        </Col>
                      </FormGroup>
                     
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Expire Date</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="expiredate" name="expiredate" value={this.state.expiredate} disabled="true"/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                      <Col md="3">
                          <Label htmlFor="text-input">Available Quantity</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="available_qty" name="available_qty" value={this.state.qty} disabled="true"/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Enter Return Quantity</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="r_quantity" name="r_quantity" placeholder="Enter Return Quantity" />
                          
                        </Col>
                        
                      </FormGroup>
                      <FormGroup>
                        <Button color="success" type="submit">Enter Return Cart</Button>{' '}
                        <Button color="primary" tag={Link} to="/directhospitals">Cancel</Button>
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
 
export default Rdhs_Hospital_Return_Confirm;