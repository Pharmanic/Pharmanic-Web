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
    this.state = {directhospitals: [], isLoading: true}; 
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/directhospitals')
      .then(response => response.json())
      .then(data => this.setState({directhospitals: data, isLoading: false}));
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
    const {directhospitals, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const groupList = directhospitals.map(directhospital => {
      return <tr key={directhospital.reg_no}>
        <td style={{whiteSpace: 'nowrap'}}>{directhospital.reg_no}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directhospital.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directhospital.address}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directhospital.email}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directhospital.telephone}</td>
        <td style={{whiteSpace: 'nowrap'}}>{directhospital.doctor_incharge}</td>
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
                    <th className="text-center">Reg No</th>
                    <th>Name</th>
                    <th className="text-center">Address</th>
                    <th>Email</th>
                    <th className="text-center">Telephone</th>
                    <th>Doctor Incharge</th>
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
