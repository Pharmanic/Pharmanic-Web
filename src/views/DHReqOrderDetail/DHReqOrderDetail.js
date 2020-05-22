import React, { Component} from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';


class DHReqOrderDetail extends Component {
  

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {dhreqorderdetails: [], isLoading: true}; 
  }

  componentDidMount() {
    // if (this.props.match.params.id !== 'new') {
    //     const group = await (await fetch(`/dhreqorderdetails/${this.props.match.params.id}`)).json();
    //     this.setState({item: group});
    //   }
    this.setState({isLoading: true});
    console.log('param',this.props.match.params.id);
    fetch(`/dhreqorderdetails/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => this.setState({dhreqorderdetails: data, isLoading: false}));

    
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
    const {dhreqorderdetails, isLoading} = this.state;
    console.log('reqlist',dhreqorderdetails);
    if (isLoading) {
      return <p>Loading...</p>;
    }

    const groupList = dhreqorderdetails.map(dhreqorderdetail => {
      return <tr key={dhreqorderdetail.id}>
        <td style={{whiteSpace: 'nowrap'}}>{dhreqorderdetail.order_id.order_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{dhreqorderdetail.sr_no.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{dhreqorderdetail.quantity}</td>
        <td style={{whiteSpace: 'nowrap'}}>{dhreqorderdetail.order_id.m_store_id.m_store_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>
              {dhreqorderdetail.can_supply_status===1?
                'available'
            :'notavailable'}
        </td>
      <td style={{whiteSpace: 'nowrap'}}>
      <Button block outline color="info">Supply Order</Button>
      </td>
      </tr>
    });

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Damage Stock
              </CardHeader>
              <CardBody>                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th>Order ID</th>
                    <th>Medicine</th>
                    <th>Quantity</th>
                    <th>Ministry store ID</th>
                    <th>Can supply status</th>
                  </tr>
                  </thead>
                  <tbody>
                  {groupList}
                  </tbody>
                </Table>
                <Button block outline color="info" tag={Link} to="/ministry/directhospitalreqorder">Go Back</Button> 
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DHReqOrderDetail;
