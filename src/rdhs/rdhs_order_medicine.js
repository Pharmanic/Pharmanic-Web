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
class rdhs_order_medicine extends Component {

  emptyItem = {
    sr_no: '',
    name: '',
    quantity: '',
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

    var regx=/^[1-9]+$/;
    var vall1=document.getElementById('sr_no').value;
    if(!regx.test(vall1)){
        alert('please enter a valid data');
        document.getElementById('sr_no').value="";
        document.getElementById('sr_no').style.borderColor="";
    }
    const {item} = this.state;

    await fetch('/rdhs/rdhs_order_medicine', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    })
      .then(res => console.log(res)) //returns array of data
      console.log();
      ;
    this.props.history.push('/rdhs/rdhs_order_medicine');
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
              <CardHeader style={{ backgroundColor: '#7CA2A9', color: 'white', borderRadius: '5px' }}>
                <b>RDHS Medicine Order</b>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal" id="ministryStoreForm">
                  
                <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">SR number</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="sr_no" name="sr_no" placeholder="SR number" initialValue="" value={item.sr_no || ''}
                        onChange={this.handleChange} required autoComplete="sr_no" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Medicine name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name" name="name" placeholder="Name" initialValue="" value={item.name || ''}
                        onChange={this.handleChange} required autoComplete="name" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Order Quantity</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="quantity" name="quantity" placeholder="quantity" initialValue="" value={item.quantity || ''}
                        onChange={this.handleChange} required autoComplete="quantity" />
                    </Col>
                  </FormGroup>

                  <FormGroup>
                  <Link to='/rdhs/rdhs_order_medicine'> <Button type="submit" size="lm" color="success"><i className="fa fa-dot-circle-o"></i>Place order</Button></Link>{' '}
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

export default rdhs_order_medicine;
