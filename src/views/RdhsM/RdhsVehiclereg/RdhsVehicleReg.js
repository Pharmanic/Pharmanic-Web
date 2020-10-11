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



class rdhs_vehiclereg extends Component {

    emptyItem = {
        vehicle_no:'',
       capacity: '',
        type: ''
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

    await fetch('/rdhs_vehiclereg/add', {
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
                RDHS Vehicle Registration
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal">           
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Vehicle no</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="vehicle_no" name="vehicle_no" placeholder="vehicle_no" value={item.vehicle_no|| ''}
                            onChange={this.handleChange} autoComplete="vehicle_no" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Capacity</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="capacity" name="capacity" placeholder="capacity" value={item.capacity|| ''}
                            onChange={this.handleChange} autoComplete="capacity"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Type</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="type" name="type" placeholder="type" value={item.type|| ''}
                            onChange={this.handleChange} autoComplete="type"/>
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

export default rdhs_vehiclereg;
