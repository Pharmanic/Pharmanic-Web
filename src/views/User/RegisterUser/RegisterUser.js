import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input_ from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import {Col,Row,Input } from 'reactstrap';

import AuthService from '../../../assets/services/auth.service';
import authHeader from '../../../assets/services/auth-header_res';


const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
     this.onChangeBranch = this.onChangeBranch.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: "",
      roles:[],
      rdhsHospitals:[],
      rdhss:[],
      directHospitals:[],
      ministryStores:[],
      role:"",
      branch:"",
      // isRdhsUSer:false
    };
  }

   componentDidMount() {
    this.setState({isLoading: true});
//     fetch('/role_list', {
//         // method: 'GET',
//         // withCredentials: true,
//         // credentials: 'include',
//           headers: {
//                 // 'Accept': 'application/json',
//                 'Authorization': 'Bearer ' + authHeader(),
//                 // 'Content-Type': 'application/json'
//             }
// })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         // this.state.roles=data;
//         this.setState({rdhs: data})});
//       console.log(this.state.rdhs);   //to load user roles 

//get Role list
    fetch('/role_list', {
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
      .then(data => this.setState({roles: data}));

  //get RDHS list
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

   //get RDHS Hospital list
    fetch('/hospital_by_rdhs/hospital_by_rdhs_list', {
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
      .then(data => this.setState({rdhsHospitals: data}));

      //get ministry stores list
    fetch('/ministrystores', {
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
      .then(data => this.setState({ministryStores: data}));


  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeBranch(e) {
    this.setState({
      branch: e.target.value
    });
  }

  onChangeRole(e) {
    
    this.setState({
      role: e.target.value
    });

     if (e.target.value == 'rdhs_user') {
       this.setState({
       isRdhs: true
    });
     }else{
       this.setState({
       isRdhs: false
    });
     }

      if (e.target.value == 'ministry_store_admin') {
       this.setState({
       isMinistryStore: true
    });
     }else{
       this.setState({
       isMinistryStore: false
    });
     }

     if (e.target.value == 'ministry_store_stock_keeper') {
       this.setState({
       isMinistryStore: true
    });
     }else{
       this.setState({
       isMinistryStore: false
    });
     }

if (e.target.value == 'ministry') {
       this.setState({
       isMinistry: true
    });
     }else{
       this.setState({
       isMinistry: false
    });
     }

  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      console.log("Here");
      AuthService.print();
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,
       [this.state.role],
       this.state.branch
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
      // console.log(AuthService.getCurrentUser().roles);

    }
  }

  render() {
     
    const {roles,rdhss,rdhsHospitals,ministryStores,rdhs} = this.state;
    
    const rolesList = roles.map(role => {
      return <option
        key={role.id}
        value={role.name}>
        {role.name}
      </option>
    });

    const rdhsList = rdhss.map(rdhs => {
      return <option
        key={rdhs.reg_no}
        value={rdhs.name}>
        {rdhs.name}
      </option>
    });

     const rdhsHospitalList = rdhsHospitals.map(rdhHospitals => {
      return <option
        key={rdhHospitals.reg_no}
        value={rdhHospitals.name}>
        {rdhHospitals.name}
      </option>
    });


   const ministryStoreList = ministryStores.map(ministryStore => {
      return <option
        key={ministryStore.reg_no}
        value={ministryStore.name}>
        {ministryStore.name}
      </option>
    });

    return (
      <div className="animated fadeIn">
      {/*<div className="col-md-12">*/}
        <row>
           <Col xs="12" md="8">
        <div className="card card-container">
          {/*<img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />*/}

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input_
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input_
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input_
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                  <div className="form-group">
                  <label htmlFor="role">Role</label>
             
                       <Input type="select" name="rdhs" id="rdhs" value={this.state.role || ''} onChange={this.onChangeRole} >
                        <option>Select Role</option>
                        {rolesList}
                      </Input>
                </div>

                 {this.state.isMinistryStore && (
                 <div className="form-group"  >
                  <label htmlFor="role">Ministry Store</label>
             
                       <Input type="select" name="branch" id="rdhs" value={this.state.branch || ''} onChange={this.onChangeBranch} >
                        <option>Select Ministry Store</option>
                        {ministryStoreList}
                      </Input>
                </div>
                  ) }

                  {this.state.isRdhs && (
                 <div className="form-group"  >
                  <label htmlFor="role">Rdhs</label>
             
                       <Input type="select" name="branch" id="rdhs" value={this.state.branch || ''} onChange={this.onChangeBranch} >
                        <option>Select Rdhs</option>
                        {rdhsList}
                      </Input>
                </div>
                  ) }
                  {/*{this.state.isMinistry && (
                 <div className="form-group"  >
                  <label htmlFor="role">Ministry</label>
             
                      <Input type="select" name="branch" id="rdhs" value={this.state.branch || ''} onChange={this.onChangeBranch} >
                        <option>Select Rdhs</option>
                        {rdhsList}
                      </Input>
                </div>
                  ) }*/}

                

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
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
        </div>
      {/*</div>*/}
     </Col> </row></div>
    );
  }
}