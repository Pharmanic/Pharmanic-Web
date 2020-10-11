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

class CurrentStockForm extends Component {

    emptyItem = {
      expire_date: '',
        available_quantity: '0',
        import_quantity:'',
        supplyed_quantity:'0',
        damage_quantity:'0',
        r_store_id:{
          r_store_id:'',
          location:''
        },
        sr_no: {
          sr_no:'',
          description:'',
          name:'',
          side_effect:''         
        },
        stock_id:{
          stock_id:'',
          export_date:'',
          order_date:''
        }       
      };

    emptyStore={
      r_store_id:'',
      location:''
    }

    emptyMedicine={
      sr_no:'',
      description:'',
      name:'',
      side_effect:''
    }

    emptyStock={
      stock_id:'',
      export_date:'',
      order_date:''
    }

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      item:this.emptyItem,
      collapse: true,
      fadeIn: true,
      timeout: 300,
      ministrystores: [],
      isLoading: true,
      medicines: [],
      exportedstocks:[],
      medicine:this.emptyMedicine,
      store:this.emptyStore,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});
    fetch('/rdhs_list')
      .then(response => response.json())
      .then(data => this.setState({ministrystores: data}));

    fetch('/rdhsmedicines')
      .then(response => response.json())
      .then(data => this.setState({medicines: data, isLoading: false}));
    
    fetch('/rdhsexportedstocks')
      .then(response => response.json())
      .then(data => this.setState({exportedstocks: data, isLoading: false}));
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    console.log('value',value);
    const name = target.name;
    console.log('name',name);
    let item = {...this.state.item};  
    if(name=='r_store_id'){
      const ministrystores=this.state.ministrystores;
      const store=ministrystores.find(ms => ms.r_store_id==target.value);
      item[name]=store;
      this.setState({item});
    }else if(name=='sr_no'){
      const medicines=this.state.medicines;
      const medicine=medicines.find(md => md.sr_no==target.value);
      item[name]=medicine;
      this.setState({item});
    }else if(name=='stock_id'){
      const exportedstocks=this.state.exportedstocks;
      const exportedstock=exportedstocks.find(es => es.stock_id==target.value);
      item[name]=exportedstock;
      this.setState({item});
    }else{
      item[name] = value;
      this.setState({item});
      console.log('item',item);
    }
    //item[name] = value;
     
   
  }

  
  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;
    console.log('object content',item);
    await fetch('/rdhscurrentstock/add', {
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
   // this.props.history.push('/currentstock');
  }

  reset(){
    this.setState({
      item:this.emptyItem
    });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    const {item,ministrystores,isLoading,medicines,exportedstocks} = this.state;
    const title = <h2>{'Add Group'}</h2>;
    

    
    const groupList = ministrystores.map(ministrystore => {
      return <option 
                key={ministrystore.r_store_id} 
                value={ministrystore.r_store_id}>
            {ministrystore.location}
            </option>
    });

    const medList = medicines.map(medicine => {
      return <option 
                key={medicine.sr_no} 
                value={medicine.sr_no}>
            {medicine.name}
            </option>
    });

    const exportList = exportedstocks.map(exportedstock => {
      return <option 
                key={exportedstock.stock_id} 
                value={exportedstock.stock_id}>
            {exportedstock.stock_id}
            </option>
    });

    return (
      <div className="animated fadeIn">        
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <strong>Current Stock</strong> Form
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data" className="form-horizontal">                      
                <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Imported ID</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="stock_id" id="stock_id" value={item.stock_id.stock_id|| ''} onChange={this.handleChange}>
                      <option>Select a stock</option>
                      {exportList}  
                      </Input>
                    </Col>
                  </FormGroup>
                <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">RDHS Store</Label>
                    </Col>
                    <Col xs="12" md="9">                  
                      <Input type="select" name="m_store_id" id="stock_id" value={item.r_store_id.r_store_id|| ''} onChange={this.handleChange}>
                      <option>Select a store</option>
                      {groupList} 
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Medicine</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="sr_no" id="sr_no" value={item.sr_no.sr_no|| ''} onChange={this.handleChange}>
                      <option>Select a medicine</option>
                      {medList} 
                      </Input>
                    </Col>
                  </FormGroup>
                  {/* <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Expire Date</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="expire_date" name="expire_date" placeholder="Expire Date" value={item.expire_date|| ''}
                            onChange={this.handleChange} autoComplete="expire_date"/>
                    </Col>
                  </FormGroup> */}
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Available Quantity</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="import_quantity" name="import_quantity" placeholder="import_quantity" value={item.import_quantity|| ''}
                            onChange={this.handleChange} autoComplete="import_quantity"/>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Button size="sm" color="primary" tag={Link} to="/rdhscurrentstock" type="submit"><i className="fa fa-dot-circle-o"></i>Submit</Button>{' '}
                    <Button size="sm" color="danger"><i className="fa fa-ban"></i>Reset</Button>
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
export default CurrentStockForm;
