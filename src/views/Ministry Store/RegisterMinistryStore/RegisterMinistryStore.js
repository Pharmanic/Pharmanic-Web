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
import authHeader from '../../../assets/services/auth-header_res';

class RegisterMinistryStore extends Component {

  emptyItem = {
    m_store_id:'',
    name: '',
    email: '',
    tel_no: '',
    location: '',
    total_storage: '',
    available_storage: ''

  };
  user_type:'ministry';

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
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),

      },
      body: JSON.stringify(item),
    })
      .then(res => console.log(res)) //returns array of data
      console.log();
      ;
      if(this.state.user_type='ministry'){
            this.props.history.push('/ministry/ministry_stores/ministry_stores_list'); // should remove "/ministry" and add a variable
      }else{
            this.props.history.push('/ministry_stores/ministry_stores_list'); // should remove "/ministry" and add a variable

      } // navigation according to the user type
      //
      ///
      //
      //
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
                <b>Ministry Ware Houses Registration</b>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal" id="ministryStoreForm">
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Ministry store ID</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="m_store_id" name="m_store_id" placeholder="Ministry Store ID" initialValue="" value={item.m_store_id || ''}
                        onChange={this.handleChange} autoComplete="m_store_id" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name" name="name" placeholder="Name" initialValue="" value={item.name || ''}
                        onChange={this.handleChange} autoComplete="name" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">E-Mail</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="email" name="email" placeholder="E-Mail" initialValue="" value={item.email || ''}
                        onChange={this.handleChange} autoComplete="email" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Telephone No</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="tel_no" name="tel_no" placeholder="Tel_no" initialValue="" value={item.tel_no || ''}
                        onChange={this.handleChange} autoComplete="tel_no" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Location</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="location" name="location" placeholder="Location" initialValue="" value={item.location || ''}
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

export default RegisterMinistryStore;
