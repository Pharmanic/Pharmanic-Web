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
import { Link } from 'react-router-dom';
import authHeader from '../../../assets/services/auth-header_res';

const divStyle = {
  display: 'flex',
  alignItems: 'right'
};

class HospitalByRDHS extends Component {


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {
      hospitalByRDHSs: [],
      isLoading: true,
      currentPage: 1,
      dataPerPage: 5,
      search: ''
    };
  }
  //const [state, setstate] = useState(initialState);
  componentDidMount() {
    this.setState({ isLoading: true });

    // fetch('/hospital_by_rdhs/hospital_by_rdhs_list')
    //   .then(response => response.json())
    //   .then(data => this.setState({ hospitalByRDHSs: data, isLoading: false }));

fetch('/hospital_by_rdhs/hospital_by_rdhs_list', {
        
          headers: {
                // 'Accept': 'application/json',
                'Authorization': 'Bearer ' + authHeader(),
                // 'Content-Type': 'application/json'
            }
})
      .then(response => response.json())
      .then(data =>{
        console.log(data);
       this.setState({ hospitalByRDHSs: data, isLoading: false })
      //  console.log("2nd"+data.get(0));
    });


 }
  

  async remove(id) {
    await fetch(`/hospitalByRdhs/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + authHeader(),
      }
    }).then(() => {
      // console.log("deleted");
      //this.props.history.push('/hospital_by_rdhs/hospital_by_rdhs_list');
      window.location.reload(false);

    });
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
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

  render() {
    const {hospitalByRDHSs, isLoading, dataPerPage, currentPage, search} = this.state;

    let filteredData = hospitalByRDHSs.filter(
      (hospitalByRDHS) => {
        return hospitalByRDHS.reg_no.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          hospitalByRDHS.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          hospitalByRDHS.rdhs.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          hospitalByRDHS.telephone.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          hospitalByRDHS.address.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          hospitalByRDHS.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
          ;
        //  hospitalByRDHS.m_store_id.indexOf(this.state.search) !==-1;
      }
    );

    if (isLoading) {
      return <p>Loading...</p>;
    }



    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

    const paginate = pageNumber => this.setState({ currentPage: pageNumber });

    const groupList = currentData.map(hospitalByRDHS => {
      return <tr key={hospitalByRDHS.m_store_id}>
        <td style={{ whiteSpace: 'nowrap' }}>{hospitalByRDHS.reg_no}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{hospitalByRDHS.name}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{hospitalByRDHS.rdhs.name}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{hospitalByRDHS.address}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{hospitalByRDHS.email}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{hospitalByRDHS.telephone}</td>
        <td>
          <Button size="sm" color="danger" onClick={() => { if (window.confirm('Are you sure you want to delete this RDHS Hospital?')) this.remove(hospitalByRDHS.reg_no) }}><i className="fa fa-trash"></i></Button>
          <Button size="sm" color="success" tag={Link} to={"/hospital_by_rdhs/" + hospitalByRDHS.reg_no}><i className="icon-eye"></i></Button>

        </td>


      </tr>
    });

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Row>
              <Col md="8">
              </Col>
              <Col md="4" style={{ alignContent: 'center' }}>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <Button type="button" color="primary"><i className="fa fa-search"></i></Button>
                  </InputGroupAddon>
                  <Input type="text" id="input1-group2" name="input1-group2" placeholder="Search" type="text"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)} />
                </InputGroup>
                <br></br>
              </Col>
            </Row>
            <Card style={{ borderRadius: '20px' }}>
              <CardHeader style={{ backgroundColor: '#1b8eb7', color: 'white', borderRadius: '5px' }}>
                <b>Hospital By RDHS List</b>
              </CardHeader>
              <CardBody>
                <br />

                <Table hover responsive className="table-outline mb-0 d-none d-sm-table" style={{ borderRadius: '20px !important' }}>
                  <thead style={{ backgroundColor: '#244EAD', color: 'white', borderRadius: '20px !important' }}>
                    <tr>
                      <th>Register No</th>
                      <th>RDHS Hospital Name</th>
                      <th>Related RDHS</th>
                      <th>Address</th>
                      <th>E Mail</th>
                      <th>Tel No</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupList}
                  </tbody>
                </Table>


              </CardBody>
              <CardFooter>
                <Row>
                  <Col md="8"></Col>
                  <Col md="3">
                    <Paginations dataPerPage={dataPerPage} totalData={filteredData.length} paginate={paginate} />
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

export default HospitalByRDHS;
