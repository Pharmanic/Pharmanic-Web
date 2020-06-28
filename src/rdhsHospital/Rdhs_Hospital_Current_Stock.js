import React, { Component } from 'react';
import {Container,Input,Button,Label,Form,FormGroup,Table, Card,
  CardBody, Row,
  CardFooter,
  CardHeader,
  Col,InputGroup,InputGroupAddon} from 'reactstrap';
import { Link } from 'react-router-dom';
import TextInput from 'react-autocomplete-input';
 class Rdhs_Hospital_Current_Stock extends Component {
    constructor(props)
    {

      super(props);

      this.state = {
          value: '',
          isLoading:false,
            Drugs:[],
            Medicine:[],
            Hospital:[],
            hospitalDrug:[],
            id:'',
            url:'',
            search:''
        };
      
      this.state.id=localStorage.getItem('reg_no');
   //  alert(this.state.id+"Hospital id");
      this.state.url='/api/rhstockreg/'+this.state.id;
     // alert(this.state.url);

    }
    
              async componentDidMount(){
                const response= await fetch(this.state.url);
                const body=await response.json();
                this.setState({Drugs:body, isLoading:false});
                //alert(this.state.id);
            }

    
            updateSearch(event){
              this.setState({search:event.target.value.substr(0,20)});
            }
    render()
    {
        const {Drugs,isLoading} =this.state;
        let filteredData=Drugs.filter(
          (drugs)=>{
            
            return drugs.medicine.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                  //  ministrystore.m_store_id.indexOf(this.state.search) !==-1;
          }
        );


        let optionList=Drugs.map(drug=>
          <option>
             {drug.medicine.name}
             
          </option>
         
           
            
           
       )
        let drugRow=filteredData.map(drug=>
           <tr>
               <td>{drug.batchNo}</td>
               <td>{drug.medicine.sr_no}</td>
               <td>{drug.medicine.name}</td>
               <td>{drug.quantity}</td>
               <td>{drug.expiredate}</td>
              
               
           </tr>
            
        )
  return (
      <form>
        <Link to='/rhexpire'><Button color="primary">Sort By Expire Date</Button></Link>{' '}{' '}{' '}{' '}{' '}{' '}
        <Link to='/lessqty'><Button color="primary">Sort By quantity</Button></Link>
        <br></br>
                  <br></br>
<div>

<Row>
             
             <Col>
               <InputGroup>
                 <InputGroupAddon addonType="prepend">
                   <Button type="button" color="primary"><i className="fa fa-search"></i></Button>
                 </InputGroupAddon>
                 <Input type="text" id="input1-group2" name="input1-group2" placeholder="Search" type="text"
                   value={this.state.search}
                   onChange={this.updateSearch.bind(this)} />
               </InputGroup>
               <br></br>
             </Col>
           </Row>
        
</div>
       

          
        <Card>
      <Table className="mt-4">
                    <thead style={{ backgroundColor: '#33C7FF', color: 'white', borderRadius: '5px',font:'1500px'}}>
                        <tr>
                            <th width="10%">Batch Id</th>
                            <th width="10%">Sr_no</th>
                            <th width="20%">Name</th>
                            <th width="10%">quantity</th>
                            <th width="20%">Expire Date</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {drugRow}
                    </tbody>
                </Table>
                </Card>
      </form>



      )
    }

 }
  
 export default Rdhs_Hospital_Current_Stock;