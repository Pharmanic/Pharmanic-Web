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
class RegisterMedicine extends Component {

  emptyItem = {
    sr_no:'',
    name: '',
    description: '',
    side_effect: ''
   

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

    await fetch('/Mediciness/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    })
      .then(res => res.json()) //returns array of data
      ;
    this.props.history.push('/ministry_medicines/ministry_medicine_list');
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
                <b>Ministry Medicine Registration</b>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal" id="medicineForm">


                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"> Sr No</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="sr_no" name="sr_no" placeholder="SR No" initialValue="" value={item.sr_no || ''}
                        onChange={this.handleChange}required autoComplete="sr_no" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name" name="name" placeholder="Medicine Name" initialValue="" value={item.name || ''}
                        onChange={this.handleChange} required autoComplete="name" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Side effects</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="side_effect" name="side_effect" placeholder="Side effects" initialValue="" value={item.side_effect || ''}
                        onChange={this.handleChange} required autoComplete="side_effect" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Description</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="description" name="description" placeholder="Description of the medicine" initialValue="" value={item.description || ''}
                        onChange={this.handleChange} required autoComplete="description" />
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

export default RegisterMedicine;
