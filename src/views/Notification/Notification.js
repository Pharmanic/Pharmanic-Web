import React, { Component } from 'react';
import { Alert, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Alerts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true, ministrynearestexpiringlist: [],dhrequestordersnotcoplete:[],rdhsrequestordersnotcomplete:[]
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/ministrynearestexpiringlist')
      .then(response => response.json())
      .then(data => this.setState({ministrynearestexpiringlist: data, isLoading: false}));

    fetch('/dhrequestordersnotcoplete')
      .then(response => response.json())
      .then(data => this.setState({dhrequestordersnotcoplete: data, isLoading: false}));

      fetch('/rdhsrequestordersnotcomplete')
      .then(response => response.json())
      .then(data => this.setState({rdhsrequestordersnotcomplete: data, isLoading: false}));

  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    const {ministrynearestexpiringlist,isLoading,dhrequestordersnotcoplete,rdhsrequestordersnotcomplete} = this.state;

    const groupList = ministrynearestexpiringlist.map(ministrynearestexpiring => {
      return<Alert color="danger" key={ministrynearestexpiring.batch_id}>
      <div>{ministrynearestexpiring.batch_id}</div>
        <div>{ministrynearestexpiring.sr_no.name}</div>
        <div>You have a medicine expiring at your nearest </div>
        <small className="text-muted mr-3">
                  <i className="icon-calendar"></i>&nbsp; {ministrynearestexpiring.expire_date}
        </small>
        <small className="text-muted">
                  <i className="icon-location-pin"></i> {ministrynearestexpiring.m_store_id.location}
        </small>
        
    </Alert>
    });

    const groupList2 = dhrequestordersnotcoplete.map(dhrequestorder => {
      return<Alert color="warning" key={dhrequestorder.order_id}>
      <div>You have a request from {dhrequestorder.hospital_reg_no.reg_no}</div>
        <div>Ministry store:-{dhrequestorder.m_store_id.m_store_id}</div>
        
    </Alert>
    });

    const groupList3 = rdhsrequestordersnotcomplete.map(rdhsrequestorders => {
      return<Alert color="warning" key={rdhsrequestorders.order_id}>
      <div>You have a request from {rdhsrequestorders.rdhs_reg_no.reg_no}</div>
        <div>Ministry store:-{rdhsrequestorders.m_store_id.m_store_id}</div>
        
    </Alert>
    });

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Nearest Expired</strong>
                <div className="card-header-actions">
                 
                </div>
              </CardHeader>
              <CardBody>
                {groupList}
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Orders by LM Hospitals</strong>
                
              </CardHeader>
              <CardBody>
                {groupList2}
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Orders by RDHS</strong>
                <div className="card-header-actions">
                  
                </div>
              </CardHeader>
              <CardBody>
                {groupList3}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
         
          </Col>
        </Row>
      </div>
    );
  }
}

export default Alerts;
