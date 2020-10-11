import React from 'react';

// import rdhs_reg from './rdhs/rdhs_reg';
// import rdhs_driverreg from './views/Ministry Store/MinistryStores';
// import rdhs_vehiclereg from './rdhs/rdhs_vehiclereg';
// import rdhs_all_Hospital_Details from './rdhs/rdhs_all_Hospital_Details';
// import rdhs_order_medicine from './rdhs/rdhs_order_medicine';
// import rdhs_currentStockform from './rdhs/rdhs_currentStockform';
// import rdhs_currentStock from './rdhs/rdhs_currentStock';
// import rdhs_expiringmed from './rdhs/rdhs_expiringmed';

import Rdhs_Hospital_Current_Stock from './rdhsHospital/Rdhs_Hospital_Current_Stock';
import Rdhs_Hospital_Order_Form from './rdhsHospital/Rdhs_Hospital_Order_Form';
import Rdhs_Hospital_SortBy_Qty from './rdhsHospital/Rdhs_Hospital_SortBy_Qty';
import Rdhs_Hospital_Return_Cart from './rdhsHospital/Rdhs_Hospital_Return_Cart';
import Rdhs_Hospital_Update_Return_Cart from './rdhsHospital/Rdhs_Hospital_Update_Return_Cart';
import Rdhs_Hospital_View_Order_Cart from './rdhsHospital/Rdhs_Hospital_View_Order_Cart';
import Rdhs_Hospital_Login from './rdhsHospital/Rdhs_Hospital_Login';

import Rdhs_Hospital_Issue_Drug from './rdhsHospital/Rdhs_Hospital_Issue_Drug';
import Rdhs_Hospital_Update_Order_Cart from './rdhsHospital/Rdhs_Hospital_Update_Order_Cart';
import { exact } from 'prop-types';
import DirectHospitalRequestOrderForm from './views/DirectHospitalRequestOrderForm/DirectHospitalRequestOrderForm';


