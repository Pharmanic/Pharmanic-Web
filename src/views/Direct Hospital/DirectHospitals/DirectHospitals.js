import React, { Component} from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from 'reactstrap';



class DirectHospitals extends Component {
  

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {directHospitals: [], isLoading: true}; 
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/directHospitals')
      .then(response => response.json())
      .then(data => this.setState({directHospitals: data, isLoading: false}));
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
    const {directHospitals, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const groupList = directHospitals.map(directHospital => {
      return <tr key={directHospital.m_store_id}>
        <td style={{whiteSpace: 'nowrap'}}>{directHospital.location}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directHospital.total_storage}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directHospital.avilable_storage}</td>
      </tr>
    });
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Ministry Ware Houses
              </CardHeader>
              <CardBody>
                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center">Location</th>
                    <th>Total Storage</th>
                    <th>Available Storage</th>
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

export default DirectHospitals;
