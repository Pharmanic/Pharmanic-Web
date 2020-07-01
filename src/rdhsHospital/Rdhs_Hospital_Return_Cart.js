import React, { Component } from 'react';
import {Container,Input,Button,Label,Form,FormGroup,Table, Card,
    CardBody, Row,
    CardFooter,
    CardHeader,
    Col,InputGroup} from 'reactstrap';


import { Link } from 'react-router-dom';
class Rdhs_Hospital_Return_Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            returnCart:[],
            reg_no:'',
            isLoading:false,
            search:''
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
    async deleteItem(id){
        await fetch('/api/dltreturnitem/'+id,{
            method:'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
            
        }).then(()=>{
            let updateItm=[...this.state.returnCart].filter(i=>i.returnedId !== id);
            this.setState({returnCart:updateItm});
        });
        alert("Deleted....");

    }

    updateSearch(event){
        this.setState({search:event.target.value.substr(0,20)});
      }
    render() { 


      
        const {returnCart} =this.state;

        let filteredData=returnCart.filter(
            (drugs)=>{
                return drugs.rdhs_hospital_current_stock.medicine.name.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1;
            //  return drugs.rdhs_hospital_current_stock.medicine.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                    //  ministrystore.m_store_id.indexOf(this.state.search) !==-1;
            }
          );
        let optionList=returnCart.map(drug=>
            <option>
               {drug.rdhs_hospital_current_stock.medicine.name}
            </option>
           
         )
        let returnRow=filteredData.map(returned=>
            <tr>
                <td><b>{returned.rdhs_hospital_current_stock.batchNo}</b></td>
                <td><b>{returned.rdhs_hospital_current_stock.medicine.sr_no}</b></td>
                <td><b>{returned.rdhs_hospital_current_stock.medicine.name}</b></td>
                <td><b>{returned.quantity}</b></td>
                <td><b>{returned.rdhs_hospital_current_stock.expiredate}</b></td>
                <td><Button color="primary" onClick={()=>this.setReturn(returned.returnedId)} >Update</Button></td>
                     <td><Button color="danger" onClick={()=>this.deleteItem(returned.returnedId)}>Delete</Button></td>
              
            </tr>
             
         )
        return (
           

            <form>
                <FormGroup row>
                <Col md="4">
              <Link to='/rhexpire'><Button color="info" style={{width:100}}>Back</Button></Link>{' '}{' '}{' '}{' '}
              </Col>
              <Col xs="12" md="7">
              <Link to='/rdhstrack'><Button color="success" style={{width:300,height:50,font:170}}>Return All</Button></Link> 
              </Col>
                </FormGroup>
              <Card>

              <div>
                       <InputGroup>
          <Input type="select" id="input1-group2" name="input1-group2" placeholder="Search by Name" value={this.state.search}
                  onChange={this.updateSearch.bind(this)}>
                        {optionList}

          </Input>

        
                 
        </InputGroup> 
                       </div>
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