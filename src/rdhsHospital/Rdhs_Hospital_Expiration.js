 import React, { Component } from 'react';
import {Container,Form,FormGroup,Table, Button} from 'reactstrap';

import { Link } from 'react-router-dom';

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
    async setReturn(batchId,sr_no,name,quantity,expiration){
        localStorage.setItem('batch_id',batchId);
        localStorage.setItem('sr_no',sr_no);
        localStorage.setItem('name',name);
        localStorage.setItem('quantity',quantity);
        localStorage.setItem('expire',expiration);
     //   alert(localStorage.getItem('expire'));
        window.location.replace("/#/rhreturnconfirm");

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
               <td><b>{drug.expiredate}</b></td>
               <td><Button color="primary" onClick={()=>this.setReturn(drug.batchId,drug.medicine.sr_no,drug.medicine.name,drug.quantity,drug.expiredate)}>Add to Return Cart</Button></td>
              
               
           </tr>
            
        )

        return ( 
            <form>
                   <FormGroup>
                       
                        <Button color="secondary" tag={Link} to="/ministrycurrentstocks">View Return Cart</Button>
                       </FormGroup>
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