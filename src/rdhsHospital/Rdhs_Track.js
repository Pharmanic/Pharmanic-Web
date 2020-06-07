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
      reg_no:{
        reg_no:'',
        name:'',
        address:'',
        email:'',
        telephone:''
      },
      vehicle_no:{
        vehicle_no:'',
        type:'',
        capacity:'',
        rdhs:{
          reg_no:'',
          name:'',
          address:'',
          email:'',
          telephone:''
        }

      },
      nic:{
        nic:'',
        name:'',
        email:'',
        address:'',
        telephone:'',
        rdhs:{
          reg_no:'',
          name:'',
          address:'',
          email:'',
          telephone:''
        }
      }
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
            rdhs:[]
         }
       
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

  

    async componentDidMount(){
      this.setState({isLoading: true});
      const response= await fetch('/api/idgenerate');
      const body=await response.json();
      this.setState({id:(body+1), isLoading:false});
      alert(this.state.id);


      fetch('api/alldriver')
        .then(response => response.json())
        .then(data => this.setState({driver: data}));
  
      fetch('api/allvehicle')
        .then(response => response.json())
        .then(data => this.setState({vehicles: data}));
      
      fetch('/rdhss')
        .then(response => response.json())
        .then(data => this.setState({rdhs: data, isLoading: false}));
  }
    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      let item = {...this.state.item};
     

      if(name=='nic'){
        const driver=this.state.driver;
        const store=driver.find(ms => ms.nic==target.value);
        item[name]=store;
      }else if(name=='reg_no'){
        const rdds=this.state.rdhs;
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
        const{item}=this.state;
     
    
        await fetch('/api/saveTrack', {
          method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item),
        });
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
                          <Label htmlFor="text-input">SR Number</Label>
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