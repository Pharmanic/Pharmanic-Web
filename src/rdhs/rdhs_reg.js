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
// import rdhs_driverreg from '../rdhs_driverreg';
// import rdhs_vehiclereg from '../rdhs_vehiclereg';
// import Paginations from './Pagination';

class rdhs_reg extends Component{
render () {
  return (
<div>

<form>
<Button color="primary" tag={Link} to="/rdhs_vehiclereg">Vehicle</Button>{' '}{' '}{' '}{' '}{' '}{' '}
<Button color="primary" tag={Link} to="/rdhs_driverreg">Driver</Button>
  </form>                   
   </div>
  );
}
   
} 


export default rdhs_reg;
