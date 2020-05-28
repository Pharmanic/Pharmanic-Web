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
class RegisterHospitalByRDHS extends Component {

  emptyItem = {
    location: '',
    total_storage:'',
    available_storage:''

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

    await fetch('/ministry_store/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    })
    .then(res => res.json()) //returns array of data
    ;
    this.props.history.push('/ministry_stores/ministry_stores_list');
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
 }

 resetForm = () => { 
   this.setState({ item: this.emptyItem});
}
 
  render() {
    const {item} = this.state;
    const title = <h2>{'Add Group'}</h2>;

    return (
      <div className="animated fadeIn">

        <Row>
          <Col xs="12" md="8">
            <Card>
              <CardHeader>
                <strong>Hospital By RDHS Registration</strong>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal" id="ministryStoreForm">
                  {/*<FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Ministry Store ID</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="stock_id" name="stock_id" placeholder="Stock ID" value={item.stock_id|| ''}
                            onChange={this.handleChange} autoComplete="stock_id"/>
                    </Col>
                  </FormGroup>*/}
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Location</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="location" name="location" placeholder="Location"  initialValue="" value={item.location || ''}
                        onChange={this.handleChange} autoComplete="location" />
                    </Col>
                  </FormGroup>

                    <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Total Storage</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="total_storage" name="total_storage" placeholder="Total Storage" initialValue="" value={item.total_storage || ''}
                        onChange={this.handleChange} autoComplete="total_storage" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Avilable Storage</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="available_storage" name="available_storage" placeholder="Available Storage" initialValue="" value={item.available_storage || ''}
                        onChange={this.handleChange} autoComplete="available_storage" />
                    </Col>
                  </FormGroup>

                  
                  {/*<FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Order date</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="order_date" name="order_date" placeholder="Order Date" value={item.order_date|| ''}
                            onChange={this.handleChange} autoComplete="order_date"/>
                    </Col>
                  </FormGroup>*/}
                  {/*<FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" tag={Link} to="/directhospitals">Cancel</Button>
                   </FormGroup>*/}

                  <br />

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

export default RegisterHospitalByRDHS;
