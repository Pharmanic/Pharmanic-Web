import React, { Component } from 'react';
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
    this.state = {ministryvehicles: [], isLoading: true}; 
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/ministryvehicles')
      .then(response => response.json())
      .then(data => this.setState({ministryvehicles: data, isLoading: false}));
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
    const {ministryvehicles, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const groupList = ministryvehicles.map(ministryvehicle => {
      return <tr key={ministryvehicle.vehicle_no}>
        <td style={{whiteSpace: 'nowrap'}}>{ministryvehicle.vehicle_no}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministryvehicle.type}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministryvehicle.capacity}</td>
      </tr>
    });
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Ministry Vehicles
              </CardHeader>
              <CardBody>
                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center">Vehicle Number</th>
                    <th>Type</th>
                    <th className="text-center">Capacity (T)</th>                  
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
