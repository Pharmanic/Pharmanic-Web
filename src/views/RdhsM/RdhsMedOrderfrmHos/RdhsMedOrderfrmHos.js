
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

class RdhsMedOrderfrmHos extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
        this.state = {hosrequestorders: [], isLoading: true}; 
      }
    
      componentDidMount() {
        this.setState({isLoading: true});
    
        fetch('/hosrequestorders')
          .then(response => response.json())
          .then(data => this.setState({hosrequestorders: data, isLoading: false}));
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
        const {hosrequestorders, isLoading} = this.state;
    
        if (isLoading) {
          return <p>Loading...</p>;
        }
        
    
        const groupList = hosrequestorders.map(hosrequestorder=> {
          return <tr key={hosrequestorder.order_id} >
            <td style={{whiteSpace: 'nowrap'}}>{hosrequestorder.order_id}</td>
            <td style={{whiteSpace: 'nowrap'}}>{hosrequestorder.hos_reg_no.name}</td>
            <td style={{whiteSpace: 'nowrap'}}>{hosrequestorder.r_store_id.location}</td>
            <td style={{whiteSpace: 'nowrap'}}>{hosrequestorder.date}</td>
            <td>  <Button block outline color="info"tag={Link} to={"/rdhsMedOrderfrmHosDetails/"+hosrequestorder.order_id} >Click for Order Details</Button>  </td>
          </tr>
        });
    
      
    
        return (
          <div className="animated fadeIn">
            <Row>
              <Col>
                <Card>
                  <CardHeader>
                   Hospitals medicine orders
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
export default RdhsMedOrderfrmHos;
