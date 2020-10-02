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
import axios from 'axios';
import AuthService from '../../../assets/services/auth.service';


const API_URL = 'http://localhost:8080';

const divStyle = {
  display: 'flex',
  alignItems: 'right'
};

class RDHSs extends Component {


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {
      content: "",
      rdhs: [],
      isLoading: true,
      currentPage: 1,
      dataPerPage: 5,
      search: '',
      user_type:AuthService.getCurrentUser().roles
    };
  }
  //const [state, setstate] = useState(initialState);
  componentDidMount() {
    this.setState({ isLoading: true });


  //  axios.get(API_URL + '/rdhs_list', { headers: authHeader() }).then(
  //     response => {
  //       this.setState({
  //         rdhs: response.data,
  //         isLoading:false
  //       });
  //       console.log(this.state.rdhs);
  //     },
  //     error => {
  //       this.setState({
  //         content:
  //           (error.response && error.response.data) ||
  //           error.message ||
  //           error.toString()
  //       });
  //     }
  //   );

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
      .then(data =>{
        console.log(data);
       this.setState({ rdhs: data, isLoading: false })
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

  async remove(id) {
    await fetch(`/rdhs/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + authHeader(),
      }
    }).then(() => {
      // console.log("deleted");
      //this.props.history.push('/hospital_by_rdhs/hospital_by_rdhs_list');
      window.location.reload(false);

    });
    //  await axios.delete(API_URL + `/rdhs/${id}`, { headers: authHeader() })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //     window.location.reload(false);
    //   })
  }

  onViewButtonClick(rdhsSelected) {
    console.log("Selected" + rdhsSelected.address);
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const {rdhs, isLoading, dataPerPage, currentPage, search} = this.state;

    let filteredData = rdhs.filter(
      (rdhs) => {
        return rdhs.reg_no.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          rdhs.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          rdhs.address.toString().toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          rdhs.telephone.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          rdhs.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
          ;
        //  rdhs.m_store_id.indexOf(this.state.search) !==-1;
      }
    );

    if (isLoading) {
      return <p>Loading...</p>;
    }



    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

    const paginate = pageNumber => this.setState({ currentPage: pageNumber });

    const groupList = currentData.map(rdhs => {
      return <tr key={rdhs.reg_no}>
        <td style={{ whiteSpace: 'nowrap' }}>{rdhs.reg_no}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{rdhs.name}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{rdhs.address}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{rdhs.email}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{rdhs.telephone}</td>
        {/*<td>  <Button block outline color="info" tag={Link} to={"/rdhsdetail/"+rdhs.reg_no}>More Info</Button>  </td>*/}


        <td>
          <Button size="sm" color="danger" onClick={() => { if (window.confirm('Are you sure you want to delete this RDHS ?')) this.remove(rdhs.reg_no) }}><i className="fa fa-trash"></i></Button>

          <Button size="sm" color="success" tag={Link} to={"/"+this.state.user_type+"/rdhs_detail/" + rdhs.reg_no}><i className="icon-eye"></i></Button>
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
                <b>RDHS List</b>
              </CardHeader>
              <CardBody>
                <br />

                <Table hover responsive className="table-outline mb-0 d-none d-sm-table" style={{ borderRadius: '20px !important' }}>
                  <thead style={{ backgroundColor: '#244EAD', color: 'white', borderRadius: '20px !important' }}>
                    <tr>
                      <th>Register No</th>
                      <th>RDHS Name</th>
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

export default RDHSs;
