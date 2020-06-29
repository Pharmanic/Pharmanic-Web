import React, { Component } from 'react';
import {Container,Form,FormGroup,Table, Button, Card,Input,Col,Row,InputGroup,InputGroupAddon} from 'reactstrap';

import { Link } from 'react-router-dom';
class Rdhs_Hospital_SortBy_Qty extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            reg_no:'',
            Drug:[],
            search:''
         }
         this.state.reg_no=localStorage.getItem('reg_no');
    }
    async componentDidMount(){
        const response= await fetch('/api/lessqty/'+this.state.reg_no);
        const body=await response.json();
        this.setState({Drug:body, isLoading:false});
        //alert(this.state.id);
    }
    updateSearch(event){
        this.setState({search:event.target.value.substr(0,20)});
      }

      async goAdding(sr_no,name,quantity){
        localStorage.setItem('sr_no',sr_no);
        localStorage.setItem('name',name);
        localStorage.setItem('quantity',quantity);
      }
    render() { 
        const {Drug} =this.state;

        let filteredData=Drug.filter(
            (drugs)=>{
              
              return drugs.medicine.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                    //  ministrystore.m_store_id.indexOf(this.state.search) !==-1;
            }
          );
  
        
        let drugRow=filteredData.map(drug=>
            
           <tr>
               <td>{drug.medicine.sr_no}</td>
               <td>{drug.medicine.name}</td>
               <td>{drug.medicine.description}</td>
               <td>{drug.quantity}</td>
               <td><Button color="primary" onClick={()=>this.goAdding(drug.medicine.sr_no,drug.medicine.name,drug.quantity)}>Add Order Cart</Button></td>
              
               
           </tr>
            
        )
        return ( 
            <form>
            <FormGroup>
             
            <Link to='/rhcstock'><Button color="primary">Back</Button></Link>{' '}{' '}{' '}{' '}
            <Link to='/returncart'><Button color="primary">View Return Cart</Button></Link>
                </FormGroup>

          
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
               
           
                <Card>
<Table className="mt-4">
             <thead>
                 <tr>
                    
                     <th width="20%">Sr_no</th>
                     <th width="20%">Name</th>
                     <th width="20%">Description</th>
                     <th width="20%">Available quantity</th>
                     
                     
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
 
export default Rdhs_Hospital_SortBy_Qty;