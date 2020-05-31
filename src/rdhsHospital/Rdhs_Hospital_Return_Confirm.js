import React, { Component } from 'react';
import {Container,Input,Button,Label,Form,FormGroup,Table, Card,
    CardBody, Row,
    CardFooter,
    CardHeader,
    Col,} from 'reactstrap';
import { Link } from 'react-router-dom';

class Rdhs_Hospital_Return_Confirm extends Component {

  emptyItem = {
    returned_id:'',
    date:new Date(),
    quantity:'',
    state:0,
    rdhs_hospital_current_stock:{batch_id:localStorage.getItem('batch_id')},
   // batch_id:localStorage.getItem.toString('batch_id'),
    track_id:''
  };
    constructor(props) {
        super(props);
  
        this.state = { 
            batchId:'',
            sr_no:'',
            name:'',
            qty:'',
            expiredate:'',
            disabled:true,
            value:'',
            item:this.emptyItem
         }
         this.state.item['batch_id']=localStorage.getItem('batch_id');
         this.emptyItem['batch_id']=localStorage.getItem('batch_id');
         this.state.batchId=localStorage.getItem('batch_id');
         this.state.sr_no=localStorage.getItem('sr_no');
         this.state.name=localStorage.getItem('name');
         this.state.qty=localStorage.getItem('quantity');
         this.state.expiredate=localStorage.getItem('expire');
       //  this.state.item['batch_id']=localStorage.getItem('batch_id');
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
        
       
   
    }

    handleChange(event) {
      const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    let update={
      date:new Date(),
      quantity:value,
      state:0,
      reg_no:localStorage.getItem('reg_no'),
      batch_id:localStorage.getItem.toString('batch_id'),
      track_id:''
    }
    
    this.setState({item:update});
    }

    async handleSubmit(event) {
      
      this.state.item['reg_no'] = this.state.batchId;
      
      event.preventDefault();
      const {item} = this.state;
  
      await fetch('/api/rhreturndrugs', {
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item),
      });
     // this.props.history.push('/exportedstocks');
    }
     
    render() {    
     // const {item} = this.state.item;
      this.state.item['batch_id']=localStorage.getItem('batch_id');

        return ( 
        
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
                          <Input type="text" id="batch_id" name="batch_id" value={this.state.batchId}  readonly="true"/>
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
                          <Input type="text" id="quantity" name="quantity" placeholder="Enter Return Quantity" onChange={this.handleChange}/>
                          
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