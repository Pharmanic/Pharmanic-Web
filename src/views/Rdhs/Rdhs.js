import React, { Component} from 'react';
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


class CurrentStock extends Component {
  

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {rdhss: [], isLoading: true,filter:"",
        currentPage:1,
        dataPerPage:5,}; 
  }

  handleChange = event =>{
    this.setState({filter:event.target.value});
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/rdhss')
      .then(response => response.json())
      .then(data => this.setState({rdhss: data, isLoading: false}));
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
    const {rdhss, isLoading,filter,dataPerPage,currentPage} = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = rdhss.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedFilter)
        );
    })

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const indexOfLastData=currentPage * dataPerPage;
    const indexOfFirstData=indexOfLastData - dataPerPage;
    const currentData=filteredData.slice(indexOfFirstData,indexOfLastData);

    const paginate = pageNumber => this.setState({currentPage:pageNumber});

    const groupList = currentData.map(rdhs => {
      return <tr key={rdhs.reg_no}>
        <td style={{whiteSpace: 'nowrap'}}>{rdhs.reg_no}</td>
        <td style={{whiteSpace: 'nowrap'}}>{rdhs.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{rdhs.address}</td>
        <td style={{whiteSpace: 'nowrap'}}>{rdhs.email}</td>
        <td style={{whiteSpace: 'nowrap'}}>{rdhs.telephone}</td>
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
            <Input type="text" id="input1-group2" name="input1-group2" placeholder="Search a RDHS" value={filter} onChange={this.handleChange}/>
          </InputGroup> 
          <br></br>
          </Col>
          </Row>
            <Card style={{borderRadius:'20px'}}>
              <CardHeader style={{backgroundColor:'#1b8eb7',color:'white',borderRadius:'5px'}}>
                <b>Regional Department Of Health Services (RDHS)</b>
              </CardHeader>
              <CardBody>
                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead style={{backgroundColor:'#244EAD', color:'white',borderRadius:'20px !important'}}>
                  <tr>
                    <th>Reg No</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Telephone</th>
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
              <Paginations dataPerPage={dataPerPage} totalData={filteredData.length} paginate={paginate}/>
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
