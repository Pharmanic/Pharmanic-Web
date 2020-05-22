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
    this.state = {ministrydrivers: [], isLoading: true}; 
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/ministrydrivers')
      .then(response => response.json())
      .then(data => this.setState({ministrydrivers: data, isLoading: false}));
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
    const {ministrydrivers, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const groupList = ministrydrivers.map(ministrydriver => {
      return <tr key={ministrydriver.nic}>
        <td style={{whiteSpace: 'nowrap'}}>{ministrydriver.nic}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrydriver.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrydriver.email}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrydriver.address}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrydriver.telephone}</td>
      </tr>
    });
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Ministry Drivers
              </CardHeader>
              <CardBody>
                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center">NIC</th>
                    <th>Name</th>
                    <th className="text-center">Email</th>
                    <th>Address</th>
                    <th className="text-center">Telephone</th>
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
