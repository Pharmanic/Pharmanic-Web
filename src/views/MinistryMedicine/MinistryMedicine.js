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




class CurrentStock extends Component {
  

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {medicines: [], isLoading: true,filter:"",
    currentPage:1,
    dataPerPage:5,}; 
  }

  handleChange = event =>{
    this.setState({filter:event.target.value});
  }

   componentDidMount() {
    this.setState({isLoading: true});

    fetch('/medicines')
   .then(response => response.json())
     .then(data => this.setState({medicines: data, isLoading: false}));
  }

  async remove(id){
    await fetch('/deletemedicine/${id}',{
        method: 'DELETE',
        headers:{
            'Accept':'application/json',
            'content-type':'application/json'

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
    const {medicines, isLoading,filter,currentPage,dataPerPage} = this.state;
    const lowercasedFilter = filter.toLowerCase();
    const filteredData = medicines.filter(item => {
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

    const groupList = filteredData.map(medicine => {
      return <tr key={medicine.sr_no}>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.sr_no}</td>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.side_effect}</td>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.description}</td>
        <td style={{whiteSpace: 'nowrap'}}>
            <Button size="sm" color="danger" onClick={() => {if(window.confirm('Are you sure you wish to delete this stock?')) this.remove(ministrydriver.nic)}}><i className="fa fa-trash"></i></Button> 
      </td>
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
            <Input type="text" id="input1-group2" name="input1-group2" placeholder="Search a Medicine" value={filter} onChange={this.handleChange}/>
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
                    <th>SR No</th>
                    <th>Name</th>
                    <th>Side Effects</th>
                    <th>Description</th>
                 
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
