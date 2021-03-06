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
  Button,
  Input,
  CardFooter
} from 'reactstrap';
import Paginations from './Pagination';

class DirectHospitalCurrentStock extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {directhospitalcurrentstocks: [], isLoading: true,filter:"",
    currentPage:1,
    dataPerPage:5,}; 
  }

  handleChange = event =>{
    this.setState({filter:event.target.value});
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/directhospitalcurrentstocks')
      .then(response => response.json())
      .then(data => this.setState({directhospitalcurrentstocks: data, isLoading: false}));
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
    const {directhospitalcurrentstocks, isLoading,filter,currentPage,dataPerPage} = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = directhospitalcurrentstocks.filter(item => {
      return Object.keys(item).some(key =>
        typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedFilter)
        // item[key].toLowerCase().includes(lowercasedFilter)
        );
    })


    const indexOfLastData=currentPage * dataPerPage;
    const indexOfFirstData=indexOfLastData - dataPerPage;
    const currentData=filteredData.slice(indexOfFirstData,indexOfLastData);

    const paginate = pageNumber => this.setState({currentPage:pageNumber});

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const groupList = filteredData.map(directhospitalcurrentstocks => {
      return <tr key={directhospitalcurrentstocks.id}>
        <td style={{whiteSpace: 'nowrap'}}>{directhospitalcurrentstocks.id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directhospitalcurrentstocks.batch_id}</td>
        {/* <td style={{whiteSpace: 'nowrap'}}>{directhospitalcurrentstocks.sr_no}</td> */}
        <td style={{whiteSpace: 'nowrap'}}>{directhospitalcurrentstocks.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directhospitalcurrentstocks.expire_date}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directhospitalcurrentstocks.available_quantity}</td>
      </tr>
    });
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
          <Col lg="5" >
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button type="button" color="primary"><i className="fa fa-search"></i></Button>
            </InputGroupAddon>
            <Input type="text" id="input1-group2" name="input1-group2" placeholder="Search a Medicine" 
            value={filter} onChange={this.handleChange}
            />
          </InputGroup> 
          <br></br>
          </Col>
            <Card>
              <CardHeader>
                Medicines
              </CardHeader>
              <CardBody>
                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th>ID</th>
                    <th>Batch No</th>
                    {/* <th>SR No</th> */}
                    <th>Name</th>
                    <th>Expiration Date</th>
                    <th>Available Quantity</th>
                  </tr>
                  </thead>
                  <tbody>
                  {groupList}
                  </tbody>
                </Table>
              </CardBody>
              <CardFooter>
              <Paginations dataPerPage={dataPerPage} totalData={filteredData.length} paginate={paginate}/>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DirectHospitalCurrentStock;
