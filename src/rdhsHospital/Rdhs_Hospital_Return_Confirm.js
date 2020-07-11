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
       
        hospital_by_rdhs:[],
        rdhs_hospital_current_stock:[],
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
            qty:'',
            returnCart:[]
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
       
          fetch('/hospital_by_rdhs/hospital_by_rdhs_list')
        .then(response => response.json())
        .then(data => this.setState({rdhss: data})); 

  
        fetch('/api/returnCart/'+this.state.regNO)
        .then(response => response.json())
        .then(data => this.setState({returnCart: data})); 


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
        var result = window.confirm("Are you sure return this item?");
        if(result){

          const stockId=this.state.stockId;
          const rdh=this.state.rdhss;
          const store=this.state.currentStock;
          const currentstock = store.find(mcs => mcs.stockId==stockId);
          this.state.batches=currentstock;
         const id=this.state.batches.stockId;
          const q1=currentstock.quantity;
          const q2=this.state.qty;
         const nqty=parseInt(q1)-parseInt(q2);
         this.state.batches.quantity=nqty;
  
         
          let batchee = {...this.state.batches};
          batchee['quantity']=nqty;
          console.log('put1',batchee);
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
          item['rdhs_hospital_current_stock']=this.state.batches;
          console.log('batch',this.state.batches);
          item['hospital_by_rdhs']=this.state.rdhss;
          this.setState({item});
  
          const {returnCart}=this.state;
          const stId=localStorage.getItem('stockId');

          if(returnCart.find(mcs => mcs.rdhs_hospital_current_stock.stockId==stId)){
            console.log('if');
            const currentcart=returnCart.find(mcs =>mcs.rdhs_hospital_current_stock.stockId==stId);
            const q3=parseInt(currentcart.quantity)+parseInt(this.state.qty); 
            const cartId=currentcart.returnedId;
            item['returnedId']=cartId;
            console.log('return',cartId);
            item['quantity']=q3;
            this.setState({item});
            await fetch('/api/updatereturn/'+cartId, {
              method:'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              
              body: JSON.stringify(item),
            });



      /*    const currentcart=returnCart.find(mcs => mcs.rdhs_hospital_current_stock.stockId==stId);
          console.log('return cart',currentcart);
          console.log('current stock',currentcart.rdhs_hospital_current_stock.stockId);
          const s1=currentcart.rdhs_hospital_current_stock.stockId;
          console.log('this id',stId);
          const s2=stId;
          if(s1==s2){
            console.log('equal');
          }

         // console.log('stock id',returnCart.rdhs_hospital_current_stock.stock_id);
        //  console.log('stock id 2',returnCart.find(mcs => mcs.rdhs_hospital_current_stock.stockId),'aaa');
       // console.log('r2',returnCart.rdhs_hospital_current_stocks.stockId==stId);
          if(s1==s2){
            const currentcart=returnCart.find(mcs => mcs.rdhs_hospital_current_stock.stockId==stId);
            const rId=currentcart.returnedId;
            await fetch('/api/updatereturn/'+rId, {
              method:'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              
              body: JSON.stringify(item),
            }); 
*/
          }else{
            console.log('else');
          await fetch('/api/returndtock', {
              method:'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              
              body: JSON.stringify(item),
            }); 

          }
            alert("Item Added Successfully");
            window.location.replace("/#/rhexpire");

  

        }else{
          alert("added cancelled");
        }
        
       

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