import React, { Component } from 'react';
import {Container,Form,FormGroup,Table, Button} from 'reactstrap';

class Rdhs_Hospital_Expiration extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Drug:[],
            value:'',
            isLoading:false
         }
         this.state.value=localStorage.getItem('reg_no');
        // alert(this.state.value+'expire');
    }

    
    async componentDidMount(){
        const response= await fetch('/api/expiration/'+this.state.value);
        const body=await response.json();
        this.setState({Drug:body, isLoading:false});
        //alert(this.state.id);
    }

    render() { 

        
        const {Drug} =this.state;

        
        
        let drugRow=Drug.map(drug=>
           <tr>
               <td>{drug.batchId}</td>
               <td>{drug.medicine.sr_no}</td>
               <td>{drug.medicine.name}</td>
               <td>{drug.quantity}</td>
               <td>{drug.expiredate}</td>
               <td><Button>Add to Return Cart</Button></td>
              
               
           </tr>
            
        )

        return ( 
            <form>
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
         );
    }
}
 
export default Rdhs_Hospital_Expiration;