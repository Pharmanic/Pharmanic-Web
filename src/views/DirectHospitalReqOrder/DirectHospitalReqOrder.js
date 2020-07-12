
import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

class CurrentStock extends Component {
  

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {directhospitalrequestorders: [], isLoading: true}; 
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/dhrequestordersnotcoplete')
      .then(response => response.json())
      .then(data => this.setState({directhospitalrequestorders: data, isLoading: false}));
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  async close(id) {
    await fetch(`/closeorder/${id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
     
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }
 
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const {directhospitalrequestorders, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }
    

    const groupList = directhospitalrequestorders.map(directhospitalrequestorder => {
      return <tr key={directhospitalrequestorder.order_id} >
        <td style={{whiteSpace: 'nowrap'}}>{directhospitalrequestorder.order_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directhospitalrequestorder.hospital_reg_no.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directhospitalrequestorder.m_store_id.location}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directhospitalrequestorder.date}</td>
        <td>  <Button block outline color="info" tag={Link} to={"/dhreqorderdetail/"+directhospitalrequestorder.order_id}>More Info</Button>  </td>
        {/* <td><Button size="sm" color="danger" onClick={() => {if(window.confirm('Are you sure you wish to close this order?You cant reverse this task')) this.close(directhospitalrequestorder.order_id)}}>Close Order</Button></td> */}
      </tr>
    });

  

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card style={{borderRadius:'20px'}}>
              <CardHeader style={{backgroundColor:'#1b8eb7',color:'white',borderRadius:'5px'}}>
                Direct Hospital Request Orders
              </CardHeader>
              <CardBody>
                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead style={{backgroundColor:'#244EAD', color:'white',borderRadius:'20px !important'}}>
                  <tr>
                    <th>Order ID</th>
                    <th>Hospital</th>
                    <th>Warehouse</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  {groupList}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>   
        <Link to="/direct_hospital_request_order_form">
          <Button className="btn-primary btn-pill" >New Order</Button>
        </Link>
      </div>
    );
  }
}

export default CurrentStock;
