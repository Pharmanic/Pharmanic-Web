import React from 'react';
import { exact } from 'prop-types';


// const Dashboard = React.lazy(() => import('./views/Dashboard'));
const DashboardDirectHospitalAdmin = React.lazy(() => import('./views/DashboardDirectHospitalAdmin'));
const DashboardDirectHospitalDoctorIncharge = React.lazy(() => import('./views/DashboardDirectHospitalDoctorInCharge'));
const DashboardDirectHospitalStockKeeper = React.lazy(() => import('./views/DashboardDirectHospitalDoctorInCharge'));

// const DashboardMinister = React.lazy(() => import('./views/DashboardMinister'));
// const DashboardMinistryStockKeeper = React.lazy(() => import('./views/DashboardMinistryStockKeeper'));


//Ministry 
const MinistryStoresList = React.lazy(() => import('./views/Ministry Store/MinistryStores'));
const MinistryStoreRegister = React.lazy(() => import('./views/Ministry Store/RegisterMinistryStore'));
const RDHSList = React.lazy(() => import('./views/RDHS-Ministry/RDHSList'));
const RDHSRegister = React.lazy(() => import('./views/RDHS-Ministry/RegisterRDHS'));
const RDHSDetail = React.lazy(() => import('./views/RDHS-Ministry/RDHSDetail'));
const DirectHospitalList = React.lazy(() => import('./views/Direct Hospital/DirectHospitals'));
const DirectHospitalRegister = React.lazy(() => import('./views/Direct Hospital/RegisterDirectHospital'));
const DirectHospitalDetail = React.lazy(() => import('./views/Direct Hospital/DirectHospitalDetail'));
const HospitalByRDHSRegister = React.lazy(() => import('./views/Hospital by RDHS/RegisterHospitalByRDHS'));
const HospitalByRDHSList = React.lazy(() => import('./views/Hospital by RDHS/HospitalByRDHS'));
const HospitalByRDHSDetail = React.lazy(() => import('./views/Hospital by RDHS/HospitalByRDHSDetail'));
const UserRegister = React.lazy(() => import('./views/User/RegisterUser'));
const UserList = React.lazy(() => import('./views/User/UserList'));
const MinistryStoreDetail = React.lazy(() => import('./views/Ministry Store/MinistryStoreDetail'));


