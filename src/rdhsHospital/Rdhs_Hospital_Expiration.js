 import React, { Component } from 'react';
import {Container,Form,FormGroup,Table, Button, Card} from 'reactstrap';

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
    async setReturn(stockId,batchNo,sr_no,name,quantity,expiration){
        localStorage.setItem('stockId',stockId);
        localStorage.setItem('batchNo',batchNo);
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
               <td>{drug.batchNo}</td>
               <td>{drug.medicine.sr_no}</td>
               <td>{drug.medicine.name}</td>
               <td>{drug.quantity}</td>
               <td><b>{drug.expiredate}</b></td>
               <td><Button color="primary" onClick={()=>this.setReturn(drug.stockId,drug.batchNo,drug.medicine.sr_no,drug.medicine.name,drug.quantity,drug.expiredate)}>Add to Return Cart</Button></td>
              
               
           </tr>
            
        )

        return ( 
            
            <form>
                   <FormGroup>
                   <Link to='/returncart'><Button color="primary">View Return Cart</Button></Link>
                       </FormGroup>
                       <Card>
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

                </Card>

      </form>
     
         );
    }
}
 
export default Rdhs_Hospital_Expiration;