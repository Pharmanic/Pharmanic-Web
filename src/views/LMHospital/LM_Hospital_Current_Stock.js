import React, { Component } from 'react';
import {Input,Button,Table, Card, Row, Col, InputGroup, InputGroupAddon} from 'reactstrap';
import { Link } from 'react-router-dom';

class LM_Hospital_Current_Stock extends Component {
    constructor(props){
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
      this.state.url='/dhstockreg/'+this.state.id;
    }
    
    async componentDidMount(){
      const response= await fetch(this.state.url);
      const body=await response.json();
      this.setState({Drugs:body, isLoading:false});
    }

    updateSearch(event){
      this.setState({search:event.target.value.substr(0,20)});
    }

    render(){
      const {Drugs,isLoading} =this.state;
      let filteredData=Drugs.filter((drugs) => {
        return drugs.medicine.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
      );

    let optionList = filteredData.map(drug => <option>{drug.medicine.name}</option>)
    let drugRow = filteredData.map(drug=>
        <tr>
          <td>{drug.batchNo}</td>
          <td>{drug.medicine.sr_no}</td>
          <td>{drug.medicine.name}</td>
          <td>{drug.quantity}</td>
          <td>{drug.expiredate}</td>   
        </tr>
    )
    
    return (
    <div className="animated fadeIn">
      <form>
        <Link to='/sortbyexp'><Button color="primary">Sort By Expire Date</Button></Link>{' '}{' '}{' '}{' '}{' '}{' '}
        <Link to='/sortbyqty'><Button color="primary">Sort By quantity</Button></Link>
        <br></br><br></br>
        <Row>
          <Col>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <Button type="button" color="primary"><i className="fa fa-search"></i></Button>
              </InputGroupAddon>
              <Input type="test" id="batchNo" name="batchNo" list="datalist1"  onChange={this.updateSearch.bind(this)} placeholder="Search by Name"> </Input>
                <datalist id="datalist1">
                  {optionList}
                </datalist>
            </InputGroup>
            <br></br>
          </Col>
        </Row>
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
    </div>
      )
    }
 }
  
 export default LM_Hospital_Current_Stock;