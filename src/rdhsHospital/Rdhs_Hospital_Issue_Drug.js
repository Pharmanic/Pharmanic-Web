import React, { Component } from 'react';
import {Container,Input,Button,Label,Form,FormGroup,Table, Card,
    CardBody, Row,
    CardFooter,
    CardHeader,
    Col,} from 'reactstrap';
import { Link } from 'react-router-dom';

class Rdhs_Hospital_Issue_Drug extends Component {

    emptyList= {
      issueId:'',
      date:new Date(),
      qty:'',
      hospital_by_rdhs:[],
      stockId:''
        
       
      };
    constructor(props) {
        super(props);
        this.state = { 
            Drugs:[],
            reg_no:'',
            item:this.emptyList,
            qty:'',
            sr_no:'',
            name:'',
            availableQty:'',
            batchNo:'',
            updateItm:[],
            stockId:'',
            stock:[],
            hospital_by_rdhs:[],
            newqty:''
         }
         this.state.reg_no=localStorage.getItem('reg_no');
         this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 

        
    }
    async componentDidMount(){
        fetch('/api/rhstockreg/'+this.state.reg_no)
      .then(response => response.json())
      .then(data => this.setState({Drugs: data}));

      fetch('/hospitalByRdhs/'+this.state.reg_no)
      .then(response => response.json())
      .then(data => this.setState({hospital_by_rdhs: data}));

      fetch('/rdhshospital/issuedrug')
      .then(response => response.json())
      .then(data => this.setState({stock: data}));

      console.log('stock',this.state.stock);
      

    }
    handleChange(event) {
         // const stock="";
  event.preventDefault();

        const target = event.target;
         const value = target.value; 
         const name = target.name;

         if(name=='batchNo'){
        this.state.batchNo=value;
        let updateItm=[...this.state.Drugs].filter(i=>i.batchNo == value);
        
        updateItm.map(d1=>{
          this.state.name=d1.medicine.name;
          this.state.sr_no=d1.medicine.sr_no;
          this.state.availableQty=d1.quantity;
          this.state.stockId=d1.stockId;
        }
        

          )
          this.state.stock=updateItm;

          let item={...this.state.item};
          item['hospital_by_rdhs']=this.state.hospital_by_rdhs;
       item['stockId']=this.state.stockId;
         this.setState({item});
          console.log(this.state.name);
          document.getElementById('sr_no').value=this.state.sr_no;
          document.getElementById('sr_no').disabled="true";
          document.getElementById('name').value=this.state.name;
          document.getElementById('name').disabled="true";
      }else if(name=='qty'){
        let item={...this.state.item};
        item[name]=value;
        this.setState({item});
        this.state.newqty=parseInt(this.state.availableQty)-parseInt(value);
        if(document.getElementById('batchNo').value!=''){
          if(value>this.state.availableQty){
            alert('stock has '+this.state.availableQty+' item you can not issue greater than'+this.state.availableQty+'items');
            document.getElementById('qty').value="";
          }
       }
       var regx=/^[1-9]+$/;
       var vall1=document.getElementById('qty').value;

       if(regx.test(vall1)){
        document.getElementById('qty').style.borderColor = "";
       }else{
        document.getElementById('qty').style.borderColor = "red";
       }

      }

 }
 async handleSubmit(event){
  event.preventDefault();

    var regx=/^[1-9]+$/;
    var vall1=document.getElementById('qty').value;
    if(!regx.test(vall1)){
      alert('useless quantity in issued item. please enter valid data');
      document.getElementById('qty').value="";
      document.getElementById('qty').style.borderColor = "";
    }else{
  var result = window.confirm("Are you sure Issue this items?");
  if(result){
    const store=this.state.Drugs;
  const updateItm = store.find(mcs => mcs.stockId==this.state.stockId);
  updateItm['quantity']=this.state.newqty;
  console.log('put',updateItm);
  await fetch('/api/rhstock/'+this.state.stockId, {
    method:'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    
    body: JSON.stringify(updateItm),
  });


  let item={...this.state.item};
  item['rdhs_hospital_current_stock']=this.state.updateItm;
 // item['hospital_by_rdhs']=this.state.hospital_by_rdhs;
  this.setState({item});
  console.log('submit',this.state.item)
 // console.log(item);
 
  await fetch('/rdhshospital/addissue', {
    method:'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.state.item),
  });
  alert("Added sucessfully");
  document.getElementById('batchNo').value="";
  document.getElementById('sr_no').value="";
  document.getElementById('name').value="";
  document.getElementById('qty').value="";
  }
  else{
    alert("Can't added..");
  }
 }
 }

    render() { 
        
        const {Drugs,updateItm,name}=this.state;
        console.log(Drugs);
        console.log(updateItm);
        let optionList=Drugs.map(drug=>
           // console.log(drug.medicine.name);
            <option>
               {drug.batchNo}    
            </option>
         )
         
        
        return ( 
            <div className="animated fadeIn">
            <Row>
                 <Col xs="15" md="8">
                   <Card>
                     <CardHeader>
                       <strong>Enter Details of Isued Drugs</strong> 
                     </CardHeader>
                     <CardBody>
                       <Form onSubmit={this.handleSubmit} method="POST" encType="multipart/form-data" className="form-horizontal">  
                       <FormGroup row>
                           <Col md="3">
                             <Label htmlFor="text-input">Batch ID</Label>
                           </Col>
                           <Col xs="12" md="9">
                           <Input type="test" id="batchNo" name="batchNo" list="datalist1"  onChange={this.handleChange} required> </Input>
                               <datalist id="datalist1">
                                  {optionList}
                                 </datalist>

                           </Col>
                         </FormGroup>
                         <FormGroup row>
                           <Col md="3">
                             <Label htmlFor="text-input"> SR Number</Label>
                           </Col>
                           <Col xs="12" md="9">
                             <Input type="text" id="sr_no" name="sr_no"/>
                           </Col>
                         </FormGroup>
   
                         <FormGroup row>
                           <Col md="3">
                             <Label htmlFor="text-input">Name</Label>
                           </Col>
                           <Col xs="12" md="9">
                             <Input type="text" id="name" name="name" />
                           </Col> 
                         </FormGroup>
                         <FormGroup row>
                           <Col md="3">
                             <Label htmlFor="text-input">Issued quantity</Label>
                           </Col>
                           <Col xs="12" md="9">
                             <Input type="text" id="qty" name="qty" qty="Enter Quantity of Issue"  onChange={this.handleChange} required></Input>
                           </Col>
                         </FormGroup>
                       
                         <FormGroup>
                           <Button color="success" type="submit">Issued</Button>{' '}
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
 
export default Rdhs_Hospital_Issue_Drug;