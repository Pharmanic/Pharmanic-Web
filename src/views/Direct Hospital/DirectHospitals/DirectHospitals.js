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
import AuthService from '../../../assets/services/auth.service';
import swal from 'sweetalert';

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
      search: '',
      user_type:AuthService.getCurrentUser().roles

      
      
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

  
  delete (reg_no) {
    swal({
      title: "Are you sure?",
      text: "You Want to Delete this Direct Hospital!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          // swal("Poof! Your imaginary file has been deleted!", {
          //   icon: "success",
          // });
          this.remove(reg_no);
        }
      });
  }

    async remove(id) {
    await fetch(`/directhospital/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + authHeader(),
      }
    }).then((response) => response.json())
    // .then((response) => console.log(response))

    .then(response => this.setState({ rRes: response}));
    if(this.state.rRes==1){
      swal({
        icon: "success",
        text: "Direct Hospital Saved Succesfully",
        buttons: {
          ok: "OK",
          // view: "Show Direct Hospitals"
          // hello: "Say hello!",
        },
        timer: 1500

      });
      setTimeout(() => {   window.location.reload(false); }, 500);
        
    }else{
      swal({
        icon: "error",
        text: "Error Saving Direct Hospital",
        buttons: {
          ok: "OK",
          // view: "Show Direct Hospitals"
          // hello: "Say hello!",
        },
        timer: 1500

      });
    
    }
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const {directHospitals, isLoading, dataPerPage, currentPage, search} = this.state;

    let filteredData = directHospitals.filter(
      (directHospital) => {
        return directHospital.reg_no.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          String(directHospital.name).toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          String(directHospital.telephone).toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          String(directHospital.address).toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
          String(directHospital.email).toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 
         ;
        //  directHospital.reg_no.indexOf(this.state.search) !==-1;
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
      return <tr key={directHospital.reg_no}>
        <td style={{ whiteSpace: 'nowrap' }}>{directHospital.reg_no}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{directHospital.name}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{directHospital.address}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{directHospital.email}</td>
        <td style={{ whiteSpace: 'nowrap' }}>{directHospital.telephone}</td>
         <td>
          <Button size="sm" color="danger" onClick={() => this.delete(directHospital.reg_no)}><i className="fa fa-trash"></i></Button>
          <Button size="sm" color="success" tag={Link} to={"/"+this.state.user_type+"/direct_hospital_detail/" + directHospital.reg_no}><i className="icon-eye"></i></Button>

          {/*<Button size="sm" color="success" tag={Link} to={"/ministry_store/"+direct_hospital.reg_no}><i className="icon-eye"></i></Button>*/}
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
             <b> Direct Hospitals</b>
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
