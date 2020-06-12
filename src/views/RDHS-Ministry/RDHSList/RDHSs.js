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
      rdhs: [],
      isLoading: true,
      currentPage: 1,
      dataPerPage: 5,
      search: ''
    };
  }
  //const [state, setstate] = useState(initialState);
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('/rdhs_list')
      .then(response => response.json())
      .then(data => this.setState({ rdhs: data, isLoading: false }));
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
