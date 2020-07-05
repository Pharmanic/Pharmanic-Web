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
class RegisterUser extends Component {

  emptyItem = {
    reg_no: '',
    name: '',
    address: '',
    email: '',
    telephone: '',
    rdhs: {
      reg_no: '',
      address: '',
      email: '',
      name: '',
      telephone: ''
    },
    rdhs_hospital: {
      reg_no: '',
      address: '',
      doc_incharge: '',
      email: '',
      name: '',
      telephone: '',
      rdhs_id: '',
    },
     direct_hospital: {
      reg_no: '',
      address: '',
      doc_incharge: '',
      email: '',
      name: '',
      telephone: ''
    }

  };
  // showDirectHospital=



  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      item: this.emptyItem,
      showRDHS: false,
      showDirectHospital: false,
      showRDHSHospital: false,
      collapse: true,
      fadeIn: true,
      timeout: 300,
      rdhss: [],
      rdhs_hospitals: [],
      direct_hospitals: []

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('/rdhs_list')
      .then(response => response.json())
      .then(data => this.setState({ rdhss: data }));

    fetch('/hospital_by_rdhs/hospital_by_rdhs_list')
      .then(response => response.json())
      .then(data => this.setState({ rdhs_hospitals: data }));

    fetch('/direct_hospital/direct_hospital_list')
      .then(response => response.json())
      .then(data => this.setState({ direct_hospitals: data }));

    // fetch('/medicines')
    // .then(response => response.json())
    // .then(data => this.setState({medicines: data, isLoading: false}));

    // fetch('/ministrycurrentstocks')
    // .then(response => response.json())
    // .then(data => this.setState({ministrycurrentstocks: data, isLoading: false}));

  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = { ...this.state.item };
    // item[name] = value;
    // this.setState({ item });

