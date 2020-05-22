import React, { Component} from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from 'reactstrap';



class CurrentStock extends Component {
  

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {ministrycurrentstocks: [], isLoading: true}; 
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/ministrycurrentstocks')
      .then(response => response.json())
      .then(data => this.setState({ministrycurrentstocks: data, isLoading: false}));
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
    const {ministrycurrentstocks, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const groupList = ministrycurrentstocks.map(ministrycurrentstock => {
      return <tr key={ministrycurrentstock.batch_id}>
        <td style={{whiteSpace: 'nowrap'}}>{ministrycurrentstock.batch_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrycurrentstock.m_store_id.location}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrycurrentstock.sr_no.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrycurrentstock.expire_date}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrycurrentstock.available_quantity}</td>      
      </tr>
    });
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Current Stock
              </CardHeader>
              <CardBody>                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center">Batch ID</th>
                    <th>Warehouse</th>
                    <th className="text-center">Name</th>
                    <th>Expire Date</th>
                    <th className="text-center">Available Quantity</th>
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
