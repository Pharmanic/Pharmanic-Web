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
    this.state = {medicines: [], isLoading: true}; 
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/medicines')
      .then(response => response.json())
      .then(data => this.setState({medicines: data, isLoading: false}));
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
    const {medicines, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const groupList = medicines.map(medicine => {
      return <tr key={medicine.sr_no}>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.sr_no}</td>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.side_effect}</td>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.description}</td>
      </tr>
    });
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Medicines
              </CardHeader>
              <CardBody>
                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center">SR No</th>
                    <th>Name</th>
                    <th className="text-center">Side Effects</th>
                    <th>Description</th>
                  
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
