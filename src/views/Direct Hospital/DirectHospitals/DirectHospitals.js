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
import authHeader from '../../../assets/services//auth-header';


const divStyle = {
  display: 'flex',
  alignItems: 'right'
};

class DirectHospitals extends Component {


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {
      directHospitals: [],
      isLoading: true,
      currentPage: 1,
      dataPerPage: 5,
      search: ''
    };
  }
  //const [state, setstate] = useState(initialState);
  componentDidMount() {
    this.setState({ isLoading: true });

    // fetch('/direct_hospital/direct_hospital_list')
    //   .then(response => response.json())
    //   .then(data => this.setState({ directHospitals: data, isLoading: false }));

      fetch('/direct_hospital/direct_hospital_list', {
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
      .then(data =>{
        console.log(data);
       this.setState({ directHospitals: data, isLoading: false })
      //  console.log("2nd"+data.get(0));
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

    async remove(id) {
    await fetch(`/directhospital/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      // console.log("deleted");
      //this.props.history.push('/hospital_by_direct_hospital/hospital_by_rdhs_list');
      window.location.reload(false);

    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const {directHospitals, isLoading, dataPerPage, currentPage, search} = this.state;

    let filteredData = directHospitals.filter(
      (directHospital) => {
        return directHospital.reg_no.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          directHospital.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          directHospital.telephone.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          directHospital.address.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          directHospital.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 
         ;
        //  directHospital.m_store_id.indexOf(this.state.search) !==-1;
      }
    );

    if (isLoading) {
      return <p>Loading...</p>;
    }



    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

    const paginate = pageNumber => this.setState({ currentPage: pageNumber });

    const groupList = currentData.map(directHospital => {
      return <tr key={directHospital.m_store_id}>
        <td style={{ whiteSpace: 'nowrap' }}>{directHospital.reg_no}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{directHospital.name}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{directHospital.address}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{directHospital.email}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{directHospital.telephone}</td>
         <td>
          <Button size="sm" color="danger" onClick={() => { if (window.confirm('Are you sure you want to delete this Direct Hopital?')) this.remove(directHospital.reg_no) }}><i className="fa fa-trash"></i></Button>
          <Button size="sm" color="success" tag={Link} to={"/direct_hospital_detail/" + directHospital.reg_no}><i className="icon-eye"></i></Button>

          {/*<Button size="sm" color="success" tag={Link} to={"/ministry_store/"+direct_hospital.reg_no}><i className="icon-eye"></i></Button>*/}
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
                <b>Direct Hospitals</b>
              </CardHeader>
              <CardBody>
                <br />

                <Table hover responsive className="table-outline mb-0 d-none d-sm-table" style={{ borderRadius: '20px !important' }}>
                  <thead style={{ backgroundColor: '#244EAD', color: 'white', borderRadius: '20px !important' }}>
                    <tr>
                      <th>Direct Hospital Register NO</th>
                      <th>Direct Hospital Name</th>
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

export default DirectHospitals;
