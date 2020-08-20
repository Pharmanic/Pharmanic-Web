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

class MinistryStores extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {
      ministrystores: [],
      isLoading: true,
      currentPage: 1,
      dataPerPage: 5,
      search: ''
    };
  }
  //const [state, setstate] = useState(initialState);
  componentDidMount() {
    this.setState({ isLoading: true });
    
  fetch('/ministrystores', {
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
       this.setState({ ministrystores: data, isLoading: false })
       console.log("Stores"+this.state.ministrystores);
    });
      
  
 // fetch('/ministrystores')
    //   .then(response => response.json())
    //   .then(data => this.setState({ ministrystores: data, isLoading: false }));
  


// fetch('/ministrystores', {
//         // method: 'GET',
//         // withCredentials: true,
//         // credentials: 'include',
//           headers: {
//                 // 'Accept': 'application/json',
//                 'Authorization': 'Bearer ' + authHeader(),
//                 // 'Content-Type': 'application/json'
//             }
// }).then(response => response.json())
//   .then(
//       data => {
//         console.log(data);
//         // this.state.ministrystores=data;
//         this.setState({
//           ministrystores: data,
//           isLoading:false,
//         });
//         console.log(data);
//         // console.log(this.state.ministrystores);
//       },
//       error => {
//         this.setState({
//           content:
//             (error.response && error.response.data) ||
//             error.message ||
//             error.toString()
//         });
//       }
//     );


    // )
    // .catch(error => this.setState({
    //     isLoading: false,
    //     message: 'Something bad happened ' + error
    // }));

  // .then(response => response.json())
  //     .then(data => this.setState({ ministrystores: data, isLoading: false }));

// fetch('/ministrystores', {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//                 'Authorization': 'Bearer ' + authHeader()
//                 // 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 signature: generateKey(token),
//                 eToken: token
//             })
//         })

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
    await fetch(`/ministry_store/${id}`, {
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

  async remove(id) {
    await fetch(`/ministry_store/${id}`, {
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

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const {ministrystores, isLoading, dataPerPage, currentPage, search} = this.state;
    console.log(ministrystores);


//********************** Some error in filtering

    // let filteredData = ministrystores.filter(
    //   (ministrystore) => {
    //     return  ministrystore.location.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    //       ministrystore.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    //       ministrystore.m_store_id.toString().toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    //       ministrystore.tel_no.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    //       ministrystore.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    //       ministrystore.total_storage.toString().indexOf(this.state.search.toLowerCase()) !== -1 ||
    //       ministrystore.available_storage.toString().indexOf(this.state.search.toLowerCase()) !== -1
    //       ;
    //     //  ministrystore.m_store_id.indexOf(this.state.search) !==-1;
    //   }
    // );
    let filteredData=ministrystores;

    if (isLoading) {
      return <p>Loading...</p>;
    }



    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);

    const paginate = pageNumber => this.setState({ currentPage: pageNumber });

    const groupList = currentData.map(ministrystore => {
      return <tr key={ministrystore.m_store_id}>
        <td style={{ whiteSpace: 'nowrap' }}>{ministrystore.m_store_id}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{ministrystore.name}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{ministrystore.location}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{ministrystore.email}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{ministrystore.tel_no}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{ministrystore.total_storage}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{ministrystore.available_storage}</td>
        <td>
          <Button size="sm" color="danger" onClick={() => { if (window.confirm('Are you sure you want to delete this Ministry Store ?')) this.remove(ministrystore.m_store_id) }}><i className="fa fa-trash"></i></Button>

          <Button size="sm" color="success" tag={Link} to={"/ministry_store_detail/"+ministrystore.m_store_id}><i className="icon-eye"></i></Button>
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
                <b>Ministry Ware Houses</b>
              </CardHeader>
              <CardBody>
                <br />

                <Table hover responsive className="table-outline mb-0 d-none d-sm-table" style={{ borderRadius: '20px !important' }}>
                  <thead style={{ backgroundColor: '#244EAD', color: 'white', borderRadius: '20px !important' }}>
                    <tr>
                      <th>Ministry Store ID</th>
                      <th>Ministry Store Name</th>
                      <th>Location</th>
                      <th>E Mail</th>
                      <th>Tel No</th>
                      <th>Total Storage</th>
                      <th>Available Storage</th>
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

export default MinistryStores;