const routes = [
  // { path: '/', exact: true, name: 'Home'},
  { path: '/direct_hospital_admin', exact: true, name: 'Direct Hospital Admin Dashboard', component: DashboardDirectHospitalAdmin},
  { path: '/direct_hospital_doctor_incharge', exact: true, name: 'Direct Hospital Doctor Incharge Dashboard', component: DashboardDirectHospitalDoctorIncharge},
  { path: '/direct_hospital_stock_keeper', exact: true, name: 'Direct Hospital Stock Keeper Dashboard', component: DashboardDirectHospitalStockKeeper},

  //ministry admin

  { path: '/direct_hospital_admin/ministry_stores', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/direct_hospital_admin/ministry_stores/ministry_stores_list', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  // { path: '/direct_hospital_admin/ministry_stores/register', exact: true, name: 'Ministry Store Registration', component: MinistryStoreRegister },
  { path: '/direct_hospital_admin/ministry_store_detail/:id', name: 'Ministry Store Detail', component: MinistryStoreDetail },


  { path: '/direct_hospital_admin/rdhss', exact: true, name: 'RDHS', component: RDHSList },
  { path: '/direct_hospital_admin/rdhss/rdhs_list', exact: true, name: 'RDHS List', component: RDHSList },
  // { path: '/direct_hospital_admin/rdhss/register', exact: true, name: 'RDHS Registration', component: RDHSRegister },
  { path: '/direct_hospital_admin/rdhs_detail/:id', name: 'RDHS Detail', component: RDHSDetail },


  { path: '/direct_hospital_admin/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/direct_hospital_admin/direct_hospitals/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  // { path: '/direct_hospital_admin/direct_hospitals/register', exact: true, name: 'Direct Hospital Registration', component: DirectHospitalRegister },
  { path: '/direct_hospital_admin/direct_hospital_detail/:id', name: 'Direct Hospital Detail', component: DirectHospitalDetail },

  { path: '/direct_hospital_admin/hospital_by_rdhs', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/direct_hospital_admin/hospital_by_rdhs/hospital_by_rdhs_list', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  // { path: '/direct_hospital_admin/hospital_by_rdhs/register', exact: true, name: 'Hospital By RDHS Registration', component: HospitalByRDHSRegister },
  { path: '/direct_hospital_admin/hospital_by_rdhs/:id', name: 'Hospital By RDHS Detail', component: HospitalByRDHSDetail },


  // { path: '/ministry_admin/user', exact: true, name: 'Users', component: UserList },
  // { path: '/ministry_admin/user/user_list', exact: true, name: 'User', component: UserList },
  // { path: '/ministry_admin/user/register', exact: true, name: 'User Registration', component: UserRegister },

  //doctor incharge

  { path: '/direct_hospital_doctor_incharge/ministry_stores', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/direct_hospital_doctor_incharge/ministry_stores/ministry_stores_list', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  // { path: '/direct_hospital_doctor_incharge/ministry_stores/register', exact: true, name: 'Ministry Store Registration', component: MinistryStoreRegister },
  { path: '/direct_hospital_doctor_incharge/ministry_store_detail/:id', name: 'Ministry Store Detail', component: MinistryStoreDetail },


  { path: '/direct_hospital_doctor_incharge/rdhss', exact: true, name: 'RDHS', component: RDHSList },
  { path: '/direct_hospital_doctor_incharge/rdhss/rdhs_list', exact: true, name: 'RDHS List', component: RDHSList },
  // { path: '/direct_hospital_doctor_incharge/rdhss/register', exact: true, name: 'RDHS Registration', component: RDHSRegister },
  { path: '/direct_hospital_doctor_incharge/rdhs_detail/:id', name: 'RDHS Detail', component: RDHSDetail },


  { path: '/direct_hospital_doctor_incharge/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/direct_hospital_doctor_incharge/direct_hospitals/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  // { path: '/direct_hospital_doctor_incharge/direct_hospitals/register', exact: true, name: 'Direct Hospital Registration', component: DirectHospitalRegister },
  { path: '/direct_hospital_doctor_incharge/direct_hospital_detail/:id', name: 'Direct Hospital Detail', component: DirectHospitalDetail },

  { path: '/direct_hospital_doctor_incharge/hospital_by_rdhs', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/direct_hospital_doctor_incharge/hospital_by_rdhs/hospital_by_rdhs_list', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  // { path: '/direct_hospital_doctor_incharge/hospital_by_rdhs/register', exact: true, name: 'Hospital By RDHS Registration', component: HospitalByRDHSRegister },
  { path: '/direct_hospital_doctor_incharge/hospital_by_rdhs/:id', name: 'Hospital By RDHS Detail', component: HospitalByRDHSDetail },

  // { path: '/direct_hospital_doctor_incharge/user', exact: true, name: 'Users', component: UserList },
  // { path: '/direct_hospital_doctor_incharge/user/user_list', exact: true, name: 'User', component: UserList },



  //direct hospital stock keeper

  { path: '/direct_hospital_stock_keeper/ministry_stores', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/direct_hospital_stock_keeper/ministry_stores/ministry_stores_list', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  // { path: '/minister/ministry_stores/register', exact: true, name: 'Ministry Store Registration', component: MinistryStoreRegister },
  { path: '/direct_hospital_stock_keeper/ministry_store_detail/:id', name: 'Ministry Store Detail', component: MinistryStoreDetail },


  { path: '/direct_hospital_stock_keeper/rdhss', exact: true, name: 'RDHS', component: RDHSList },
  { path: '/direct_hospital_stock_keeper/rdhss/rdhs_list', exact: true, name: 'RDHS List', component: RDHSList },
  // { path: '/minister/rdhss/register', exact: true, name: 'RDHS Registration', component: RDHSRegister },
  { path: '/direct_hospital_stock_keeper/rdhs_detail/:id', name: 'RDHS Detail', component: RDHSDetail },


  { path: '/direct_hospital_stock_keeper/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/direct_hospital_stock_keeper/direct_hospitals/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  // { path: '/minister/direct_hospitals/register', exact: true, name: 'Direct Hospital Registration', component: DirectHospitalRegister },
  { path: '/direct_hospital_stock_keeper/direct_hospital_detail/:id', name: 'Direct Hospital Detail', component: DirectHospitalDetail },

  { path: '/direct_hospital_stock_keeper/hospital_by_rdhs', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/direct_hospital_stock_keeper/hospital_by_rdhs/hospital_by_rdhs_list', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  // { path: '/minister/hospital_by_rdhs/register', exact: true, name: 'Hospital By RDHS Registration', component: HospitalByRDHSRegister },
  { path: '/direct_hospital_stock_keeper/hospital_by_rdhs/:id', name: 'Hospital By RDHS Detail', component: HospitalByRDHSDetail },












  

  



];

export default routes;
