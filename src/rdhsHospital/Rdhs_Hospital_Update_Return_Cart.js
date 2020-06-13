import React, { Component } from 'react';
import {Container,Input,Button,Label,Form,FormGroup,Table, Card,
  CardBody, Row,
  CardFooter,
  CardHeader,
  Col,InputGroup} from 'reactstrap';
import { Link } from 'react-router-dom';

class Rdhs_Hospital_Update_Return_Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            returnCart:[],
            cqty:'',
            returned_id:'',
            batchId:'',
            srNo:'',
            name:'',
            expire:'',
            aqty:'',
            cqty:'',
            nqty:''
         }

         this.state.returned_id=localStorage.getItem('returnedId');
    }


    async componentDidMount(){
        const response= await fetch('/api/returnValCart/'+this.state.returned_id);
        const body=await response.json();
        this.setState({returnCart:body, isLoading:false});

        
        //alert(this.state.id);
       
    }


    render() { 

      const {returnCart} =this.state;

        
      this.state.batchId = returnCart.map((number) =>number.rdhs_hospital_current_stock.batchNo);
      this.state.srNo=returnCart.map((number) =>number.rdhs_hospital_current_stock.medicine.sr_no);
      this.state.name=returnCart.map((number) =>number.rdhs_hospital_current_stock.medicine.name);
      this.state.expire=returnCart.map((number) =>number.rdhs_hospital_current_stock.expiredate);
      this.state.aqty=returnCart.map((number) =>number.rdhs_hospital_current_stock.quantity);
      this.state.cqty=returnCart.map((number) =>number.quantity);
     
      console.log(this.state.returnCart);

        return ( 
          
            <div className="animated fadeIn">        
            <Row>
              <Col xs="10" md="10">
                <Card>
                  <CardHeader>
                    <strong>Update Return Quantity</strong> 
                  </CardHeader>
                  <CardBody>
                    <Form  method="PUT" encType="multipart/form-data" className="form-horizontal">                      
                    
                    <FormGroup row>
                        <Col md="5">
                        <b><Label htmlFor="text-input">Update Return Quantity</Label></b>  
                        </Col>
                        <Col xs="12" md="7">
                        <b> <Input type="text" id="quantity" name="quantity" placeholder={this.state.cqty} ></Input></b> 
                        </Col>
                      </FormGroup> 
                      <FormGroup row>
                        <Col md="5">
                          <Label htmlFor="text-input">Available Quantity</Label>
                        </Col>
                        <Col xs="12" md="7">
                          <Input type="text" id="availableqty" name="availableqty" value={this.state.aqty} disabled="true" />
 
                        </Col>
                      </FormGroup>
                    <FormGroup row>
                        <Col md="5">
                          <Label htmlFor="select">Batch ID</Label>
                        </Col>
                        <Col xs="12" md="7">
                          <Input type="text" name="batch_id" id="batch_id" value={this.state.batchId} disabled="true"/>                                            
                          
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="5">
                          <Label htmlFor="text-input">SR Number</Label>
                        </Col>
                        <Col xs="12" md="7">
                          <Input type="text" id="sr_no" name="sr_no" value={this.state.srNo} disabled="true"/>
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
                          <Label htmlFor="text-input">Expire Date</Label>
                        </Col>
                        <Col xs="12" md="7">
                          <Input type="text" id="expire" name="expire" value={this.state.expire} disabled="true"/>
                        </Col>
                      </FormGroup>
                    
                      
                     
                     
                      <FormGroup>
                        <Button color="danger" type="submit">Update</Button>{' '}
                        <Button color="primary" tag={Link} to="/rhexpire">Cancel</Button>
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
 
export default Rdhs_Hospital_Update_Return_Cart;