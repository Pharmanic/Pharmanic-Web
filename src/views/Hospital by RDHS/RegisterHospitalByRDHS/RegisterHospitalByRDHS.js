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
import AuthService from '../../../assets/services/auth.service';
import swal from 'sweetalert';


class RegisterHospitalByRDHS extends Component {

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

    }

  };
  user_type:'';

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      item: this.emptyItem,
      collapse: true,
      fadeIn: true,
      timeout: 300,
      rdhss:[],
      user_type:AuthService.getCurrentUser().roles,
      rRes:0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});
    // this.setState({rRes: 0});
    fetch('/rdhs_list', {
        // method: 'GET',
        // withCredentials: true,
        // credentials: 'include',
          headers: {
                // 'Accept': 'application/json',
                'Authorization': 'Bearer ' + authHeader(),
                // 'Content-Type': 'application/json'
            }
})
      .then(response => response.json())
      .then(data => this.setState({rdhss: data}));
      

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
     // console.log('rdhss', rdhss);
      const rdhs = rdhss.find(rdhs => rdhs.reg_no == target.value);
      console.log('rdhsjjj', rdhs.reg_no);
      item[name] = rdhs;
      this.setState({ item });
      console.log('item', item);
    } else {
      item[name] = value;
      this.setState({ item });
      console.log('item', item);
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('/hospital_by_rdhs/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + authHeader(),

      },
      body: JSON.stringify(item),
    })
      .then(res => res.json()) //returns array of data
            //  .then(response => console.log("Response is"+response))
       .then(response => this.setState({ rRes: response}));
  //  .then(data => this.setState({ rRes: data, isLoading: false}));
    console.log("Item"+this.state.rRes);

    if (this.state.rRes != 0) {
      swal({
        icon: "success",
        text: "RDHS Hospital Saved Succesfully",
        buttons: {
          ok: "OK",
          // view: "Show RDHSs"
          // hello: "Say hello!",
        },
        timer: 1500

      });
      this.resetForm();
    }else{
      swal({
        icon: "error",
        text: "Error Saving RDHS Hospital",
        buttons: {
          ok: "OK",
          // view: "Show RDHSs"
          // hello: "Say hello!",
        },
        timer: 1500

      });
    }
      
    // this.props.history.push('/'+this.state.user_type+'/hospital_by_rdhs/hospital_by_rdhs_list');
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
    const {item,rdhss} = this.state;
    const title = <h2>{'Add Group'}</h2>;

    const rdhsList = rdhss.map(rdhs => {
      return <option
        key={rdhs.reg_no}
        value={rdhs.reg_no}>
        {rdhs.reg_no}
      </option>
    });

    return (
      <div className="animated fadeIn">

        <Row>
          <Col xs="12" md="8">
            <Card>
              <CardHeader style={{ backgroundColor: '#1b8eb7', color: 'white', borderRadius: '5px' }}>
                <b>RDHS Hospital Registration</b>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal" id="hospital_by_rdhsForm">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Register No</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="reg_no" name="reg_no" placeholder="Register No" initialValue="" value={item.reg_no || ''}
                        onChange={this.handleChange} autoComplete="reg_no" />
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
                      <Label htmlFor="select">RDHS</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="rdhs" id="rdhs" value={item.rdhs.reg_no || ''} onChange={this.handleChange} >
                        <option>Select a RDHS</option>
                        {rdhsList}
                      </Input>

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
                      <Label htmlFor="text-input">E-Mail</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="email" name="email" placeholder="E-Mail" initialValue="" value={item.email || ''}
                        onChange={this.handleChange} autoComplete="email" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Tel No</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="telephone" name="telephone" placeholder="Tel No" initialValue="" value={item.telephone || ''}
                        onChange={this.handleChange} autoComplete="telephone" />
                    </Col>
                  </FormGroup>


                  <br />

                  <FormGroup>
                    <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>{' '}
                    <Button type="reset" size="sm" color="danger" onClick={this.resetForm}><i className="fa fa-ban"></i> Reset</Button>
                  </FormGroup>

                </Form>
              </CardBody>
              {/*<CardFooter>*/}
              {/*<Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>{' '}
                  <Button type="reset" size="sm" color="danger" tag={Link} to="/hospital_by_rdhss/hospital_by_rdhss_list"><i className="fa fa-ban"></i> Reset</Button>*/}
              {/*</CardFooter>*/}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RegisterHospitalByRDHS;
