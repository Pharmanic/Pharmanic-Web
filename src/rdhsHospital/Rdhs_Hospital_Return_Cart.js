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
        const response= await fetch('/api/returnCart/'+this.state.reg_no);
        const body=await response.json();
        this.setState({returnCart:body, isLoading:false});
       
        
    }

    setReturn(returned_id){
        localStorage.setItem('returnedId',returned_id);
        window.location.replace("/#/updatercart");
    }
    render() { 
        const {returnCart} =this.state;
        let returnRow=returnCart.map(returned=>
            <tr>
                <td><b>{returned.rdhs_hospital_current_stock.batchNo}</b></td>
                <td><b>{returned.rdhs_hospital_current_stock.medicine.sr_no}</b></td>
                <td><b>{returned.rdhs_hospital_current_stock.medicine.name}</b></td>
                <td><b>{returned.quantity}</b></td>
                <td><b>{returned.rdhs_hospital_current_stock.expiredate}</b></td>
                <td><Button color="primary" onClick={()=>this.setReturn(returned.returned_id)} >Update</Button></td>
                     <td><Button color="danger">Delete</Button></td>
              
            </tr>
             
         )
        return (
           

            <form>
                <FormGroup>
              <Link to='/rhexpire'><Button color="info">Back</Button></Link>

                </FormGroup>
              <Card>
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
         </Card>
    </form>

    
   

          );
    }
}
 
export default Rdhs_Hospital_Return_Cart;