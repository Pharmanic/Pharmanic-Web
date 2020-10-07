import React from 'react';
import Rdhs_Hospital_Current_Stock from './rdhsHospital/Rdhs_Hospital_Current_Stock';

import Rdhs_Hospital_SortBy_Qty from './rdhsHospital/Rdhs_Hospital_SortBy_Qty';
import Rdhs_Hospital_Return_Cart from './rdhsHospital/Rdhs_Hospital_Return_Cart';
import  Rdhs_Hospital_Update_Return_Cart from './rdhsHospital/Rdhs_Hospital_Update_Return_Cart';
import Rdhs_Hospital_Login from './rdhsHospital/Rdhs_Hospital_Login';
const RdhsHopitalDrugStore= React.lazy(() => import('./rdhsHospital/Rdhs_Hospital_Current_Stock'));
const RdhsHopitalTrack= React.lazy(() => import('./rdhsHospital/Rdhs_Track'));
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
const ImportStock = React.lazy(() => import('./views/ImportStock'));
const ImportStockForm = React.lazy(() => import('./views/ImportStockForm'));
const CurrentStock = React.lazy(() => import('./views/CurrentStock'));
const CurrentStockForm = React.lazy(() => import('./views/CurrentStockForm'));
const DamageStock = React.lazy(() => import('./views/DamageStock'));
const DamageStockForm = React.lazy(() => import('./views/DamageStockForm'));
const DirectHospital = React.lazy(() => import('./views/DirectHospital'));
const DirectHospitalForm = React.lazy(() => import('./views/DirectHospitalForm'));
const DirectHospitalReqOrder = React.lazy(() => import('./views/DirectHospitalReqOrder'));
const DHReqOrderDetail = React.lazy(() => import('./views/DHReqOrderDetail'));
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
//Ministry 
const MinistryStoresList = React.lazy(() => import('./views/Ministry Store/MinistryStores'));
const MinistryStoreRegister = React.lazy(() => import('./views/Ministry Store/RegisterMinistryStore'));
const RDHSList = React.lazy(() => import('./views/RDHS-Ministry/RDHSList'));
const RDHSRegister = React.lazy(() => import('./views/RDHS-Ministry/RegisterRDHS'));
const DRVRegister = React.lazy(() => import('./views/MinistryDrivers/RegisterDrivers'));
const ListDrivers = React.lazy(() => import('./views/MinistryDrivers/DriversList'));
const VEHRegister = React.lazy(() => import('./views/MinistryVehicles/RegisterVehicles'));
const ListVehicles = React.lazy(() => import('./views/MinistryVehicles/VehiclesList'));
const ListMedicines = React.lazy(() => import('./views/Medicine/Medicine'));
const ListofMedicines = React.lazy(() => import('./views/MinistryMedicine/MinistryMedicine'));
const MedRegister = React.lazy(() => import('./views/RegisterMedicine/RegisterMedicine'));
const DirectHospitalList = React.lazy(() => import('./views/Direct Hospital/DirectHospitals'));
const DirectHospitalRegister = React.lazy(() => import('./views/Direct Hospital/RegisterDirectHospital'));
const HospitalByRDHSList = React.lazy(() => import('./views/Hospital by RDHS/HospitalByRDHS'));
const HospitalByRDHSRegister = React.lazy(() => import('./views/Hospital by RDHS/RegisterHospitalByRDHS'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/rdhstrack', name: 'Rdhs_Track', component: RdhsHopitalTrack },
  { path: '/lessqty', name: 'Rdhs_Hospital_SortBy_Qty', component: Rdhs_Hospital_SortBy_Qty },
  { path: '/updatercart', name: 'Rdhs_Hospital_Update_Return_Cart', component: Rdhs_Hospital_Update_Return_Cart },
  { path: '/rhcstock', name: 'Rdhs_Hospital_Current_Stock', component: Rdhs_Hospital_Current_Stock },
  { path: '/rhreturnconfirm', name: 'Rdhs_Hospital_Return_Confirm', component: RdhsHopitalReturnConfirm },
  { path: '/returncart', name: 'Rdhs_Hospital_Return_Cart', component: Rdhs_Hospital_Return_Cart },
  { path: '/rhexpire', name: 'Rdhs_Hospital_Expiration', component: RdhsHospitalExpireDrug },
  { path: '/rdhoslog', name: 'Rdhs_Hospital_Current_Stock', component: Rdhs_Hospital_Login},
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/importstock', name: 'ImportStock', component: ImportStock },
  { path: '/importstockform', name: 'ImportStockForm', component: ImportStockForm },
  { path: '/currentstock', name: 'CurrentStock', component: CurrentStock },
  { path: '/currentstockform', name: 'CurrentStockForm', component: CurrentStockForm },
  { path: '/damagestock', name: 'DamageStock', component: DamageStock },
  { path: '/damagestockform', name: 'DamageStockForm', component: DamageStockForm },
  { path: '/ministry/directhospital', name: 'DirectHospital', component: DirectHospital },
  { path: '/ministry/directhospitalform', name: 'DirectHospitalForm', component: DirectHospitalForm },
  { path: '/ministry/directhospitalreqorder', name: 'DirectHospitalReqOrder', component: DirectHospitalReqOrder },
  { path: '/dhreqorderdetail/:id', name: 'DHReqOrderDetail', component: DHReqOrderDetail },
  { path: '/supplytodhmodel/:id', name: 'SupplyToDHModel', component: SupplyToDHModel},
  { path: '/ministry/medicine', name: 'Medicine', component: Medicine },
  { path: '/ministry/driver', name: 'Driver', component: Driver },
  { path: '/ministry/store', name: 'MinistryStore', component: MinistryStore },
  { path: '/ministry/vehicle', name: 'Vehicle', component: Vehicle },
  { path: '/ministry/rdhs', name: 'Rdhs', component: Rdhs },
  { path: '/ministry/rdhsreqorder', name: 'RdhsReqOrder', component: RdhsReqOrder},
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

  //ministry 
  { path: '/ministry_stores', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/ministry_stores/ministry_stores_list', exact: true, name: 'Ministry Stores', component: MinistryStoresList },
  { path: '/ministry_stores/register', exact: true, name: 'Ministry Store Registration', component: MinistryStoreRegister },

  { path: '/rdhs', exact: true, name: 'Ministry Stores', component: RDHSList },
  { path: '/rdhs/rdhs_list', exact: true, name: 'Ministry Stores', component: RDHSList },
  { path: '/rdhs/register', exact: true, name: 'Ministry Store Registration', component: RDHSRegister },

  { path: '/ministry_drivers', exact: true, name: 'Ministry Drivers', component: ListDrivers },
  { path: '/ministry_drivers/ministry_drivers_list', exact: true, name: 'Ministry Drivers', component: ListDrivers },
  { path: '/ministry_drivers/register', exact: true, name: 'Ministry Driver Registration', component:  DRVRegister},

  
  { path: '/ministry_vehicles', exact: true, name: 'Ministry Vehicles', component: ListVehicles },
  { path: '/ministry_vehicles/ministry_vehicles_list', exact: true, name: 'Ministry Vehiles', component: ListVehicles },
  { path: '/ministry_vehicles/register', exact: true, name: 'Ministry Vehicles Registration', component:  VEHRegister},

  { path: '/ministry_medicines', exact: true, name: 'Ministry Medicines', component: ListMedicines },
  { path: '/ministry_medicines/ministry_medicine_list', exact: true, name: 'Ministry Medicines', component: ListMedicines },
  { path: '/ministry_medicines/register', exact: true, name: 'Ministry Medicines Registration', component:  MedRegister},

  { path: '/ministry_medicines2', exact: true, name: 'Ministry Medicines', component: ListofMedicines },
  { path: '/ministry_medicines/ministry_medicine_list2', exact: true, name: 'Ministry Medicines', component: ListofMedicines },
  { path: '/ministry_medicines/register', exact: true, name: 'Ministry Medicines Registration', component:  MedRegister},


  { path: '/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/direct_hospitals/direct_hospitals', exact: true, name: 'Direct Hospitals', component: DirectHospitalList },
  { path: '/direct_hospitals/register', exact: true, name: 'Direct Hospital Registration', component: DirectHospitalRegister },

  { path: '/hospital_by_rdhs', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/hospital_by_rdhs/hospital_by_rdhs_list', exact: true, name: 'Hospitals By RDHS', component: HospitalByRDHSList },
  { path: '/hospital_by_rdhs/register', exact: true, name: 'Hospital By RDHS Registration', component: HospitalByRDHSRegister },

];

export default routes;
