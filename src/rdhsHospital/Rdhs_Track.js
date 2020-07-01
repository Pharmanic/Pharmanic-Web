import React, { Component } from 'react';
import {Container,Input,Button,Label,Form,FormGroup,Table, Card,
    CardBody, Row,
    CardFooter,
    CardHeader,
    Col,} from 'reactstrap';
import { Link } from 'react-router-dom';

class Rdhs_Track extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="animated fadeIn">
         <Row>
              <Col xs="15" md="8">
                <Card>
                  <CardHeader>
                    <strong>Enter Track Details</strong> 
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal">           
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">Driver NIC</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="driver_nic" name="driver_nic" placeholder="Enter Driver NIC"/>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="text-input">SR Number</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input type="text" id="vehicle_no" name="vehicle_no" placeholder="Enter Vehicle Number"></Input>
                        </Col>
                      </FormGroup>
                    
                      <FormGroup>
                        <Button color="success" type="submit">Confirm Track</Button>{' '}
                        <Button color="primary" tag={Link} to="/directhospitals">Cancel</Button>
                       </FormGroup>
                    
                    </Form>
                  </CardBody>
                </Card>           
              </Col>
            </Row>
          </div>

         );
    }
}
 
export default Rdhs_Track;