
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
    this.state = {rdhsrequestorders: [], isLoading: true}; 
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/rdhsrequestorders')
      .then(response => response.json())
      .then(data => this.setState({rdhsrequestorders: data, isLoading: false}));
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
    const {rdhsrequestorders, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }
    

    const groupList = rdhsrequestorders.map(rdhsrequestorder=> {
      return <tr key={rdhsrequestorder.order_id} >
        <td style={{whiteSpace: 'nowrap'}}>{rdhsrequestorder.order_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{rdhsrequestorder.rdhs_reg_no.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{rdhsrequestorder.m_store_id.location}</td>
        <td style={{whiteSpace: 'nowrap'}}>{rdhsrequestorder.date}</td>
        <td>  <Button block outline color="info"tag={Link} to={"/rdhsreqorderdetail/"+rdhsrequestorder.order_id} >More Info</Button>  </td>
        <td><Button size="sm" color="danger" onClick={() => {if(window.confirm('Are you sure you wish to close this order?You cant reverse this task')) this.close(rdhsrequestorder.order_id)}}>Close Order</Button></td>
      </tr>
    });

  

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Direct Hospitals
              </CardHeader>
              <CardBody>
                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
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

        
       
         
        
     
   
      </div>
    );
  }
}

export default CurrentStock;
