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
import authHeader from '../../../assets/services/auth-header_res';


const divStyle = {
  display: 'flex',
  alignItems: 'right'
};

class UserList extends Component {


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {
      user: [],
      isLoading: true,
      currentPage: 1,
      dataPerPage: 5,
      search: ''
    };
  }
  //const [state, setstate] = useState(initialState);
  componentDidMount() {
    this.setState({ isLoading: true });
fetch('/user_list', {
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
      .then(data => this.setState({ user: data, isLoading: false }));
      console.log(this.state.user);
      // console.log(this.state);
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
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      // console.log("deleted");
      //this.props.history.push('/hospital_by_rdhs/hospital_by_rdhs_list');
      window.location.reload(false);

    });
  }

  onViewButtonClick(UserListelected){
    console.log("Selected"+UserListelected.address);
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const {user, isLoading, dataPerPage, currentPage, search} = this.state;

    // let filteredData = user;
    let filteredData = user.filter(
      (user) => {
        return user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || 
        user.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
        user.branch.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 

          // user.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          // user.branch.toString().toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          // user.telephone.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          // user.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
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

    const groupList = currentData.map(user => {
      return <tr>
        <td style={{ whiteSpace: 'nowrap' }}>{user.UserName}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{user.email}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{user.branch}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{user.name}</td>
        {/*<td style={{ whiteSpace: 'nowrap' }}>{user.telephone}</td>*/}

        <td>
          <Button size="sm" color="danger" onClick={() => { if (window.confirm('Are you sure you want to delete this RDHS ?')) this.remove(user.reg_no) }}><i className="fa fa-trash"></i></Button>
        
          <Button size="sm" color="success" onClick={() => { this.onViewButtonClick(user) }}><i className="icon-eye"></i></Button>
        </td>

      </tr>
    });

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
          
            <Card style={{ borderRadius: '20px' }}>
              <CardHeader style={{ backgroundColor: '#1b8eb7', color: 'white', borderRadius: '5px' }}>
                  <Row>
              <Col md="8">
             <b> Users</b>
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
              </Col>
            </Row>
              </CardHeader>
              <CardBody>

                <Table hover responsive className="table-outline mb-0 d-none d-sm-table" style={{ borderRadius: '20px !important' }}>
                  <thead style={{ backgroundColor: '#244EAD', color: 'white', borderRadius: '20px !important' }}>
                    <tr>
                      <th>Username</th>
                      <th>E Mail</th>
                      <th>Branch</th>
                      <th>Role</th>
                      <th>Options</th>
                      
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

export default UserList;
