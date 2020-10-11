import React, { Component} from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button,
  CardFooter
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
//import RdhsExpiringMed from '../RdhsExpiringMed/RdhsExpiringMed';
import Paginations from './Pagination';


class RdhsExpiringMedD extends Component {
  

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {ministrydamagestocks: [], isLoading: true,
      currentPage:1,
        dataPerPage:5,}; 
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/rdhsdamagestocks')
      .then(response => response.json())
      .then(data => this.setState({ministrydamagestocks: data, isLoading: false}));
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
    const {rdhsdamagestocks, isLoading,currentPage,dataPerPage} = this.state;
    const indexOfLastData=currentPage * dataPerPage;
    const indexOfFirstData=indexOfLastData - dataPerPage;
    const currentData=rdhsdamagestocks.slice(indexOfFirstData,indexOfLastData);

    const paginate = pageNumber => this.setState({currentPage:pageNumber});

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const groupList = currentData.map(rdhsdamagestock => {
      return <tr key={rdhsdamagestock.did}>
        <td style={{whiteSpace: 'nowrap'}}>{rdhsdamagestock.batch_id.batch_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{rdhsdamagestock.date}</td>
        <td style={{whiteSpace: 'nowrap'}}>{rdhsdamagestock.quantity}</td>
        <td style={{whiteSpace: 'nowrap'}}>{rdhsdamagestock.reason}</td>
        <td>
        <Button size="sm" color="danger" onClick={() => {if(window.confirm('Are you sure you wish to delete this stock?')) this.remove(rdhsdamagestock.did)}}><i className="fa fa-trash"></i></Button>
        </td>   
      </tr>
    });
    return (
      <div className="animated fadeIn">
        <Row>
        {/* <Col lg="5">
          <DamageStockForm/>
          </Col> */}
          <Col lg="7">
            <Card>
              <CardHeader>
              <i className="fa fa-align-justify"></i> Damage Stock
              </CardHeader>
              <CardBody>                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th>Batch id</th>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Reason</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {groupList}
                  </tbody>
                </Table>
              </CardBody>
              <CardFooter>
              <Paginations dataPerPage={dataPerPage} totalData={rdhsdamagestocks.length} paginate={paginate}/>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RdhsExpiringMedD;

