import React, { Component } from 'react';
import {FormGroup,Table, Button, Card} from 'reactstrap';
import { Link } from 'react-router-dom';

class LM_Hospital_Expiration extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Drug:[],
            value:'',
            isLoading:false,
            search:''
         }
         this.state.value=localStorage.getItem('reg_no');
    }
    
    async setReturn(stockId,batchNo,sr_no,name,quantity,expiration){
        localStorage.setItem('stockId',stockId);
        localStorage.setItem('batchNo',batchNo);
        localStorage.setItem('sr_no',sr_no);
        localStorage.setItem('name',name);
        localStorage.setItem('quantity',quantity);
        localStorage.setItem('expire',expiration);
    }

    async componentDidMount(){
        const response= await fetch('/dhexpiration/'+this.state.value);
        const body=await response.json();
        this.setState({Drug:body, isLoading:false});
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
            </tr>
        )

        return ( 
            <form>
                <FormGroup>    
                   <Link to='/dhstock'><Button color="primary">Back</Button></Link>{' '}{' '}{' '}{' '}
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
 
export default LM_Hospital_Expiration;