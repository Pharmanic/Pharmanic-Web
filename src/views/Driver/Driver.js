import React, { Component} from 'react';
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
    this.state = {ministrydrivers: [], isLoading: true,filter:"",
    currentPage:1,
    dataPerPage:5,}; 
  }

  handleChange = event =>{
    this.setState({filter:event.target.value});
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/ministrydrivers')
     .then(response => response.json())
     .then(data => this.setState({ministrydrivers: data, isLoading: false}));
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
    const {ministrydrivers, isLoading,filter,dataPerPage,currentPage} = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = ministrydrivers.filter(item => {
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

    const groupList = currentData.map(ministrydriver => {
      return <tr key={ministrydriver.nic}>
        <td style={{whiteSpace: 'nowrap'}}>{ministrydriver.nic}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrydriver.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrydriver.email}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrydriver.address}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrydriver.telephone}</td>
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
            <Input type="text" id="input1-group2" name="input1-group2" placeholder="Search a Driver" value={filter} onChange={this.handleChange}/>
          </InputGroup> 
          <br></br>
          </Col>
            <Card>
              <CardHeader>
                Ministry Drivers
              </CardHeader>
              <CardBody>
                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th>NIC</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Telephone</th>
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