const RdhsHopitalDrugStore= React.lazy(() => import('./rdhsHospital/Rdhs_Hospital_Current_Stock'));
// const RdhsHopitalTrack= React.lazy(() => import('./rdhsHospital/Rdhs_Track'));
const RdhsHopitalReturnConfirm= React.lazy(() => import('./rdhsHospital/Rdhs_Hospital_Return_Confirm'));
const RdhsHospitalExpireDrug = React.lazy(() => import('./rdhsHospital/Rdhs_Hospital_Expiration'));
const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Notification = React.lazy(() => import('./views/Notification'));
const ImportStock = React.lazy(() => import('./views/ImportStock'));
const ImportStockForm = React.lazy(() => import('./views/ImportStockForm'));
const CurrentStock = React.lazy(() => import('./views/CurrentStock'));
const CurrentStockForm = React.lazy(() => import('./views/CurrentStockForm'));
const DamageStock = React.lazy(() => import('./views/DamageStock'));
const DamageStockForm = React.lazy(() => import('./views/DamageStockForm'));
const DirectHospital = React.lazy(() => import('./views/DirectHospital'));
const DirectHospitalCurrentStock = React.lazy(() => import('./views/DirectHospitalCurrentStock'));
const DirectHospitalForm = React.lazy(() => import('./views/DirectHospitalForm'));
const DirectHospitalReqOrder = React.lazy(() => import('./views/DirectHospitalReqOrder'));
const DHReqOrderDetail = React.lazy(() => import('./views/DHReqOrderDetail'));
const DHPendingOrder = React.lazy(() => import('./views/DHPendingOrder'));
const SupplyToDHModel = React.lazy(() => import('./views/SupplyToDHModel'));
const Medicine = React.lazy(() => import('./views/Medicine'));
const Driver = React.lazy(() => import('./views/Driver'));
const MinistryStore = React.lazy(() => import('./views/MinistryStore'));
const Vehicle = React.lazy(() => import('./views/Vehicle'));
const Rdhs = React.lazy(() => import('./views/Rdhs'));
const RdhsReqOrder = React.lazy(() => import('./views/RdhsReqOrder'));
const RdhsReqOrderDetail = React.lazy(() => import('./views/RdhsReqOrderDetail'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

//rdhs
//const rdhsreg= React.lazy(() => import('./rdhs/rdhs_reg'));
// const rdhsdriverreg= React.lazy(() => import('./rdhs/rdhs_driverreg'));
// const rdhsvehiclereg= React.lazy(() => import('./rdhs/rdhs_vehiclereg'));
// const rdhsAllHospitalDetails= React.lazy(() => import('./rdhs/rdhs_all_Hospital_Details'));
// const rdhsOrderMedicine= React.lazy(() => import('./rdhs/rdhs_order_medicine'));
// const rdhscurrentStockform= React.lazy(() => import('./rdhs/rdhs_currentStockform'));
// const rdhscurrentStock= React.lazy(() => import('./rdhs/rdhs_currentStock'));
// const rdhsexpiringmed= React.lazy(() => import('./rdhs/rdhs_expiringmed'));
const RdhsallhospitalDetail = React.lazy(() => import('./views/RdhsM/RdhsallHospitalDetail'));
const RdhsCurrentStock = React.lazy(() => import('./views/RdhsM/RdhsCurrentStock'));
const RdhsCurrentStockForm = React.lazy(() => import('./views/RdhsM/RdhsCurrentStockForm'));
const RdhsDriverReg = React.lazy(() => import('./views/RdhsM/RdhsDriverReg'));
const RdhsExpiringMed = React.lazy(() => import('./views/RdhsM/RdhsExpiringMed'));
const RdhsExpiringMedD = React.lazy(() => import('./views/RdhsM/RdhsExpiringMedD'));
const RdhsMedOrderfrmHos= React.lazy(() => import('./views/RdhsM/RdhsMedOrderfrmHos'));
const RdhsMedOrderfrmHosDetails= React.lazy(() => import('./views/RdhsM/RdhsMedOrderfrmHosDetails'));
const RdhsVehicleReg = React.lazy(() => import('./views/RdhsM/RdhsVehiclereg'));
const IssueDrugtoHos= React.lazy(() => import('./views/RdhsM/IssueDrugtoHos'));
const RdhsOrderToMS= React.lazy(() => import('./views/RdhsM/RdhsOrderToMS'));
const RdhsOrderToMSDetail= React.lazy(() => import('./views/RdhsM/RdhsOrderToMSDetail/RdhsOrderToMSDetail'));
const RdhsDriverList= React.lazy(() => import('./views/RdhsM/RdhsDriverList'));
const RdhsVehicleList= React.lazy(() => import('./views/RdhsM/RdhsVehicleList'));

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

//DirectHospital
const LM_Hospital_Current_Stock = React.lazy(() => import('./views/LMHospital/LM_Hospital_Current_Stock'));
const LM_Hospital_View_Order_Cart = React.lazy(() => import('./views/LMHospital/LM_Hospital_View_Order_Cart'));
const LM_Hospital_SortBy_Qty = React.lazy(() => import('./views/LMHospital/LM_Hospital_SortBy_Qty'));
const LM_Hospital_SortBy_Expiration = React.lazy(() => import('./views/LMHospital/LM_Hospital_Expiration'));
const LM_Hospital_Update_Order_Cart = React.lazy(() => import('./views/LMHospital/LM_Hospital_Update_Order_Cart'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [

  //rdhs
  { path: '/', exact: true, name: 'Home' },

//  { path: '/rdhs_reg', name: 'Registration', component: rdhs_reg },
//   { path: '/rdhs_driverreg', name: 'Rdhs_Driver_Registration', component: rdhs_driverreg },
//   { path: '/rdhs_vehiclereg', name: 'Rdhs_Vehicle_Registration', component: rdhs_vehiclereg },
//   { path: '/rdhs_all_Hospital_Details', name: 'Rdhs_Hospital_Details', component:  rdhs_all_Hospital_Details },
//   { path: '/rdhs_order_medicine', name: 'Rdhs_Order_Medicine', component: rdhs_order_medicine },
//   { path: '/rdhs_currentStockform', name: 'Rdhs_currentStockform', component: rdhs_currentStockform },
//   { path: '/rdhs_currentStock', name: 'Rdhs_currentStock', component: rdhs_currentStock},
//   { path: '/rdhs_expiringmed', name: 'Rdhs_expiringmed', component:  rdhs_expiringmed},
 
{ path: '/rdhsallhosdetail', name: 'RdhsallHospitalDetail', component: RdhsallhospitalDetail },
{ path: '/rdhscurrentstock', name: 'RdhsCurrentStock', component: RdhsCurrentStock },
{ path: '/rdhscurrentstockform', name: 'RdhsCurrentStockForm', component: RdhsCurrentStockForm },
{ path: '/rdhsdriverreg', name: 'RdhsDriverReg', component: RdhsDriverReg },
{ path: '/rdhsexpiringmed', name: 'RdhsExpiringMed', component: RdhsExpiringMed },
{ path: '/rdhsexpiringmedd', name: 'RdhsExpiringMedD', component: RdhsExpiringMedD },
{ path: '/rdhsMedOrderfrmHos', name: 'RdhsMedOrderfrmHos', component: RdhsMedOrderfrmHos},
{ path: '/rdhsMedOrderfrmHosDetails', name: 'RdhsMedOrderfrmHosDetails', component: RdhsMedOrderfrmHosDetails},
{ path: '/rdhsvehiclereg', name: 'RdhsVehicleReg', component: RdhsVehicleReg },
{ path: '/rdhsissuedrug', name: 'IssueDrugtoHos', component: IssueDrugtoHos },
{ path: '/rdhsOrderToMS', name: 'RdhsOrderToMS', component: RdhsOrderToMS },
{ path: '/rdhsOrderToMSDetail', name: 'RdhsOrderToMSDetail', component: RdhsOrderToMSDetail},
{ path: '/rdhsdriverlist', name: 'RdhsDriverList', component: RdhsDriverList},
{ path: '/rdhsvehiclelist', name: 'RdhsVehicleList', component: RdhsVehicleList},

  { path: '/dhstock', name: 'LM_Hospital_Current_Stock', component: LM_Hospital_Current_Stock },
  { path: '/dhordercart', name: 'LM_Hospital_View_Order_Cart', component: LM_Hospital_View_Order_Cart },
  { path: '/sortbyqty', name: 'LM_Hospital_SortBy_Qty', component: LM_Hospital_SortBy_Qty },
  { path: '/sortbyexp', name: 'LM_Hospital_SortBy_Expiration', component: LM_Hospital_SortBy_Expiration },
  { path: '/updateordercart', name: 'LM_Hospital_Update_Order_Cart', component: LM_Hospital_Update_Order_Cart },
  
  // { path: '/rdhstrack', name: 'Rdhs_Track', component: RdhsHopitalTrack },

  // { path: '/rdhstrack', name: 'Rdhs_Hospital_Return_Track', component: RdhsHopitalTrack },
  { path: '/rhissue', name: 'Rdhs_Hospital_Issue_Drug', component: Rdhs_Hospital_Issue_Drug },

  { path: '/rhupdateocart', name: 'Rdhs_Hospital_Update_Order_Cart', component: Rdhs_Hospital_Update_Order_Cart },
  { path: '/rhordercart', name: 'Rdhs_Hospital_View_Order_Cart', component: Rdhs_Hospital_View_Order_Cart },
  { path: '/rhorder', name: 'Rdhs_Hospital_Order_Form', component: Rdhs_Hospital_Order_Form },
  { path: '/lessqty', name: 'Rdhs_Hospital_SortBy_Qty', component: Rdhs_Hospital_SortBy_Qty },
  { path: '/updatercart', name: 'Rdhs_Hospital_Update_Return_Cart', component: Rdhs_Hospital_Update_Return_Cart },
  { path: '/rhcstock', name: 'Rdhs_Hospital_Current_Stock', component: Rdhs_Hospital_Current_Stock },
  { path: '/rhreturnconfirm', name: 'Rdhs_Hospital_Return_Confirm', component: RdhsHopitalReturnConfirm },
  { path: '/returncart', name: 'Rdhs_Hospital_Return_Cart', component: Rdhs_Hospital_Return_Cart },
  { path: '/rhexpire', name: 'Rdhs_Hospital_Expiration', component: RdhsHospitalExpireDrug },
  { path: '/rdhoslog', name: 'Rdhs_Hospital_Current_Stock', component: Rdhs_Hospital_Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/notification', name: 'Notification', component: Notification },
  { path: '/importstock', name: 'ImportStock', component: ImportStock },
  { path: '/importstockform', name: 'ImportStockForm', component: ImportStockForm },
  { path: '/currentstock', name: 'CurrentStock', component: CurrentStock },
  { path: '/currentstockform', name: 'CurrentStockForm', component: CurrentStockForm },
  { path: '/damagestock', name: 'DamageStock', component: DamageStock },
  { path: '/damagestockform', name: 'DamageStockForm', component: DamageStockForm },
  { path: '/ministry/directhospital', name: 'DirectHospital', component: DirectHospital },
  { path: '/ministry/directhospitalform', name: 'DirectHospitalForm', component: DirectHospitalForm },
  { path: '/ministry/directhospitalreqorder', name: 'DirectHospitalReqOrder', component: DirectHospitalReqOrder },
  { path: '/ministry/dhpendingorder', name: 'DHPendingOrder', component: DHPendingOrder },
  { path: '/dhreqorderdetail/:id', name: 'DHReqOrderDetail', component: DHReqOrderDetail },
  { path: '/supplytodhmodel/:id', name: 'SupplyToDHModel', component: SupplyToDHModel },
  { path: '/ministry/medicine', name: 'Medicine', component: Medicine },
  { path: '/ministry/driver', name: 'Driver', component: Driver },
  { path: '/ministry/store', name: 'MinistryStore', component: MinistryStore },
  { path: '/ministry/vehicle', name: 'Vehicle', component: Vehicle },
  { path: '/ministry/rdhs', name: 'Rdhs', component: Rdhs },
  { path: '/ministry/rdhsreqorder', name: 'RdhsReqOrder', component: RdhsReqOrder },
  { path: '/rdhsreqorderdetail/:id', name: 'RdhsReqOrderDetail', component: RdhsReqOrderDetail },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/direct_hospital_current_stock', exact: true, name: 'Direct Hospital Current Stock', component: DirectHospitalCurrentStock },
  { path: '/direct_hospital_request_orders', exact: true, name: 'Direct Hospital Request Orders', component: DirectHospitalReqOrder},
  { path: '/direct_hospital_request_order_form', exact: true, name: 'Direct Hospital Request Order Form', component: DirectHospitalRequestOrderForm},

  //ministry 
  { path: '/ministry_stores', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/ministry_stores/ministry_stores_list', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/ministry_stores/register', exact: true, name: 'Ministry Store Registration', component: MinistryStoreRegister },
  { path: '/ministry_store_detail/:id', name: 'Ministry Store Detail', component: MinistryStoreDetail },


  { path: '/rdhs', exact: true, name: 'RDHS', component: RDHSList },
  { path: '/rdhs/rdhs_list', exact: true, name: 'RDHS List', component: RDHSList },
  { path: '/rdhs/register', exact: true, name: 'RDHS Registration', component: RDHSRegister },
  { path: '/rdhs_detail/:id', name: 'RDHS Detail', component: RDHSDetail },


  { path: '/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/direct_hospitals/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/direct_hospitals/register', exact: true, name: 'Direct Hospital Registration', component: DirectHospitalRegister },
  { path: '/direct_hospital_detail/:id', name: 'Direct Hospital Detail', component: DirectHospitalDetail },

  { path: '/hospital_by_rdhs', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/hospital_by_rdhs/hospital_by_rdhs_list', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/hospital_by_rdhs/register', exact: true, name: 'Hospital By RDHS Registration', component: HospitalByRDHSRegister },
  { path: '/hospital_by_rdhs/:id', name: 'Hospital By RDHS Detail', component: HospitalByRDHSDetail },


  { path: '/user', exact: true, name: 'Users', component: UserList },
  { path: '/user/user_list', exact: true, name: 'User', component: UserList },
  { path: '/user/register', exact: true, name: 'User Registration', component: UserRegister },


];

export default routes;
