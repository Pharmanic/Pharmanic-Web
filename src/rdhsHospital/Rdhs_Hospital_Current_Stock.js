import React, { Component } from 'react';
import {Container,Input,Button,Label,Form,FormGroup,Table, Card,
  CardBody, Row,
  CardFooter,
  CardHeader,
  Col} from 'reactstrap';
import { Link } from 'react-router-dom';

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
            url:''
        };
      
      this.state.id=localStorage.getItem('reg_no');
      alert(this.state.id+"Hospital id");
      this.state.url='/api/rhstockreg/'+this.state.id;
     // alert(this.state.url);

    }
    
              async componentDidMount(){
                const response= await fetch(this.state.url);
                const body=await response.json();
                this.setState({Drugs:body, isLoading:false});
                //alert(this.state.id);
            }

      
    
    render()
    {
        const {Drugs,isLoading} =this.state;

        
        
        let drugRow=Drugs.map(drug=>
           <tr>
               <td>{drug.batchId}</td>
               <td>{drug.medicine.sr_no}</td>
               <td>{drug.medicine.name}</td>
               <td>{drug.quantity}</td>
               <td>{drug.expiredate}</td>
              
               
           </tr>
            
        )

        

      return (
      <form>
        <Link to='/rhexpire'><Button>Sort By Expire Date</Button></Link>
      <Table className="mt-4">
                    <thead>
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
      </form>



      )
    }

 }
  
 export default Rdhs_Hospital_Current_Stock;