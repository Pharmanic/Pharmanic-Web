import React, { Component } from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
class RegisterVehicles extends Component {

  emptyItem = {
    reg_no:'',
    name: '',
    address: '',
    email: '',
    telephone: '',
    LicenNO: ''

  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      item: this.emptyItem,
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ item });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('/ministry_vehicle/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    })
      .then(res => res.json()) //returns array of data
      ;
    this.props.history.push('/ministry_vehicles/ministry_vehicles_list');
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

  resetForm = () => {
    this.setState({ item: this.emptyItem });
  }

  render() {
    const {item} = this.state;
    const title = <h2>{'Add Group'}</h2>;

    return (
      <div className="animated fadeIn">

        <Row>
          <Col xs="12" md="8">
            <Card>
              <CardHeader style={{ backgroundColor: '#1b8eb7', color: 'white', borderRadius: '5px' }}>
                <b>Ministry Vehicles Registration</b>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal" id="VehicleForm">


                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> Vehicle No</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="vehicle_no" name="vehicle_no" placeholder="vehicle No" initialValue="" value={item.vehicle_no || ''}
                        onChange={this.handleChange} required autoComplete="vehicle_no" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Vehicle Type</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="type" name="type" placeholder="Vehicle type van,car,lorry" initialValue="" value={item.type || ''}
                        onChange={this.handleChange} required autoComplete="type" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Vehicle Capacity</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="capacity" name="capacity" placeholder="Capacity" initialValue="" value={item.capacity || ''}
                        onChange={this.handleChange} required autoComplete="capacity" />
                    </Col>
                  </FormGroup>


                  <FormGroup>
                    <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>{' '}
                    <Button type="reset" size="sm" color="danger" onClick={this.resetForm}><i className="fa fa-ban"></i> Reset</Button>
                  </FormGroup>

                </Form>
              </CardBody>
              {/*<CardFooter>*/}
              {/*<Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>{' '}
                  <Button type="reset" size="sm" color="danger" tag={Link} to="/ministry_stores/ministry_stores_list"><i className="fa fa-ban"></i> Reset</Button>*/}
              {/*</CardFooter>*/}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RegisterVehicles;
