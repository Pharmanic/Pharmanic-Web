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
            nqty:'',
            currentStock:[],
            qty:'',
            batch:[],
            stockId:'',
            retun:[]
         }

         this.state.returned_id=localStorage.getItem('returnedId');
         console.log('local storage',localStorage.getItem('returnedId'));
         console.log('returnId',this.state.returned_id);
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }


    async componentDidMount(){
      fetch('/api/rhstock')
      .then(response => response.json())
      .then(data => this.setState({currentStock: data}));

      fetch('/api/rhreturndrug')
      .then(response => response.json())
      .then(data => this.setState({retun: data}));

         fetch('/api/returnValCart/'+this.state.returned_id)
         .then(response => response.json())
         .then(data => this.setState({returnCart: data,isLoading:false}));
     
    }


    handleChange(event) {
     const target = event.target;
      const value = target.value; 
    //  const name = target.name;
      this.state.nqty=value;
     
      
      }

      async handleSubmit(event) {
        event.preventDefault();
        const nq=this.state.nqty;
        const cq=this.state.cqty;
        const aq=this.state.aqty;
        const def=nq-cq;
        if(def > 0){
          console.log('if running');
          console.log('1st',this.state.aqty);
          console.log('nq',nq);
          console.log('cq',cq);
          
          console.log('difference',def);
          const a1=aq-def;
          console.log('a1',a1);
          this.state.aqty =a1;
          console.log('2nd',this.state.aqty);
         
        }else{
          console.log('1st',this.state.aqty);
          console.log('nq',nq);
          console.log('cq',cq);
       //   const def=cq-nq;
          console.log('difference',def);
          const a1=aq-def;

          console.log('a1',a1);
          this.state.aqty =a1;
          console.log('2nd',this.state.aqty);
         
        }
        const store=this.state.currentStock;
        console.log('store',store);

        const stockId=this.state.stockId;
        console.log('stockid',stockId);
        const currentstock = store.find(mcs => mcs.stockId==stockId);
        console.log('current stock',currentstock);
        this.state.batch=currentstock;
        console.log(this.state.batch);
       this.state.batch.quantity=this.state.aqty;

        const id=this.state.batch.stockId;
        let batchee = {...this.state.batch};
        await fetch('/api/rhstock/'+id, {
          method:'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          
          body: JSON.stringify(batchee),
        });

        const returnCart = {...this.state.returnCart};
        console.log('final return cart',returnCart);
      //  returnCart['rdhs_hospital_current_stock']=this.state.batch;
       // returnCart['quantity']=this.state.nqty;
       // returnCart['returnedId']=this.state.returnCart.returnedId;
        //returnCart['date']=this.state.returnCart.date;
       // this.state.returnCart.rdhs_hospital_current_stock=this.state.batch;
       /// this.state.returnCart.quantity=this.state.nqty;
       // console.log('returncart',returnCart['rdhs_hospital_current_stock']);
       // console.log('access',returnCart);

     //   this.state.returnCart['rdhs_hospital_current_stock']=this.state.batch;
      //  this.state.returnCart['quantity']=this.state.nqty;

      const store1=this.state.retun;
      const returnedId=this.state.returned_id;
      console.log('stockid',stockId);
      const currentstock1 = store1.find(mcs => mcs.returnedId==returnedId);
      currentstock1['quantity']=this.state.nqty;
      currentstock1['rdhs_hospital_current_stock']=this.state.batch;
        console.log('cstocuck1',currentstock1);
        await fetch('/api/updatereturn/'+returnedId, {
          method:'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          
          body: JSON.stringify(currentstock1),
          
        });


      }
    render() { 

      const {returnCart} =this.state;

   this.state.stockId = returnCart.map((number) =>number.rdhs_hospital_current_stock.stockId);
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
                    <Form  onSubmit={this.handleSubmit} method="PUT" encType="multipart/form-data" className="form-horizontal">                      
                    
                    <FormGroup row>
                        <Col md="5">
                        <b><Label htmlFor="text-input">Update Return Quantity</Label></b>  
                        </Col>
                        <Col xs="12" md="7">
                        <b> <Input type="text" id="quantity" name="quantity" placeholder={this.state.cqty} onChange={this.handleChange}></Input></b> 
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