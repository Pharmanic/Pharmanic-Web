import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  CardFooter
} from 'reactstrap';
import Paginations from './Pagination';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import ChartComponent from 'react-chartjs-2';



class CurrentStock extends Component {
  

  constructor(props) {
    super(props);

    const abc=[];
    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {medicines: [], isLoading: true,filter:"",
    currentPage:1,
    dataPerPage:5,};


  }

  handleChange = event =>{
    this.setState({filter:event.target.value});
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/supplyoorderstodhlist')
      .then(response => response.json())
      .then(data => this.setState({medicines: data, isLoading: false}));
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  jsPdfTableGenerator = (abc) => {
    console.log('vfcuawed',abc);
    const doc = new jsPDF();
    doc.autoTable({html: '#my-table'})
    doc.autoTable({
      head:[['Name','Email','Country']],
      body:[
        {abc}
      ],
    })
    doc.save('table.pdf')
  }

  render() {
    const {medicines, isLoading,filter,currentPage,dataPerPage} = this.state;
    const lowercasedFilter = filter.toLowerCase();
    // const filteredData = medicines.filter(item => {
    //   return Object.keys(item).some(key =>
    //     item[key].toLowerCase().includes(lowercasedFilter)
    //     );
    // })


    // const indexOfLastData=currentPage * dataPerPage;
    // const indexOfFirstData=indexOfLastData - dataPerPage;
    // const currentData=filteredData.slice(indexOfFirstData,indexOfLastData);

    const paginate = pageNumber => this.setState({currentPage:pageNumber});

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const data =[];
    for(let i = 0; i<medicines.length; i++){
      data.push({
        name: medicines.map(medicine => medicine.supply_id.value),
        email: medicines.map(medicine => medicine.supply_id.value),
        country: medicines.map(medicine => medicine.supply_id.value)
       
      });
    }
    this.state.abc={data};

    const groupList = medicines.map(medicine => {
      return <tr key={medicine.sr_no}>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.supply_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.request_id.id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.request_id.order_id.order_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.request_id.order_id.m_store_id.m_store_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.request_id.order_id.hospital_reg_no.reg_no}</td>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.supply_date}</td>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.status}</td>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.track_id.track_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.track_id.driver_id.nic}</td>
        <td style={{whiteSpace: 'nowrap'}}>{medicine.track_id.vehicle_id.vehicle_no}</td>
      </tr>
    });
    return (
      <div className="animated fadeIn">
          <button onClick={this.jsPdfTableGenerator(this.state.abc)}>Generate table PDF</button>
        <Row>
          <Col>
          <Row>
          <Col md="8">
          </Col>
          <Col lg="4" >
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button type="button" color="primary"><i className="fa fa-search"></i></Button>
            </InputGroupAddon>
            <Input type="text" id="input1-group2" name="input1-group2" placeholder="Search a Medicine" value={filter} onChange={this.handleChange}/>
          </InputGroup>
          <br></br>
          </Col>
          </Row>
          
            <Card style={{borderRadius:'20px'}}>
              <CardHeader style={{backgroundColor:'#1b8eb7',color:'white',borderRadius:'5px'}}>
                Medicines
              </CardHeader>
              <CardBody>
                
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead style={{backgroundColor:'#244EAD', color:'white',borderRadius:'20px !important'}}>
                  <tr>
                    <th>Supply_ID</th>
                    <th>RequestID</th>
                    <th>OrdeID</th>
                    <th>MinistryStoreID</th>
                    <th>DH ID</th>
                    <th>SupplyDate</th>
                    <th>ConfirmationState</th>
                    <th>TrackID</th>
                    <th>DriverNIC</th>
                    <th>Vehicle No</th>
                  </tr>
                  </thead>
                  <tbody>
                  {groupList}
                  </tbody>
                </Table>
              </CardBody>
              <CardFooter>
              <Row>
              <Col md="9"></Col>
              <Col md="3">
              <Paginations dataPerPage={dataPerPage} totalData={medicines.length} paginate={paginate}/>
              </Col>
              </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CurrentStock;
