import React, { Component } from 'react';
import {Container,Input,Button,Label,Form,FormGroup,Table, Card,
    CardBody, Row,
    CardFooter,
    CardHeader,
    Col,} from 'reactstrap';
import { Link } from 'react-router-dom';

class Rdhs_Track extends Component {

  emptyItem = {
    track_id: '',
      date:new Date(),
      
      start_point:'',
      end_point:'',
      reg_no:[],
      vehicle_no:[],
      nic:[]
    };
    constructor(props) {
        super(props);
        this.state = { 
            item:this.emptyItem,
            id:'',
            isLoading:false,
            nic:'',
            vehicle:'',
            item:this.emptyItem,
            driver:[],
            vehicles:[],
            rdhs:[],
            returnCart:[],
            reg_no:''
         }
       
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.state.reg_no=localStorage.getItem('reg_no');
    }

  

    async componentDidMount(){
      this.setState({isLoading: true});
      const response= await fetch('/api/idgenerate');
      const body=await response.json();
      this.setState({id:(body+1), isLoading:false});
      //alert(this.state.id);


      fetch('api/alldriver')
        .then(response => response.json())
        .then(data => this.setState({driver: data}));
  
      fetch('api/allvehicle')
        .then(response => response.json())
        .then(data => this.setState({vehicles: data}));
      
      fetch('/rdhs_list')
        .then(response => response.json())
        .then(data => this.setState({rdhs: data}));

       fetch('/api/returnCart/'+this.state.reg_no)
        .then(response => response.json())
        .then(data => this.setState({returnCart: data,isLoading:false}));
       
  }
    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      let item = {...this.state.item};
     

      if(name=='nic'){
        const driver=this.state.driver;
        console.log('drivr nic',driver);
        const store=driver.find(ms => ms.nic==target.value);
        console.log('drivr collection',store);
        item[name]=store;
        this.setState({item});
        console.log('drivr item', item[name]);
      }else if(name=='reg_no'){
        const rdds=this.state.rdhs;
      //  const currentstock = store.find(mcs => mcs.stockId==stockId);
       // this.state.batches=currentstock;

        const exportedstock=rdds.find(es => es.reg_no==target.value);
        item[name]=exportedstock;
        this.setState({item});
    
      }else if(name=='vehicle_no'){
        const vehicle=this.state.vehicles;
        const exportedstock=vehicle.find(es => es.vehicle_no==target.value);
        item[name]=exportedstock;
        this.setState({item});
      }else{
        item[name] = value;
        this.setState({item});
       // console.log('item',item);
      }


      }
     
   
      async handleSubmit(event) {
      
        event.preventDefault();
       // const{item}=this.state;
        let item = {...this.state.item};
        item['start_point']=localStorage.getItem('reg_no');
      
       
       // item['rdhs_hospital_current_stock']=this.state.batches;
        console.log('final item',item);
        await fetch('/api/saveTrack', {
          method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item),
        });
      
        const {returnCart} =this.state;
       // returnCart.forEach(returning);

      /*  function returning(item){
          console.log(item);
         // const id={item[rdhs_hospital_current_stock.batchNo];
         // console.log('id :'+id);
        }*/
        let list=returnCart.map(ret=>{
          const id=ret.rdhs_hospital_current_stock.stockId;
          ret.track_id=this.state.id;
          console.log(ret);

           fetch('/api/updatereturn/'+id, {
            method:'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(ret),
          });
        })

        
      }
      
    render() { 
        return ( 
            <div className="animated fadeIn">
         <Row>
              <Col xs="15" md="8">
                <Card>
                  <CardHeader>
                    <strong>Enter Track Details</strong> 
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal">  
                    <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Track ID</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="track_id" name="track_id" value={this.state.id}  disabled="true"/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Register No.</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="reg_no" name="reg_no" placeholder="EnterRegister Number" onChange={this.handleChange}/>
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Driver NIC</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="nic" name="nic" placeholder="Enter Driver NIC" onChange={this.handleChange}/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Vehicle Number</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="vehicle_no" name="vehicle_no" placeholder="Enter Vehicle Number" onChange={this.handleChange}></Input>
                        </Col>
                      </FormGroup>
                    
                      <FormGroup>
                        <Button color="success" type="submit">Confirm Track</Button>{' '}
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
 
export default Rdhs_Track;