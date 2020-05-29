import React, { Component} from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from 'reactstrap';



class MinistryStores extends Component {
  

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {ministrystores: [], isLoading: true}; 
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/ministrystores')
      .then(response => response.json())
      .then(data => this.setState({ministrystores: data, isLoading: false}));
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
    const {ministrystores, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const groupList = ministrystores.map(ministrystore => {
      return <tr key={ministrystore.m_store_id}>
        <td style={{whiteSpace: 'nowrap'}}>{ministrystore.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrystore.email}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrystore.tel_no}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrystore.location}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrystore.total_storage}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrystore.avilable_storage}</td>
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
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>Tel No</th>
                    <th>Location</th>
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

export default MinistryStores;
