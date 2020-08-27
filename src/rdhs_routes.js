import React from 'react';
import { exact } from 'prop-types';

const DashboardRDHSAdmin = React.lazy(() => import('./views/DashboardRDHSAdmin'));
const DashboardRDHSDirector = React.lazy(() => import('./views/DashboardRDHSDirector'));

// const DashboardMinistryStoreStockKeeper = React.lazy(() => import('./views/DashboardMinistryStoreStockKeeper'));

//Ministry 
const MinistryStoresList = React.lazy(() => import('./views/Ministry Store/MinistryStores'));
const MinistryStoreDetail = React.lazy(() => import('./views/Ministry Store/MinistryStoreDetail'));
// const MinistryStoreRegister = React.lazy(() => import('./views/Ministry Store/RegisterMinistryStore'));
const RDHSList = React.lazy(() => import('./views/RDHS-Ministry/RDHSList'));
// const RDHSRegister = React.lazy(() => import('./views/RDHS-Ministry/RegisterRDHS'));
const RDHSDetail = React.lazy(() => import('./views/RDHS-Ministry/RDHSDetail'));
const DirectHospitalList = React.lazy(() => import('./views/Direct Hospital/DirectHospitals'));
// const DirectHospitalRegister = React.lazy(() => import('./views/Direct Hospital/RegisterDirectHospital'));
const DirectHospitalDetail = React.lazy(() => import('./views/Direct Hospital/DirectHospitalDetail'));
// const HospitalByRDHSRegister = React.lazy(() => import('./views/Hospital by RDHS/RegisterHospitalByRDHS'));
const HospitalByRDHSList = React.lazy(() => import('./views/Hospital by RDHS/HospitalByRDHS'));
const HospitalByRDHSDetail = React.lazy(() => import('./views/Hospital by RDHS/HospitalByRDHSDetail'));
// const UserRegister = React.lazy(() => import('./views/User/RegisterUser'));
// const UserList = React.lazy(() => import('./views/User/UserList'));



const routes = [

  { path: '/rdhs_admin', exact: true, name: 'RDHS Admin', component: DashboardRDHSAdmin},
  { path: '/rdhs_director', exact: true, name: 'RDHS Admin', component: DashboardRDHSDirector},

  // { path: '/ministry_store_stock_keeper', exact: true, name: 'Ministry Store Stock Keeper', component: DashboardMinistryStoreStockKeeper},



  
  //rdhs admin

  { path: '/rdhs_admin/ministry_stores', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/rdhs_admin/ministry_stores/ministry_stores_list', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  // { path: '/ministry_admin/ministry_stores/register', exact: true, name: 'Ministry Store Registration', component: MinistryStoreRegister },
  { path: '/rdhs_admin/ministry_store_detail/:id', name: 'Ministry Store Detail', component: MinistryStoreDetail },

{ path: '/rdhs_admin/rdhss', exact: true, name: 'RDHS', component: RDHSList },
  { path: '/rdhs_admin/rdhss/rdhs_list', exact: true, name: 'RDHS List', component: RDHSList },
  // { path: '/rdhs_admin/rdhss/register', exact: true, name: 'RDHS Registration', component: RDHSRegister },
  { path: '/rdhs_admin/rdhs_detail/:id', name: 'RDHS Detail', component: RDHSDetail },


  { path: '/rdhs_admin/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/rdhs_admin/direct_hospitals/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  // { path: '/rdhs_admin/direct_hospitals/register', exact: true, name: 'Direct Hospital Registration', component: DirectHospitalRegister },
  { path: '/rdhs_admin/direct_hospital_detail/:id', name: 'Direct Hospital Detail', component: DirectHospitalDetail },

  { path: '/rdhs_admin/hospital_by_rdhs', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/rdhs_admin/hospital_by_rdhs/hospital_by_rdhs_list', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  // { path: '/rdhs_admin/hospital_by_rdhs/register', exact: true, name: 'Hospital By RDHS Registration', component: HospitalByRDHSRegister },
  { path: '/rdhs_admin/hospital_by_rdhs/:id', name: 'Hospital By RDHS Detail', component: HospitalByRDHSDetail },


// rdhs director

  { path: '/rdhs_director/ministry_stores', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/rdhs_director/ministry_stores/ministry_stores_list', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  // { path: '/ministry_admin/ministry_stores/register', exact: true, name: 'Ministry Store Registration', component: MinistryStoreRegister },
  { path: '/rdhs_director/ministry_store_detail/:id', name: 'Ministry Store Detail', component: MinistryStoreDetail },

{ path: '/rdhs_director/rdhss', exact: true, name: 'RDHS', component: RDHSList },
  { path: '/rdhs_director/rdhss/rdhs_list', exact: true, name: 'RDHS List', component: RDHSList },
  // { path: '/rdhs_director/rdhss/register', exact: true, name: 'RDHS Registration', component: RDHSRegister },
  { path: '/rdhs_director/rdhs_detail/:id', name: 'RDHS Detail', component: RDHSDetail },


  { path: '/rdhs_director/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/rdhs_director/direct_hospitals/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  // { path: '/rdhs_director/direct_hospitals/register', exact: true, name: 'Direct Hospital Registration', component: DirectHospitalRegister },
  { path: '/rdhs_director/direct_hospital_detail/:id', name: 'Direct Hospital Detail', component: DirectHospitalDetail },

  { path: '/rdhs_director/hospital_by_rdhs', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/rdhs_director/hospital_by_rdhs/hospital_by_rdhs_list', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  // { path: '/rdhs_director/hospital_by_rdhs/register', exact: true, name: 'Hospital By RDHS Registration', component: HospitalByRDHSRegister },
  { path: '/rdhs_director/hospital_by_rdhs/:id', name: 'Hospital By RDHS Detail', component: HospitalByRDHSDetail },

  // //ministry store stock keeper

   { path: '/ministry_store_stock_keeper/ministry_stores', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/ministry_store_stock_keeper/ministry_stores/ministry_stores_list', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  // { path: '/ministry_admin/ministry_stores/register', exact: true, name: 'Ministry Store Registration', component: MinistryStoreRegister },
  { path: '/ministry_store_stock_keeper/ministry_store_detail/:id', name: 'Ministry Store Detail', component: MinistryStoreDetail },



];

export default routes;
