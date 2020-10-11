import React from 'react';
import { exact } from 'prop-types';


// const Dashboard = React.lazy(() => import('./views/Dashboard'));
const DashboardHospitalByRDHSAdmin = React.lazy(() => import('./views/DashboardHospitalByRDHSAdmin'));
const DashboardHospitalByRDHSDoctorIncharge = React.lazy(() => import('./views/DashboardHospitalByRDHSDoctorIncharge'));
const DashboardHospitalByRDHSStockKeeper = React.lazy(() => import('./views/DashboardHospitalByRDHSStockKeeper'));



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
  { path: '/hospital_by_rdhs_admin', exact: true, name: 'Hospital By RDHS Admin Dashboard', component: DashboardHospitalByRDHSAdmin},
  { path: '/hospital_by_rdhs_doctor_incharge', exact: true, name: 'Hospital By RDHS Doctor Incharge Dashboard', component:DashboardHospitalByRDHSDoctorIncharge },
  { path: '/hospital_by_rdhs_stock_keeper', exact: true, name: 'Hospital By RDHS Stock Keeper Dashboard', component: DashboardHospitalByRDHSStockKeeper},

  //hospital by rdhs admin

  { path: '/hospital_by_rdhs_admin/ministry_stores', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/hospital_by_rdhs_admin/ministry_stores/ministry_stores_list', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  // { path: '/hospital_by_rdhs_admin/ministry_stores/register', exact: true, name: 'Ministry Store Registration', component: MinistryStoreRegister },
  { path: '/hospital_by_rdhs_admin/ministry_store_detail/:id', name: 'Ministry Store Detail', component: MinistryStoreDetail },


  { path: '/hospital_by_rdhs_admin/rdhss', exact: true, name: 'RDHS', component: RDHSList },
  { path: '/hospital_by_rdhs_admin/rdhss/rdhs_list', exact: true, name: 'RDHS List', component: RDHSList },
  // { path: '/hospital_by_rdhs_admin/rdhss/register', exact: true, name: 'RDHS Registration', component: RDHSRegister },
  { path: '/hospital_by_rdhs_admin/rdhs_detail/:id', name: 'RDHS Detail', component: RDHSDetail },


  { path: '/hospital_by_rdhs_admin/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/hospital_by_rdhs_admin/direct_hospitals/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  // { path: '/hospital_by_rdhs_admin/direct_hospitals/register', exact: true, name: 'Direct Hospital Registration', component: DirectHospitalRegister },
  { path: '/hospital_by_rdhs_admin/direct_hospital_detail/:id', name: 'Direct Hospital Detail', component: DirectHospitalDetail },

  { path: '/hospital_by_rdhs_admin/hospital_by_rdhs', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/hospital_by_rdhs_admin/hospital_by_rdhs/hospital_by_rdhs_list', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  // { path: '/hospital_by_rdhs_admin/hospital_by_rdhs/register', exact: true, name: 'Hospital By RDHS Registration', component: HospitalByRDHSRegister },
  { path: '/hospital_by_rdhs_admin/hospital_by_rdhs/:id', name: 'Hospital By RDHS Detail', component: HospitalByRDHSDetail },


  // { path: '/ministry_admin/user', exact: true, name: 'Users', component: UserList },
  // { path: '/ministry_admin/user/user_list', exact: true, name: 'User', component: UserList },
  // { path: '/ministry_admin/user/register', exact: true, name: 'User Registration', component: UserRegister },

  //doctor incharge

  { path: '/hospital_by_rdhs_doctor_incharge/ministry_stores', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/hospital_by_rdhs_doctor_incharge/ministry_stores/ministry_stores_list', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  // { path: '/hospital_by_rdhs_doctor_incharge/ministry_stores/register', exact: true, name: 'Ministry Store Registration', component: MinistryStoreRegister },
  { path: '/hospital_by_rdhs_doctor_incharge/ministry_store_detail/:id', name: 'Ministry Store Detail', component: MinistryStoreDetail },


  { path: '/hospital_by_rdhs_doctor_incharge/rdhss', exact: true, name: 'RDHS', component: RDHSList },
  { path: '/hospital_by_rdhs_doctor_incharge/rdhss/rdhs_list', exact: true, name: 'RDHS List', component: RDHSList },
  // { path: '/hospital_by_rdhs_doctor_incharge/rdhss/register', exact: true, name: 'RDHS Registration', component: RDHSRegister },
  { path: '/hospital_by_rdhs_doctor_incharge/rdhs_detail/:id', name: 'RDHS Detail', component: RDHSDetail },


  { path: '/hospital_by_rdhs_doctor_incharge/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/hospital_by_rdhs_doctor_incharge/direct_hospitals/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  // { path: '/hospital_by_rdhs_doctor_incharge/direct_hospitals/register', exact: true, name: 'Direct Hospital Registration', component: DirectHospitalRegister },
  { path: '/hospital_by_rdhs_doctor_incharge/direct_hospital_detail/:id', name: 'Direct Hospital Detail', component: DirectHospitalDetail },

  { path: '/hospital_by_rdhs_doctor_incharge/hospital_by_rdhs', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/hospital_by_rdhs_doctor_incharge/hospital_by_rdhs/hospital_by_rdhs_list', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  // { path: '/hospital_by_rdhs_doctor_incharge/hospital_by_rdhs/register', exact: true, name: 'Hospital By RDHS Registration', component: HospitalByRDHSRegister },
  { path: '/hospital_by_rdhs_doctor_incharge/hospital_by_rdhs/:id', name: 'Hospital By RDHS Detail', component: HospitalByRDHSDetail },

  // { path: '/hospital_by_rdhs_doctor_incharge/user', exact: true, name: 'Users', component: UserList },
  // { path: '/hospital_by_rdhs_doctor_incharge/user/user_list', exact: true, name: 'User', component: UserList },



  //hospital stock keeper

  { path: '/hospital_by_rdhs_stock_keeper/ministry_stores', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/hospital_by_rdhs_stock_keeper/ministry_stores/ministry_stores_list', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  // { path: '/minister/ministry_stores/register', exact: true, name: 'Ministry Store Registration', component: MinistryStoreRegister },
  { path: '/hospital_by_rdhs_stock_keeper/ministry_store_detail/:id', name: 'Ministry Store Detail', component: MinistryStoreDetail },


  { path: '/hospital_by_rdhs_stock_keeper/rdhss', exact: true, name: 'RDHS', component: RDHSList },
  { path: '/hospital_by_rdhs_stock_keeper/rdhss/rdhs_list', exact: true, name: 'RDHS List', component: RDHSList },
  // { path: '/minister/rdhss/register', exact: true, name: 'RDHS Registration', component: RDHSRegister },
  { path: '/hospital_by_rdhs_stock_keeper/rdhs_detail/:id', name: 'RDHS Detail', component: RDHSDetail },


  { path: '/hospital_by_rdhs_stock_keeper/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/hospital_by_rdhs_stock_keeper/direct_hospitals/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  // { path: '/minister/direct_hospitals/register', exact: true, name: 'Direct Hospital Registration', component: DirectHospitalRegister },
  { path: '/hospital_by_rdhs_stock_keeper/direct_hospital_detail/:id', name: 'Direct Hospital Detail', component: DirectHospitalDetail },

  { path: '/hospital_by_rdhs_stock_keeper/hospital_by_rdhs', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/hospital_by_rdhs_stock_keeper/hospital_by_rdhs/hospital_by_rdhs_list', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  // { path: '/minister/hospital_by_rdhs/register', exact: true, name: 'Hospital By RDHS Registration', component: HospitalByRDHSRegister },
  { path: '/hospital_by_rdhs_stock_keeper/hospital_by_rdhs/:id', name: 'Hospital By RDHS Detail', component: HospitalByRDHSDetail },












  

  



];

export default routes;
