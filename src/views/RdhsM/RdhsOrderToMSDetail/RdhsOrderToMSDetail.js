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
} from 'reactstrap';
import { Link } from 'react-router-dom';
//import RdhsOrderToMS from '../RdhsOrderToMS/RdhsOrderToMS';
import Paginations from './Pagination';


class RdhsOrderToMSDetail extends Component {
  

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {exportedstocks: [], isLoading: true,
      currentPage:1,
      dataPerPage:5}; 
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/rdhsexportedstocks')
      .then(response => response.json())
      .then(data => this.setState({exportedstocks: data, isLoading: false}));
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
    const {exportedstocks, isLoading,currentPage,dataPerPage} = this.state;
    const indexOfLastData=currentPage * dataPerPage;
    const indexOfFirstData=indexOfLastData - dataPerPage;
    const currentData=exportedstocks.slice(indexOfFirstData,indexOfLastData);

    const paginate = pageNumber => this.setState({currentPage:pageNumber});

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const groupList = currentData.map(exportedstock => {
      return <tr key={exportedstock.stock_id}>
        <td style={{whiteSpace: 'nowrap'}}>{exportedstock.stock_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{exportedstock.export_date}</td>
        <td style={{whiteSpace: 'nowrap'}}>{exportedstock.order_date}</td>
      </tr>
    });
    return (
      <div className="animated fadeIn">
       
        <Row>
          {/* <Col lg="5">
          <RdhsOrderToMS/>
          </Col> */}
          <Col lg="7">
            <Card style={{borderRadius:'20px'}}>
              <CardHeader style={{backgroundColor:'#1b8eb7',color:'white',borderRadius:'5px'}}>
              <i className="fa fa-align-justify"></i>  Ordered from Ministry Store details  
              </CardHeader>
              <CardBody>                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead style={{backgroundColor:'#244EAD', color:'white',borderRadius:'20px !important'}}>
                  <tr>
                    <th>Stock ID</th>
                    <th>Import Date</th>
                    <th>Order Date</th>
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
              <Paginations dataPerPage={dataPerPage} totalData={exportedstocks.length} paginate={paginate}/>
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

export default RdhsOrderToMSDetail;
