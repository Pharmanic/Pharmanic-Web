import React, { Component} from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button,
  CardFooter,
  Badge,
  Input,
  InputGroupAddon,
  InputGroup
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
//import DamageStockForm from '../DamageStockForm/DamageStockForm';
// import Paginations from './Pagination';


class CurrentStock extends Component {
  

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {ministrydamagestocks: [], isLoading: true,
      currentPage:1,
        dataPerPage:5,search:''}; 
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/rdhsdamagestocks')
      .then(response => response.json())
      .then(data => this.setState({ministrydamagestocks: data, isLoading: false}));
  }

  updateSearch(event){
    this.setState({search:event.target.value.substr(0,20)});
  }

  async remove(id) {
    await fetch(`/rdhsdamagestock/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      
    });
  }

  async close(id) {
    await fetch(`/completereturndamage/${id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
     
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const {ministrydamagestocks, isLoading,currentPage,dataPerPage,search} = this.state;

    let filteredData=ministrydamagestocks.filter(
      (ministrydamagestock)=>{
        return (ministrydamagestock.batch_id.stock_id.stock_id.toLowerCase().indexOf(this.state.search.toLowerCase()) & ministrydamagestock.batch_id.sr_no.name.toLowerCase().indexOf(this.state.search.toLowerCase()) & ministrydamagestock.date.toLowerCase().indexOf(this.state.search.toLowerCase()))  !== -1;
            
      }
    );

    const indexOfLastData=currentPage * dataPerPage;
    const indexOfFirstData=indexOfLastData - dataPerPage;
    const currentData=filteredData.slice(indexOfFirstData,indexOfLastData);

    const paginate = pageNumber => this.setState({currentPage:pageNumber});

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const groupList = currentData.map(ministrydamagestock => {
      return <tr key={ministrydamagestock.did}>
        <td style={{whiteSpace: 'nowrap'}}>{ministrydamagestock.batch_id.stock_id.stock_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrydamagestock.batch_id.batch_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrydamagestock.batch_id.sr_no.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrydamagestock.date}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrydamagestock.batch_id.expire_date}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrydamagestock.quantity}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrydamagestock.reason}</td>
        <td style={{whiteSpace: 'nowrap'}}>
              {ministrydamagestock.status===1? 
                <Badge color="success">Returened</Badge>
            :<Badge color="danger">Not Returned</Badge>}
        </td>  
        <td style={{whiteSpace: 'nowrap'}}>
      {ministrydamagestock.status===1? 
      <Button block outline color="danger" disabled>Complete return</Button>
                  
            : <Button size="sm" color="danger" onClick={() => {if(window.confirm('Are you sure you wish to complete this task?You cant reverse this task')) this.close(ministrydamagestock.did)}}>Complete return</Button>}    
      </td>
      <td style={{whiteSpace: 'nowrap'}}>
      {ministrydamagestock.status===1? 
      <Button block outline color="danger" disabled><i className="fa fa-trash"></i></Button>        
            : <Button size="sm" color="danger" onClick={() => {if(window.confirm('Are you sure you wish to delete this stock?')) this.remove(ministrydamagestock.did)}}><i className="fa fa-trash"></i></Button>}    
      </td>

      </tr>
    });
    return (
      <div className="animated fadeIn">
        
          {/* <DamageStockForm/> */}
          <Row>
          <Col>
          <Row>
          <Col md="8">
          </Col>
          <Col lg="4" >
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button type="button" color="primary"><i className="fa fa-search"></i></Button>
            </InputGroupAddon>
            <Input type="text" id="input1-group2" name="input1-group2" placeholder="Search by medicine name" value={this.state.search}
                    onChange={this.updateSearch.bind(this)}/>
          </InputGroup>  
          <br></br>
          </Col>
          </Row>

            <Card style={{borderRadius:'20px'}}>
              <CardHeader style={{backgroundColor:'#1b8eb7',color:'white',borderRadius:'5px'}}>
              <i className="fa fa-align-justify"></i> Damage Stock
              </CardHeader>
              <CardBody>                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead style={{backgroundColor:'#244EAD', color:'white',borderRadius:'20px !important'}}>
                  <tr>
                    <th>Stock No</th>
                    <th>Batch id</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Expire date</th>
                    <th>Quantity</th>
                    <th>Reason</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {groupList}
                  </tbody>
                </Table>
              </CardBody>
              <CardFooter>
              <Row>
              <Col md="7"></Col>
              <Col md="5">
              {/* <Paginations dataPerPage={dataPerPage} totalData={ministrydamagestocks.length} paginate={paginate}/> */}

              </Col>
              </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CurrentStock;
