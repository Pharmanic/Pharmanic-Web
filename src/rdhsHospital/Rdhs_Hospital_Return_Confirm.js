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
    batchId:[],
    track_id:''
};
    emptyItem={
        returned_id:'',
        date:new Date(),
        quantity:'',
        state:0,
    
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
            batches:[],
            rdhss:[],
            track:[]
            
         }
         this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
         this.state.batchId=localStorage.getItem('batch_id');
         this.state.srNo=localStorage.getItem('sr_no');
         this.state.name=localStorage.getItem('name');
         this.state.expireDate=localStorage.getItem('expire');
         this.state.avaibleQuantity=localStorage.getItem('quantity');
         this.state.regNO=localStorage.getItem('reg_no')
         
    }
    componentDidMount() {
      this.setState({isLoading: true});
      fetch('/api/rhstock')
        .then(response => response.json())
        .then(data => this.setState({currentStock: data}));
     
        fetch('/hospital_by_rdhs/hospital_by_rdhs_list')
      .then(response => response.json())
      .then(data => this.setState({rdhss: data}));

      fetch('/api/alltrack')
      .then(response => response.json())
      .then(data => this.setState({track: data, isLoading: false}));
    
  
  
  
    }
  
    handleChange(event) {
      const target = event.target;
    const value = target.value;
    console.log('value',value);
    const name = target.name;
    console.log('name',name);
    let item = {...this.state.item};  
   
      item[name] = value;
      this.setState({item});
      console.log('item',item);
    

    }

    async handleSubmit(event) {

      const batch_id=this.state.batchId;
      const reg_no=this.state.regNO;
      
    
        const store=this.state.currentStock;
        const batch=this.state.batches;
        const rdh=this.state.rdhss;

        const currentstock = store.find(mcs => mcs.batchId==batch_id);
        this.state.batches=currentstock;

        const qty=currentstock.quantity;
        console.log('quantity',qty);
        const q1=this.state.item.quantity;
        console.log('quantity2',q1);
        const q2=qty-q1;
        console.log('quantity3',q2);
        this.state.batches.quantity=q2;
        console.log('quantity3',this.state.batches.quantity);

        const rdhses = rdh.find(mcs => mcs.reg_no==reg_no);
        this.state.rdhss=rdhses;

        let item = {...this.state.item};
        item['batchId']=this.state.batches;
        item['reg_no']=this.state.rdhss;
        this.setState({item});
        console.log('setitem',item);


      const id=this.state.batches.batchId;
      console.log("id",id);

      // this.setItem();
        event.preventDefault();
      //  const {item} = this.state;
      //  console.log('item',item);
     
      let batchee = {...this.state.batches};
      console.log('batch1',batchee);
      
      await fetch('/api/rhstock/'+id, {
        method:'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(batchee),
      });



        await fetch('/api/returndtock', {
          method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          
          body: JSON.stringify(item),
        });
        alert("add sucessfully");
     
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
                          <Input type="text" name="batch_id" id="batch_id"  value={this.state.batchId}/>                                            
                          
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
                        <Button color="secondary" tag={Link} to="/ministrycurrentstocks">Cancel</Button>
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