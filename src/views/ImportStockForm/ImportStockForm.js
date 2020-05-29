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



class ImportStockForm extends Component {

    emptyItem = {
        stock_id:'',
        export_date: '',
        order_date: ''
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

    await fetch('/exportedstock/add', {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/exportedstocks');
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
                Add an Import Stock
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal">           
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Stock No</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="stock_id" name="stock_id" placeholder="Stock ID" value={item.stock_id|| ''}
                            onChange={this.handleChange} autoComplete="stock_id" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Import date</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="export_date" name="export_date" placeholder="Import Date" value={item.export_date|| ''}
                            onChange={this.handleChange} autoComplete="export_date"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Order date</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="order_date" name="order_date" placeholder="Order Date" value={item.order_date|| ''}
                            onChange={this.handleChange} autoComplete="order_date"/>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Button size="sm" color="primary" type="submit"> <i className="fa fa-dot-circle-o"></i>Save</Button>{' '}
                    <Button size="sm" color="danger"><i className="fa fa-ban"></i>Cancel</Button>
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

export default ImportStockForm;
