import React, { Component } from 'react';
import {Container,Input,Button,Label,Form,FormGroup,Table, Card,
    CardBody, Row,
    CardFooter,
    CardHeader,
    Col,} from 'reactstrap';
import { Link } from 'react-router-dom';


class Rdhs_Hospital_Return_Confirm extends Component {


    emptyList= {
        returned_id:'',
        date:new Date(),
        quantity:'',
        state:0,
       
        reg_no:[],
        stockId:[],
          track_id:''
      };

    constructor(props) {
        super(props);
        this.state = { 
            item:this.emptyList,
            batchId:'',
            srNo:'',
            name:'',
            expireDate:'',
            avaibleQuantity:'',
            regNO:'',
            isLoading:true,
            currentStock:[],
            rdhss:[],
            batches:[],
            stockId:'',
            updateStcok:[],
            qty:''
         }
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.state.stockId=localStorage.getItem('stockId');
         console.log(this.state.stock_id);
        this.state.batchId=localStorage.getItem('batchNo');
        this.state.srNo=localStorage.getItem('sr_no');
        this.state.name=localStorage.getItem('name');
        this.state.expireDate=localStorage.getItem('expire');
        this.state.avaibleQuantity=localStorage.getItem('quantity');
        this.state.regNO=localStorage.getItem('reg_no');
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('/api/rhstock')
          .then(response => response.json())
          .then(data => this.setState({currentStock: data}));
          console.log('currentstock1',this.state.currentStock);
       
          fetch('/hospitalsByRdhs')
        .then(response => response.json())
        .then(data => this.setState({rdhss: data}));
      }
    handleChange(event) {
      console.log('currentstock1',this.state.currentStock);
     const target = event.target;
      const value = target.value; 
      const name = target.name;
      this.state.qty=value;
      let item = {...this.state.item};  
        item[name] = value;
        this.setState({item});
      
      }

      async handleSubmit(event) {
        event.preventDefault();
        
        const stockId=this.state.stockId;
        const rdh=this.state.rdhss;
        const store=this.state.currentStock;
        console.log('store',store);
        const currentstock = store.find(mcs => mcs.stockId==stockId);
        this.state.batches=currentstock;
        console.log('current stock',currentstock);

        const id=this.state.batches.stockId;
        const q1=currentstock.quantity;
        const q2=this.state.qty;
       const nqty=q1-q2;
       this.state.batches.quantity=nqty;

       
        let batchee = {...this.state.batches};
        await fetch('/api/rhstock/'+id, {
          method:'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          
          body: JSON.stringify(batchee),
        });

      
        const reg_no=this.state.regNO;
        const rdhses = rdh.find(mcs => mcs.reg_no==reg_no);
        this.state.rdhss=rdhses;


        

        let item = {...this.state.item};
        item['stockId']=this.state.batches;
        console.log('batch',this.state.batches);
        item['reg_no']=this.state.rdhss;
        this.setState({item});



        await fetch('/api/returndtock', {
            method:'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(item),
          }); 

          window.location.replace("/#/rhexpire");


      }



    render() { 
        return ( 
            <div className="animated fadeIn">        
            <Row>
              <Col xs="12" md="6">
                <Card>
                  <CardHeader>
                    <strong>Add to Return Cart</strong> 
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={this.handleSubmit} method="POST" encType="multipart/form-data" className="form-horizontal">                      
                    <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="select">Batch ID</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" name="batch_id" id="batch_id"  value={this.state.batchId} disabled="true"/>                                            
                          
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">SR Number</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="sr_no" name="sr_no"  value={this.state.srNo}/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Name</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="name" name="name"  value={this.state.name}/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Expire Date</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="expire" name="expire"  value={this.state.expireDate}/>
                        </Col>
                      </FormGroup>
                    
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Available Quantity</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="availableqty" name="availableqty"  value={this.state.avaibleQuantity}/>
 
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Enter Return Quantity</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="quantity" name="quantity" placeholder="Enter Return Quantity"  onChange={this.handleChange}></Input>
                        </Col>
                      </FormGroup> 
                     
                      <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
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
 
export default Rdhs_Hospital_Return_Confirm;