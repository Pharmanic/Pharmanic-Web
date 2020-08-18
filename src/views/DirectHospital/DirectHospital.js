import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Input,
  InputGroupAddon,
  InputGroup,
  Button,
  CardFooter
} from 'reactstrap';
import Paginations from './Pagination';


class CurrentStock extends Component {
  

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {directhospitals: [], isLoading: true,filter:"",
    currentPage:1,
    dataPerPage:5,}; 
  }

  handleChange = event =>{
    this.setState({filter:event.target.value});
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/directhospitals')
      .then(response => response.json())
      .then(data => this.setState({directhospitals: data, isLoading: false}));
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
    const {directhospitals, isLoading,filter,currentPage,dataPerPage} = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = directhospitals.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
        );
    })


    const indexOfLastData=currentPage * dataPerPage;
    const indexOfFirstData=indexOfLastData - dataPerPage;
    const currentData=filteredData.slice(indexOfFirstData,indexOfLastData);

    const paginate = pageNumber => this.setState({currentPage:pageNumber});



    if (isLoading) {
      return <p>Loading...</p>;
    }

    const groupList = currentData.map(directhospital => {
      return <tr key={directhospital.reg_no}>
        <td style={{whiteSpace: 'nowrap'}}>{directhospital.reg_no}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directhospital.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directhospital.address}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directhospital.email}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directhospital.telephone}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directhospital.doctor_incharge}</td>
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
            <Input type="text" id="input1-group2" name="input1-group2" placeholder="Search a Direct Hospital" value={filter} onChange={this.handleChange}/>
          </InputGroup> 
          <br></br>
          </Col>
            <Card>
              <CardHeader>
                Direct Hospitals
              </CardHeader>
              <CardBody>
                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th>Reg No</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Telephone</th>
                    <th>Doctor Incharge</th>
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

export default CurrentStock;
