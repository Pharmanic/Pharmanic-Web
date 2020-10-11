//   import React, { Component} from 'react';
// import {
//   Card,
//   CardBody,
//   CardHeader,
//   Col,
//   Row,
//   Table,
//   Button,
//   CardFooter
// } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import Paginations from './views/CurrentStock/Pagination';

// class rdhs_currentStock extends Component {
  

//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
//     this.state = {ministrycurrentstocks: [], isLoading: true,
//       currentPage:1,
//       dataPerPage:5,}; 
//   }

//   componentDidMount() {
//     this.setState({isLoading: true});

//     fetch('/rdhscurrentstocks')
//       .then(response => response.json())
//       .then(data => this.setState({rdhscurrentstocks: data, isLoading: false}));
//   }

//   async remove(id) {
//     await fetch(`/rdhscurrentstock/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     }).then(() => {
//       let updatedList = [...this.state.rdhscurrentstocks].filter(i => i.id !== id);
//       this.setState({rdhscurrentstocks: updatedList});
//     });
//   }

//   toggle() {
//     this.setState({
//       dropdownOpen: !this.state.dropdownOpen,
//     });
//   }

//   onRadioBtnClick(radioSelected) {
//     this.setState({
//       radioSelected: radioSelected,
//     });
//   }

//   loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

//   render() {
//     const {rdhscurrentstocks, isLoading,currentPage,dataPerPage} = this.state;
//     const indexOfLastData=currentPage * dataPerPage;
//     const indexOfFirstData=indexOfLastData - dataPerPage;
//     const currentData=rdhscurrentstocks.slice(indexOfFirstData,indexOfLastData);

//     const paginate = pageNumber => this.setState({currentPage:pageNumber});

//     if (isLoading) {
//       return <p>Loading...</p>;
//     }

//     const groupList = currentData.map(rdhscurrentstock => {
//       return <tr key={rdhscurrentstock.batch_id}>
//         <td style={{whiteSpace: 'nowrap'}}>{rdhscurrentstock.batch_id}</td>
//         <td style={{whiteSpace: 'nowrap'}}>{rdhscurrentstock.r_store_id.location}</td>
//         <td style={{whiteSpace: 'nowrap'}}>{rdhscurrentstock.sr_no.name}</td>
//         <td style={{whiteSpace: 'nowrap'}}>{rdhscurrentstock.expire_date}</td>
//         <td style={{whiteSpace: 'nowrap'}}>{rdhscurrentstock.available_quantity}</td> 
//         <td>
//         <Button size="sm" color="danger" onClick={() => {if(window.confirm('Are you sure you wish to delete this stock?')) this.remove(rdhscurrentstock.batch_id)}}><i className="fa fa-trash"></i></Button>
//         </td>     
//       </tr>
//     });
//     return (
//       <div className="animated fadeIn">
//         <Row>
//         {/* <Col lg="5">
//           <CurrentStockForm/>
//           </Col> */}
//           <Col lg="7">
//             <Card>
//               <CardHeader>
//               <i className="fa fa-align-justify"></i> Current Stock     
//               </CardHeader>
//               <CardBody>                
//                 <br />
//                 <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
//                   <thead className="thead-light">
//                   <tr>
//                     <th>Batch ID</th>
//                     <th>Warehouse</th>
//                     <th>Name</th>
//                     <th>Expire Date</th>
//                     <th>Available Quantity</th>
//                     <th>Actions</th>
//                   </tr>
//                   </thead>
//                   <tbody>
//                   {groupList}
//                   </tbody>
//                 </Table>
//               </CardBody>
//               <CardFooter>
//               <Paginations dataPerPage={dataPerPage} totalData={rdhscurrentstocks.length} paginate={paginate}/>
//               </CardFooter>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }

// export default rdhs_currentStock ;