    if (name == 'rdhs') {
      const rdhss = this.state.rdhss;
      const rdhs_hospitals = this.state.rdhs_hospitals;
      const direct_hospitals = this.state.direct_hospitals;
      // console.log('rdhss', rdhss);
      const rdhs = rdhss.find(rdhs => rdhs.reg_no == target.value);
      console.log('rdhsjjj', rdhs.reg_no);
      item[name] = rdhs;
      this.setState({ item });
      console.log('item', item);
    } else if (name == 'rdhs_hospital') {
      const rdhs_hospitals = this.state.rdhs_hospitals;
      // console.log('rdhss', rdhss);
      const rdhs_hospital = rdhs_hospitals.find(rdhs_hospital => rdhs_hospital.reg_no == target.value);
      console.log('rdhsHosjjj', rdhs_hospital.reg_no);
      item[name] = rdhs_hospital;
      this.setState({ item });
      console.log('item', item);
    } else if (name == 'direct_hospital') {
      const direct_hospitals = this.state.direct_hospitals;
      // console.log('rdhss', rdhss);
      const direct_hospital = direct_hospitals.find(direct_hospital => direct_hospital.reg_no == target.value);
      console.log('direct_hospital', direct_hospital.reg_no);
      item[name] = direct_hospital;
      this.setState({ item });
      console.log('item', item);
    } else {
      item[name] = value;
      this.setState({ item });
      console.log('item', item);
    }
  }

  handleType(event) {

    const target = event.target;
    const value = target.value;
    if (value == "MinistryUser") {
      console.log("Ministry User");
    } else if (value == "RDHS") {
      // let val = { ...this.state.item };
      // item[name] = value;
      // this.setState({ item });
      //this.setState({ showRDHS: true});
      this.setState({ showRDHS: true });
      console.log("RDHS");

    } else if (value == "RDHS_Hospital") {
      console.log("RDHS hospital");
    } else if (value == "Direct_Hospital") {
      console.log("Direct Hospital");
    }
    // const name = target.name;
    // let item = { ...this.state.item };
    // item[name] = value;
    // this.setState({ item });
  }
  // play(){
  //   this.setState({ showRDHS: true });
  //   console.log("Play"+this.showRDHS==false);
  // }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('/user/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    })
      .then(res => res.json()) //returns array of data
      ;
    this.props.history.push('/user/user_list');
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
    const {item, rdhss, rdhs_hospitals, direct_hospitals} = this.state;
    const title = <h2>{'Add Group'}</h2>;

    const rdhsList = rdhss.map(rdhs => {
      return <option
        key={rdhs.reg_no}
        value={rdhs.reg_no}>
        {rdhs.reg_no}
      </option>
    });
    const rdhsHospitalList = rdhs_hospitals.map(rdhs_hospital => {
      return <option
        key={rdhs_hospital.reg_no}
        value={rdhs_hospital.reg_no}>
        {rdhs_hospital.reg_no}
      </option>
    });
     const directHospitalList = direct_hospitals.map(direct_hospital => {
      return <option
        key={direct_hospital.reg_no}
        value={direct_hospital.reg_no}>
        {direct_hospital.reg_no}
      </option>
    });

    return (
      <div className="animated fadeIn">

        <Row>
          <Col xs="12" md="8">
            <Card>
              <CardHeader style={{ backgroundColor: '#1b8eb7', color: 'white', borderRadius: '5px' }}>
                <b>User Registration</b>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal" id="UserForm">


                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">NIC</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="reg_no" name="reg_no" placeholder="Register No" initialValue="" value={item.nic || ''}
                        onChange={this.handleChange} autoComplete="reg_no" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">First Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name" name="name" placeholder="Name" initialValue="" value={item.first_name || ''}
                        onChange={this.handleChange} autoComplete="name" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Last Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name" name="name" placeholder="Name" initialValue="" value={item.last_name || ''}
                        onChange={this.handleChange} autoComplete="name" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Tel No</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name" name="name" placeholder="Name" initialValue="" value={item.tel || ''}
                        onChange={this.handleChange} autoComplete="name" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">E Mail</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name" name="name" placeholder="E Mail" initialValue="" value={item.email || ''}
                        onChange={this.handleChange} autoComplete="name" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="address" name="address" placeholder="Address" initialValue="" value={item.address || ''}
                        onChange={this.handleChange} autoComplete="address" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Password</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="email" name="email" placeholder="E-Mail" initialValue="" value={item.email || ''}
                        onChange={this.handleChange} autoComplete="email" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label>Status</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                        <Label className="form-check-label" check htmlFor="inline-radio1">Active</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                        <Label className="form-check-label" check htmlFor="inline-radio2">Deactivated</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label>User Type</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check className="radio">
                        <Input className="form-check-input" type="radio" id="radio1" name="radios" value="MinistryUser" onClick={() => {
                          this.setState({ showRDHS: false }); this.setState({ showDirectHospital: false }); this.setState({ showRDHSHospital: false });
                        }} />
                        <Label check className="form-check-label" htmlFor="radio1">Ministry User</Label>
                      </FormGroup>
                      <FormGroup check className="radio">
                        <Input className="form-check-input" type="radio" id="radio2" name="radios" value="RDHS" onClick={() => {
                          this.setState({ showRDHS: true }); this.setState({ showDirectHospital: false }); this.setState({ showRDHSHospital: false });
                        }} />
                        <Label check className="form-check-label" htmlFor="radio2">RDHS User</Label>
                      </FormGroup>
                      <FormGroup check className="radio">
                        <Input className="form-check-input" type="radio" id="radio3" name="radios" value="RDHS_Hospital" onClick={() => {
                          this.setState({ showRDHSHospital: true }); this.setState({ showRDHS: false }); this.setState({ showDirectHospital: false });
                        }} />
                        <Label check className="form-check-label" htmlFor="radio3">RDHS Hospital User</Label>
                      </FormGroup>
                      <FormGroup check className="radio">
                        <Input className="form-check-input" type="radio" id="radio3" name="radios" value="Direct_Hospital" onClick={() => {
                          this.setState({ showDirectHospital: true }); this.setState({ showRDHS: false }); this.setState({ showRDHSHospital: false });
                        }} />
                        <Label check className="form-check-label" htmlFor="radio3">Direct Hospital User</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>

                  {this.state.showRDHS && <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">RDHS</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="rdhs" id="rdhs" value={item.rdhs.reg_no || ''} onChange={this.handleChange} >
                        <option>RDHS</option>
                        {rdhsList}
                      </Input>

                    </Col>
                  </FormGroup>
                  }
                  {this.state.showRDHSHospital && <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">RDHS Hospital</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="rdhs_hospital" id="rdhs_hospital" value={item.rdhs_hospital.reg_no || ''} onChange={this.handleChange} >
                        <option>RDHS Hospital</option>
                        {rdhsHospitalList}
                      </Input>

                    </Col>
                  </FormGroup>
                  }
                  {this.state.showDirectHospital && <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Direct Hospital</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="direct_hospital" id="direct_hospital" value={item.direct_hospital.reg_no || ''} onChange={this.handleChange} >
                        <option>Direct Hospital</option>
                        {directHospitalList}
                      </Input>

                    </Col>
                  </FormGroup>
                  }




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

export default RegisterUser;
