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



class rdhs_driverreg extends Component {

    emptyItem = {
        nic:'',
        name: '',
        email: '',
        address:'',
        telephone:''
      };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      item:this.emptyItem,
      collapse: true,
      fadeIn: true,
      timeout: 300,
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

    await fetch('/rdhs_driverreg/add', {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.setState({
      item:this.emptyItem
    });
   // this.props.history.push('/exportedstocks');
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
          <Col>
            <Card>
              <CardHeader>
                RDHS Driver Registration
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal">           
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">NIC</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="nic" name="nic" placeholder="NIC" value={item.nic|| ''}
                            onChange={this.handleChange} autoComplete="nic" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Driver's name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name" name="name" placeholder="name" value={item.name|| ''}
                            onChange={this.handleChange} autoComplete="name"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="email" name="email" placeholder="email" value={item.email|| ''}
                            onChange={this.handleChange} autoComplete="email"/>
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
                      <Label htmlFor="text-input">Telephone number</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="telephone" name="telephone" placeholder="Telephone number" value={item.telephone|| ''}
                            onChange={this.handleChange} autoComplete="telephone"/>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Button size="lm" color="primary" type="submit"> <i className="fa fa-dot-circle-o"></i>Submit</Button>{' '}{' '}{' '}{' '}{' '}{' '}
                    <Button size="lm" color="danger"><i className="fa fa-ban"></i>Cancel</Button>
                    <div style={{float: 'right'}}>
                    <Button size="lm" color="primary"tag={Link} to="/rdhs_reg">Back</Button>
                    </div>
                   </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>           
          </Col>
        </Row>
      </div>
    );
  }
}

export default rdhs_driverreg;
