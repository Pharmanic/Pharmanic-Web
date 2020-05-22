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
class CurrentStockForm extends Component {

    emptyItem = {
        reg_no:'',
        name: '',
        address: '',
        email: '',
        telephone: '',
        doctor_incharge: ''
      };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      item:this.emptyItem,
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
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('/directhospital/add', {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/directhospitals');
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    const {item} = this.state;
    const title = <h2>{'Add Group'}</h2>;

    return (
      <div className="animated fadeIn">
        
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Basic Form</strong> Elements
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal">           
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Reg No</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="reg_no" name="reg_no" placeholder="Registration No" value={item.reg_no|| ''}
                            onChange={this.handleChange} autoComplete="reg_no"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name" name="name" placeholder="Name" value={item.name|| ''}
                            onChange={this.handleChange} autoComplete="name"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="address" name="address" placeholder="Address" value={item.address|| ''}
                            onChange={this.handleChange} autoComplete="address"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email-input">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="email" name="email" placeholder="Enter Email" value={item.email|| ''}
                            onChange={this.handleChange} autoComplete="email"/>
                      <FormText className="help-block">Please enter your email</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Telephone</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="telephone" name="telephone" placeholder="Telephone" value={item.telephone|| ''}
                            onChange={this.handleChange} autoComplete="telephone"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Doctor Incharge</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="doctor_incharge" name="doctor_incharge" placeholder="Telephone" value={item.doctor_incharge|| ''}
                            onChange={this.handleChange} autoComplete="doctor_incharge"/>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" tag={Link} to="/directhospitals">Cancel</Button>
                   </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
            </Card>           
          </Col>
        </Row>
      </div>
    );
  }
}

export default CurrentStockForm;
