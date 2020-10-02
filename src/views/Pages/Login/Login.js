import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Logo from "../../../assets/img/brand/loginimage.jpg";
import AuthService from "../../../assets/services/auth.service";
import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Popup from 'react-popup';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
      
    };
  }

  onChangeUsername(e) {
    console.log("UserNameChanged");
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    //console.log(e);
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
      // user_type:AuthService.getCurrentUser().roles
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.setState({
                user_type:AuthService.getCurrentUser().roles
          });
          console.log("USERRRRRR"+this.state.user_type);
          if(this.state.user_type=='ministry_admin'){
             this.props.history.push("/ministry_admin");
          }else if(this.state.user_type=='minister'){
             this.props.history.push("/minister");
          }else if(this.state.user_type=='ministry_stock_keeper'){
             this.props.history.push("/ministry_stock_keeper");
          }else if(this.state.user_type=='ministry_store_admin'){
             this.props.history.push("/ministry_store_admin");
          }else if(this.state.user_type=='ministry_store_stock_keeper'){
             this.props.history.push("/ministry_store_stock_keeper");
          }else if(this.state.user_type=='rdhs_admin'){
             this.props.history.push("/rdhs_admin");
          }else if(this.state.user_type=='rdhs_director'){
             this.props.history.push("/rdhs_director");
          }else if(this.state.user_type=='rdhs_stock_keeper'){
             this.props.history.push("/rdhs_stock_keeper");
          }else if(this.state.user_type=='direct_hospital_admin'){
             this.props.history.push("/direct_hospital_admin");
          }else if(this.state.user_type=='direct_hospital_doctor_incharge'){
             this.props.history.push("/direct_hospital_doctor_incharge");
          }else if(this.state.user_type=='direct_hospital_stock_keeper'){
             this.props.history.push("/direct_hospital_stock_keeper");
          }else if(this.state.user_type=='hospital_by_rdhs_admin'){
             this.props.history.push("/hospital_by_rdhs_admin");
          }else if(this.state.user_type=='hospital_by_rdhs_doctor_incharge'){
             this.props.history.push("/hospital_by_rdhs_doctor_incharge");
          }else if(this.state.user_type=='hospital_by_rdhs_stock_keeper'){
             this.props.history.push("/hospital_by_rdhs_stock_keeper");
          }else{
             this.props.history.push("/ministry");
          }
          // window.location.reload();
          
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
    console.log("Login Button Clicked");
  }


  // async handleSubmit(event) {
  //   event.preventDefault();
  //   // const {item} = this.state;

  //   // await fetch('/rdhs/register', {
  //   //   method: 'POST',
  //   //   headers: {
  //   //     'Accept': 'application/json',
  //   //     'Content-Type': 'application/json'
  //   //   },
  //   //   body: JSON.stringify(item),
  //   // })
  //   //   .then(res => res.json()) //returns array of data
  //   //   ;
  //   // this.props.history.push('/rdhs/rdhs_list');
  //   console.log("Login");
  // }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form
                      onSubmit={this.handleLogin}
                      ref={c => {
                        this.form = c;
                      }}
                    >
                      <h1>Pharmanic</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <div className="form-group">
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="Username" autoComplete="username" name="username"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            validations={[required]} />
                        </InputGroup>
                      </div>

                      <div className="form-group">
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="password" placeholder="Password" autoComplete="current-password" name="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            validations={[required]} />
                        </InputGroup>
                      </div>

                      <div className="form-group">
                        <Row>
                          <Col xs="6">
                            <button
                              className="btn btn-primary btn-block"
                              disabled={this.state.loading}
                            >
                              {this.state.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                              )}
                              <span>Login</span>
                            </button>
                          </Col>
                        </Row>
                      </div>

                      {this.state.message && (
                        <div className="form-group">
                          <div className="alert alert-danger" role="alert">
                            {this.state.message}
                          </div>
                        </div>
                      )}
                      <CheckButton
                        style={{ display: "none" }}
                        ref={c => {
                          this.checkBtn = c;
                        }}
                      />
                    </Form>
                  </CardBody>
                </Card>
                <Card style={{ width: '44%' }}>
                  {/*<CardBody className="text-center">
                    <div>*/}
                  {/*<h1>Pharmanic</h1>*/}
                  {/*<h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>*/}

                  <img src={Logo} alt="website logo" width="340" height="340" />
                  {/*</div>
                  </CardBody>*/}
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
