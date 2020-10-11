import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  CardFooter
} from 'reactstrap';
//import Paginations from './Pagination';

class CurrentStock extends Component {
  

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {ministryvehicles: [], isLoading: true,search:'',
    currentPage:1,
    dataPerPage:5,}; 
  }



  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/Rdhs_vehiclereg')
      .then(response => response.json())
      .then(data => this.setState({ministryvehicles: data, isLoading: false}));
  }

  updateSearch(event){
    this.setState({search:event.target.value.substr(0,20)});
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
    const {ministryvehicles, isLoading,search,currentPage,dataPerPage} = this.state;
    
    let filteredData=ministryvehicles.filter(
      (ministryvehicle)=>{
        return ministryvehicle.vehicle_no.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
              //  ministrystore.m_store_id.indexOf(this.state.search) !==-1;
      }
    );
    
    const indexOfLastData=currentPage * dataPerPage;
    const indexOfFirstData=indexOfLastData - dataPerPage;
    const currentData=filteredData.slice(indexOfFirstData,indexOfLastData);

    const paginate = pageNumber => this.setState({currentPage:pageNumber});

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const groupList = currentData.map(ministryvehicle => {
      return <tr key={ministryvehicle.vehicle_no}>
        <td style={{whiteSpace: 'nowrap'}}>{ministryvehicle.vehicle_no}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministryvehicle.type}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministryvehicle.capacity}</td>
      </tr>
    });
    return (
      <div className="animated fadeIn">
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
            <Input type="text" id="input1-group2" name="input1-group2" placeholder="Search by Vehicle Number" value={this.state.search}
                    onChange={this.updateSearch.bind(this)}/>
          </InputGroup> 
          <br></br>
          </Col>
          </Row>
            <Card  style={{borderRadius:'20px'}}>
              <CardHeader style={{backgroundColor:'#1b8eb7',color:'white',borderRadius:'5px'}}>
                RDHS Vehicles
              </CardHeader>
              <CardBody>
                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead style={{backgroundColor:'#244EAD', color:'white',borderRadius:'20px !important'}}>
                  <tr>
                    <th>Vehicle Number</th>
                    <th>Type</th>
                    <th>Capacity (T)</th>                  
                  </tr>
                  </thead>
                  <tbody>
                  {groupList}
                  </tbody>
                </Table>
              </CardBody>
              <CardFooter>
              <Row>
              <Col md="9"></Col>
              <Col md="3">
              {/* <Paginations dataPerPage={dataPerPage} totalData={filteredData.length} paginate={paginate}/> */}
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
