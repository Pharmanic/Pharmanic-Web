import React from 'react';
import { exact } from 'prop-types';


const Dashboard = React.lazy(() => import('./views/Dashboard'));
const DashboardMinistryAdmin = React.lazy(() => import('./views/DashboardMinistryAdmin'));
const DashboardMinister = React.lazy(() => import('./views/DashboardMinister'));
const DashboardMinistryStockKeeper = React.lazy(() => import('./views/DashboardMinistryStockKeeper'));


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
  { path: '/ministry_admin', exact: true, name: 'Ministry Admin Dashboard', component: DashboardMinistryAdmin},
  { path: '/minister', exact: true, name: 'Minister Dashboard', component: DashboardMinister},
  { path: '/ministry_stock_keeper', exact: true, name: 'Ministry Stock Keeper Dashboard', component: DashboardMinistryStockKeeper},

  //ministry admin

  { path: '/ministry_admin/ministry_stores', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/ministry_admin/ministry_stores/ministry_stores_list', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/ministry_admin/ministry_stores/register', exact: true, name: 'Ministry Store Registration', component: MinistryStoreRegister },
  { path: '/ministry_admin/ministry_store_detail/:id', name: 'Ministry Store Detail', component: MinistryStoreDetail },


  { path: '/ministry_admin/rdhss', exact: true, name: 'RDHS', component: RDHSList },
  { path: '/ministry_admin/rdhss/rdhs_list', exact: true, name: 'RDHS List', component: RDHSList },
  { path: '/ministry_admin/rdhss/register', exact: true, name: 'RDHS Registration', component: RDHSRegister },
  { path: '/ministry_admin/rdhs_detail/:id', name: 'RDHS Detail', component: RDHSDetail },


  { path: '/ministry_admin/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/ministry_admin/direct_hospitals/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/ministry_admin/direct_hospitals/register', exact: true, name: 'Direct Hospital Registration', component: DirectHospitalRegister },
  { path: '/ministry_admin/direct_hospital_detail/:id', name: 'Direct Hospital Detail', component: DirectHospitalDetail },

  { path: '/ministry_admin/hospital_by_rdhs', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/ministry_admin/hospital_by_rdhs/hospital_by_rdhs_list', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/ministry_admin/hospital_by_rdhs/register', exact: true, name: 'Hospital By RDHS Registration', component: HospitalByRDHSRegister },
  { path: '/ministry_admin/hospital_by_rdhs/:id', name: 'Hospital By RDHS Detail', component: HospitalByRDHSDetail },


  { path: '/ministry_admin/user', exact: true, name: 'Users', component: UserList },
  { path: '/ministry_admin/user/user_list', exact: true, name: 'User', component: UserList },
  { path: '/ministry_admin/user/register', exact: true, name: 'User Registration', component: UserRegister },

  


  //minister  

  { path: '/minister/ministry_stores', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/minister/ministry_stores/ministry_stores_list', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  // { path: '/minister/ministry_stores/register', exact: true, name: 'Ministry Store Registration', component: MinistryStoreRegister },
  { path: '/minister/ministry_store_detail/:id', name: 'Ministry Store Detail', component: MinistryStoreDetail },


  { path: '/minister/rdhss', exact: true, name: 'RDHS', component: RDHSList },
  { path: '/minister/rdhss/rdhs_list', exact: true, name: 'RDHS List', component: RDHSList },
  // { path: '/minister/rdhss/register', exact: true, name: 'RDHS Registration', component: RDHSRegister },
  { path: '/minister/rdhs_detail/:id', name: 'RDHS Detail', component: RDHSDetail },


  { path: '/minister/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/minister/direct_hospitals/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  // { path: '/minister/direct_hospitals/register', exact: true, name: 'Direct Hospital Registration', component: DirectHospitalRegister },
  { path: '/minister/direct_hospital_detail/:id', name: 'Direct Hospital Detail', component: DirectHospitalDetail },

  { path: '/minister/hospital_by_rdhs', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/minister/hospital_by_rdhs/hospital_by_rdhs_list', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  // { path: '/minister/hospital_by_rdhs/register', exact: true, name: 'Hospital By RDHS Registration', component: HospitalByRDHSRegister },
  { path: '/minister/hospital_by_rdhs/:id', name: 'Hospital By RDHS Detail', component: HospitalByRDHSDetail },

  { path: '/minister/user', exact: true, name: 'Users', component: UserList },
  { path: '/minister/user/user_list', exact: true, name: 'User', component: UserList },



  //ministry stock keeper

  { path: '/ministry_stock_keeper/ministry_stores', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/ministry_stock_keeper/ministry_stores/ministry_stores_list', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  // { path: '/minister/ministry_stores/register', exact: true, name: 'Ministry Store Registration', component: MinistryStoreRegister },
  { path: '/ministry_stock_keeper/ministry_store_detail/:id', name: 'Ministry Store Detail', component: MinistryStoreDetail },


  { path: '/ministry_stock_keeper/rdhss', exact: true, name: 'RDHS', component: RDHSList },
  { path: '/ministry_stock_keeper/rdhss/rdhs_list', exact: true, name: 'RDHS List', component: RDHSList },
  // { path: '/minister/rdhss/register', exact: true, name: 'RDHS Registration', component: RDHSRegister },
  { path: '/ministry_stock_keeper/rdhs_detail/:id', name: 'RDHS Detail', component: RDHSDetail },


  { path: '/ministry_stock_keeper/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/ministry_stock_keeper/direct_hospitals/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  // { path: '/minister/direct_hospitals/register', exact: true, name: 'Direct Hospital Registration', component: DirectHospitalRegister },
  { path: '/ministry_stock_keeper/direct_hospital_detail/:id', name: 'Direct Hospital Detail', component: DirectHospitalDetail },

  { path: '/ministry_stock_keeper/hospital_by_rdhs', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/ministry_stock_keeper/hospital_by_rdhs/hospital_by_rdhs_list', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  // { path: '/minister/hospital_by_rdhs/register', exact: true, name: 'Hospital By RDHS Registration', component: HospitalByRDHSRegister },
  { path: '/ministry_stock_keeper/hospital_by_rdhs/:id', name: 'Hospital By RDHS Detail', component: HospitalByRDHSDetail },












  

  



];

export default routes;
