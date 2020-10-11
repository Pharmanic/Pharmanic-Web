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
class ExpireStockForm extends Component {

  emptyItem = {
    date: '',
    quantity: '',
    reason: '',
    batch_id: {
      batch_id: '',
      expire_date: '',
      name: '',
      available_quantity: '',
      import_quantity: '0',
      supplyed_quantity: '0',
      damage_quantity: '0',
      r_store_id: {
        r_store_id: '',
        location: ''
      },
      sr_no: {
        sr_no: '',
        description: '',
        name: '',
        side_effect: ''
      },
      stock_id: {
        stock_id: '',
        export_date: '',
        order_date: ''
      }
    }
  };

  emptyStore = {
    r_store_id: '',
    location: ''
  }

  emptyMedicine = {
    sr_no: '',
    description: '',
    name: '',
    side_effect: ''
  }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      item: this.emptyItem,
      collapse: true,
      fadeIn: true,
      timeout: 300,
      rdhsstores: [],
      isLoading: true,
      medicines: [],
      rdhscurrentstocks: [],
      medicine: this.emptyMedicine,
      store: this.emptyStore
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('/rdhsstores')
      .then(response => response.json())
      .then(data => this.setState({ rdhsstores: data }));

    fetch('/rdhsmedicines')
      .then(response => response.json())
      .then(data => this.setState({ medicines: data, isLoading: false }));

    fetch('/rdhscurrentstocks')
      .then(response => response.json())
      .then(data => this.setState({ rdhscurrentstocks: data, isLoading: false }));

  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    console.log('value', value);
    const name = target.name;
    console.log('name', name);
    let item = { ...this.state.item };
    if (name == 'batch_id') {
      const rdhscurrentstocks = this.state.rdhscurrentstocks;
      console.log('rdhscurrentstocks', rdhscurrentstocks);
      const rdhscurrentstock = rdhscurrentstocks.find(mcs => mcs.batch_id == target.value);
      console.log('rdhscurrentstock', rdhscurrentstock);
      item[name] = rdhscurrentstock;
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
    console.log('object content', item);
    await fetch('/rdhsdamagestock/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    //this.props.history.push('/rdhsdamagestocks');
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState } });
  }

  render() {
    const {item, rdhscurrentstocks} = this.state;
    const title = <h2>{'Add Group'}</h2>;

    const batchList = rdhscurrentstocks.map(rdhscurrentstock => {
      return <option
        key={rdhscurrentstock.batch_id}
        value={rdhscurrentstock.batch_id}>
        {rdhscurrentstock.batch_id}
      </option>
    });

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <strong>Damage Drug</strong> Form
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Batch ID</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="batch_id" id="batch_id" value={item.batch_id.batch_id || ''} onChange={this.handleChange} >
                        <option>Select a batch</option>
                        {batchList}
                      </Input>

                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Date</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="date" name="date" placeholder=" Date" value={item.date || ''}
                        onChange={this.handleChange} autoComplete="date" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Quantity</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="quantity" name="quantity" placeholder="quantity" value={item.quantity || ''}
                        onChange={this.handleChange} autoComplete="quantity" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Reason</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="reason" name="reason" placeholder="reason(expired/damaged/other])" value={item.reason || ''}
                        onChange={this.handleChange} autoComplete="reason" />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Button size="sm" color="primary" tag={Link} to="/rdhsexpiringmedd" type="submit"><i className="fa fa-dot-circle-o"></i>Save</Button>{' '}
                    <Button size="sm" color="danger" >Cancel</Button>
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

export default ExpireStockForm;
