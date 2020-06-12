import React, { Component } from 'react';
import {Container,Form,FormGroup,Table, Button, Card} from 'reactstrap';

import { Link } from 'react-router-dom';
class Rdhs_Hospital_Return_Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            returnCart:[],
            reg_no:'',
            isLoading:false
         }
         this.state.reg_no=localStorage.getItem('reg_no');
    }

    async componentDidMount(){
        console.log('line1');
        const response= await fetch('/api/returnCart/'+this.state.reg_no);
        console.log('line2');
        const body=await response.json();
        console.log('line3');
        this.setState({returnCart:body, isLoading:false});
        console.log('line1',this.state.returnCart);
        
    }
    render() { 
        const {returnCart} =this.state;
        let returnRow=returnCart.map(returned=>
            <tr>
                <td><b>{returned.batchId.batchId}</b></td>
                <td><b>{returned.batchId.medicine.sr_no}</b></td>
                <td><b>{returned.batchId.medicine.name}</b></td>
                <td><b>{returned.quantity}</b></td>
                <td><b>{returned.batchId.expiredate}</b></td>
                <td><Button color="primary">Update</Button></td>
                     <td><Button color="danger">Delete</Button></td>
              
            </tr>
             
         )
        return (
           

            <form>
              <Link to='/rhexpire'><Button color="info">Back</Button></Link>
          
        <Table className="mt-4">
            
             <thead style={{ backgroundColor: '#607D8B', color: 'white', borderRadius: '5px' }}>
                 <tr color='blue'>
                     <th width="15%">Batch Id</th>
                     <th width="15%">SR Number</th>
                     <th width="18%">Name</th>
                     <th width="15%">Return Quantity</th>
                     <th width="15%">Expire Date</th>
                   
                    
                   
                 </tr>
             </thead>
             <tbody>

                 {returnRow}
                
             </tbody>
         </Table>
    </form>
   

          );
    }
}
 
export default Rdhs_Hospital_Return_Cart;