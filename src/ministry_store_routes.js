import React from 'react';
import { exact } from 'prop-types';

const DashboardMinistryStoreAdmin = React.lazy(() => import('./views/DashboardMinistryStoreAdmin'));
const DashboardMinistryStoreStockKeeper = React.lazy(() => import('./views/DashboardMinistryStoreStockKeeper'));

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

  { path: '/ministry_store_admin', exact: true, name: 'Ministry Store Admin', component: DashboardMinistryStoreAdmin},
  { path: '/ministry_store_stock_keeper', exact: true, name: 'Ministry Store Stock Keeper', component: DashboardMinistryStoreStockKeeper},



  
  //ministry store admin

  { path: '/ministry_store_admin/ministry_stores', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/ministry_store_admin/ministry_stores/ministry_stores_list', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  // { path: '/ministry_admin/ministry_stores/register', exact: true, name: 'Ministry Store Registration', component: MinistryStoreRegister },
  { path: '/ministry_store_admin/ministry_store_detail/:id', name: 'Ministry Store Detail', component: MinistryStoreDetail },

{ path: '/ministry_store_admin/rdhss', exact: true, name: 'RDHS', component: RDHSList },
  { path: '/ministry_store_admin/rdhss/rdhs_list', exact: true, name: 'RDHS List', component: RDHSList },
  // { path: '/ministry_store_admin/rdhss/register', exact: true, name: 'RDHS Registration', component: RDHSRegister },
  { path: '/ministry_store_admin/rdhs_detail/:id', name: 'RDHS Detail', component: RDHSDetail },


  { path: '/ministry_store_admin/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/ministry_store_admin/direct_hospitals/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  // { path: '/ministry_store_admin/direct_hospitals/register', exact: true, name: 'Direct Hospital Registration', component: DirectHospitalRegister },
  { path: '/ministry_store_admin/direct_hospital_detail/:id', name: 'Direct Hospital Detail', component: DirectHospitalDetail },

  { path: '/ministry_store_admin/hospital_by_rdhs', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/ministry_store_admin/hospital_by_rdhs/hospital_by_rdhs_list', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  // { path: '/ministry_store_admin/hospital_by_rdhs/register', exact: true, name: 'Hospital By RDHS Registration', component: HospitalByRDHSRegister },
  { path: '/ministry_store_admin/hospital_by_rdhs/:id', name: 'Hospital By RDHS Detail', component: HospitalByRDHSDetail },


  // //ministry store stock keeper

   { path: '/ministry_store_stock_keeper/ministry_stores', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/ministry_store_stock_keeper/ministry_stores/ministry_stores_list', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  // { path: '/ministry_admin/ministry_stores/register', exact: true, name: 'Ministry Store Registration', component: MinistryStoreRegister },
  { path: '/ministry_store_stock_keeper/ministry_store_detail/:id', name: 'Ministry Store Detail', component: MinistryStoreDetail },

{ path: '/ministry_store_stock_keeper/rdhss', exact: true, name: 'RDHS', component: RDHSList },
  { path: '/ministry_store_stock_keeper/rdhss/rdhs_list', exact: true, name: 'RDHS List', component: RDHSList },
  // { path: '/ministry_store_stock_keeper/rdhss/register', exact: true, name: 'RDHS Registration', component: RDHSRegister },
  { path: '/ministry_store_stock_keeper/rdhs_detail/:id', name: 'RDHS Detail', component: RDHSDetail },


  { path: '/ministry_store_stock_keeper/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/ministry_store_stock_keeper/direct_hospitals/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  // { path: '/ministry_store_stock_keeper/direct_hospitals/register', exact: true, name: 'Direct Hospital Registration', component: DirectHospitalRegister },
  { path: '/ministry_store_stock_keeper/direct_hospital_detail/:id', name: 'Direct Hospital Detail', component: DirectHospitalDetail },

  { path: '/ministry_store_stock_keeper/hospital_by_rdhs', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/ministry_store_stock_keeper/hospital_by_rdhs/hospital_by_rdhs_list', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  // { path: '/ministry_store_stock_keeper/hospital_by_rdhs/register', exact: true, name: 'Hospital By RDHS Registration', component: HospitalByRDHSRegister },
  { path: '/ministry_store_stock_keeper/hospital_by_rdhs/:id', name: 'Hospital By RDHS Detail', component: HospitalByRDHSDetail },



];

export default routes;
