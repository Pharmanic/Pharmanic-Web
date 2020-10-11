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
  Input,
  InputGroupAddon,
  InputGroup
} from 'reactstrap';
import { Link } from 'react-router-dom';
//import CurrentStockForm from '../CurrentStockForm/CurrentStockForm';
//import Paginations from './Pagination';



class CurrentStock extends Component {
  

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {ministrycurrentstocks: [], isLoading: true,
      currentPage:1,
      dataPerPage:5,
      search:''}; 
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/rdhscurrentstock')
      .then(response => response.json())
      .then(data => this.setState({ministrycurrentstocks: data, isLoading: false}));

 }
  updateSearch(event){
    this.setState({search:event.target.value.substr(0,20)});
  }

 

  
  async remove(id) {
    await fetch(`/rdhscurrentstock/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedList = [...this.state.ministrycurrentstocks].filter(i => i.id !== id);
      this.setState({ministrycurrentstocks: updatedList});
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
    const {ministrycurrentstocks, isLoading,currentPage,dataPerPage,search} = this.state;
    let filteredData=ministrycurrentstocks.filter(
      (ministrycurrentstock)=>{
        return (ministrycurrentstock.stock_id.stock_id.toLowerCase().indexOf(this.state.search.toLowerCase()) & ministrycurrentstock.sr_no.name.toLowerCase().indexOf(this.state.search.toLowerCase()) & ministrycurrentstock.expire_date.toLowerCase().indexOf(this.state.search.toLowerCase()))  !== -1;
            
      }
    );

    const indexOfLastData=currentPage * dataPerPage;
    const indexOfFirstData=indexOfLastData - dataPerPage;
    const currentData=filteredData.slice(indexOfFirstData,indexOfLastData);

    const paginate = pageNumber => this.setState({currentPage:pageNumber});

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const groupList = currentData.map(ministrycurrentstock => {
      return <tr key={ministrycurrentstock.id}>
        <td style={{whiteSpace: 'nowrap'}}>{ministrycurrentstock.id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrycurrentstock.batch_id.batch_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrycurrentstock.reg_no.reg_no}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrycurrentstock.sr_no.sr_no.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrycurrentstock.expire_date}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrycurrentstock.available_quantity}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrycurrentstock.reg_no.name}</td> 
        {/* <td>
        <Button size="sm" color="danger" onClick={() => {if(window.confirm('Are you sure you wish to delete this stock?')) this.remove(ministrycurrentstock.batch_id)}}><i className="fa fa-trash"></i></Button>
        </td>      */}
      </tr>
    });
    return (
      <div className="animated fadeIn">
        
          {/* <CurrentStockForm/> */}
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

          <Button onClick={() => { this.sortbyid()}}>Sort By StockID</Button>
          <Button onClick={() => { this.sortbyname()}}>Sort By name</Button>
          <Button onClick={() => { this.sortbyexpiredate()}}>Sort By expiredate</Button>

            <Card style={{borderRadius:'20px'}}>
              <CardHeader style={{backgroundColor:'#1b8eb7',color:'white',borderRadius:'5px'}}>
              <i className="fa fa-align-justify"></i> Current Stock     
              </CardHeader>
              <CardBody>                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead style={{backgroundColor:'#244EAD', color:'white',borderRadius:'20px !important'}}>
                  <tr>
                    <th>ID</th>
                    <th>Batch ID</th>
                    <th>Warehouse</th>
                    <th>Name</th>
                    <th>Expire Date</th>
                    <th>Available Quantity</th>
                    <th>Damage Quantity</th>
                  
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
              {/* <Paginations dataPerPage={dataPerPage} totalData={ministrycurrentstocks.length} paginate={paginate}/> */}
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
