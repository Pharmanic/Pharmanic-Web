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

// const validEmailRegex = RegExp(
//   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
// );
// const validateForm = errors => {
//   let valid = true;
//   Object.values(errors).forEach(val => val.length > 0 && (valid = false));
//   return valid;
// };
class rdhs_driverreg extends Component {

  emptyItem = {
    name: '',
    nic: '',
    address: '',
    email: '',
    tel_no: '',
    // errors:{
    //   nic: '',
    //   email: '',
    //  tel_no: '',
    // }
    
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
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ item });
    // let errors = this.state.errors;

    // switch (name) {
    //   case 'nic': 
    //     errors.nic = 
    //       value.length < 10
    //         ? 'nic must be at 10 characters long!'
    //         : '';
    //     break;
    //   case 'email': 
    //     errors.email = 
    //       validEmailRegex.test(value)
    //         ? ''
    //         : 'Email is not valid!';
    //     break;
    //     case 'tel_no': 
    //     errors.tel_no = 
    //       value.length < 10
    //         ? 'number must be at 10 characters long!'
    //         : '';
    //     break;
    //   default:
    //     break;
    // }
    // this.setState({errors, [name]: value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;
    // if(validateForm(this.state.errors)) {
    //   console.info('Valid Form')
    // }else{
    //   console.error('Invalid Form')
    // }

    await fetch('/rdhs/rdhs_driverreg', {
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
    this.props.history.push('/ministry_stores/ministry_stores_list');
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
   // const {errors} = this.state;
    const {item} = this.state;
    const title = <h2>{'Add Group'}</h2>;

    return (
      <div className="animated fadeIn">

        <Row>
          <Col xs="12" md="8">
            <Card>
              <CardHeader style={{ backgroundColor: '#1b8eb7', color: 'white', borderRadius: '5px' }}>
                <b>RDHS Driver Registration</b>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal" id="ministryStoreForm">
                  
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Driver Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name" name="name" placeholder="Name" initialValue="" value={item.name || ''}
                        onChange={this.handleChange} />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">NIC number</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="nic" name="nic" placeholder="NIC number" initialValue="" value={item.nic || ''}
                        onChange={this.handleChange} noValidate />
                    </Col>
                    
                    {/* {errors.nic.length > 0 && 
                <span className='error'>{errors.nic}</span>} */}
                  
                   
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="address" name="address" placeholder="Address" initialValue="" value={item.address || ''}
                        onChange={this.handleChange} />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">E-Mail</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="email" name="email" placeholder="E-Mail" initialValue="" value={item.email || ''}
                        onChange={this.handleChange} noValidate />
                    </Col>
                    {/* {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>} */}
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Telephone No</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="tel_no" name="tel_no" placeholder="Tel_no" initialValue="" value={item.tel_no || ''}
                        onChange={this.handleChange} noValidate />
                    </Col>
                    {/* {errors.tel_no.length > 0 && 
                <span className='error'>{errors.tel_no}</span>} */}
                  </FormGroup>

                  <FormGroup>
                  <Link to='/rdhs/rdhs_driverreg'><Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button></Link>
                    <Button type="reset" size="sm" color="danger" onClick={this.resetForm}><i className="fa fa-ban"></i> Reset</Button>
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

export default rdhs_driverreg;
