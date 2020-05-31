import React, { Component} from 'react';
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

class CurrentStock extends Component {
  

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {
      ministrystores: [], 
      isLoading: true,
      currentPage:1,
      dataPerPage:5,
      search:''}; 
  }
  //const [state, setstate] = useState(initialState);
  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/ministrystores')
      .then(response => response.json())
      .then(data => this.setState({ministrystores: data, isLoading: false}));
  }

  updateSearch(event){
    this.setState({search:event.target.value.substr(0,20)});
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
    const {ministrystores, isLoading,dataPerPage,currentPage,search} = this.state;

    let filteredData=ministrystores.filter(
      (ministrystore)=>{
        return ministrystore.location.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || 
        ministrystore.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
        ministrystore.m_store_id.toString().toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
        ministrystore.tel_no.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
        ministrystore.location.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
        ministrystore.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1||
        ministrystore.total_storage.toString().indexOf(this.state.search.toLowerCase()) !== -1||
        ministrystore.available_storage.toString().indexOf(this.state.search.toLowerCase()) !== -1
        ;
              //  ministrystore.m_store_id.indexOf(this.state.search) !==-1;
      }
    );
    
    if (isLoading) {
      return <p>Loading...</p>;
    }

    

    const indexOfLastData=currentPage * dataPerPage;
    const indexOfFirstData=indexOfLastData - dataPerPage;
    const currentData=filteredData.slice(indexOfFirstData,indexOfLastData);

    const paginate = pageNumber => this.setState({currentPage:pageNumber});

    const groupList = currentData.map(ministrystore => {
      return <tr key={ministrystore.m_store_id}>
        <td style={{whiteSpace: 'nowrap'}}>{ministrystore.m_store_id}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrystore.name}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrystore.email}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrystore.tel_no}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrystore.location}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrystore.total_storage}</td>
        <td style={{whiteSpace: 'nowrap'}}>{ministrystore.available_storage}</td>

      </tr>
    });

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
          <Row>
          <Col md="8">
          </Col>
          <Col md="4" style={{alignContent:'center'}}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button type="button" color="primary"><i className="fa fa-search"></i></Button>
            </InputGroupAddon>
            <Input type="text" id="input1-group2" name="input1-group2" placeholder="Search by location" type="text" 
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}/>
          </InputGroup> 
          <br></br>
          </Col> 
          </Row>       
            <Card style={{borderRadius:'20px'}}>
              <CardHeader style={{backgroundColor:'#1b8eb7',color:'white',borderRadius:'5px'}}>
                <b>Ministry Ware Houses</b>
              </CardHeader>
              <CardBody>            
                <br />
                
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table" style={{borderRadius:'20px !important'}}>
                  <thead  style={{backgroundColor:'#244EAD', color:'white',borderRadius:'20px !important'}}>
                  <tr>
                    <th >Ministry Store ID</th>
                    <th>Name</th> 
                    <th>E Mail</th> 
                    <th>Tel No</th> 
                    <th>Location</th> 
                    <th>Total Storage</th> 
                    <th>Available Storage</th> 
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
              <Paginations dataPerPage={dataPerPage} totalData={filteredData.length} paginate={paginate}/>
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
