import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));
const MinistryAdminLayout = React.lazy(() => import('./containers/MinistryAdminLayout'));
const MinisterLayout = React.lazy(() => import('./containers/MinisterLayout'));
const MinistryStockKeeperLayout = React.lazy(() => import('./containers/MinistryStockKeeperLayout'));
const MinistryStoreAdminLayout = React.lazy(() => import('./containers/MinistryStoreAdminLayout'));
const MinistryStoreStockKeeperLayout = React.lazy(() => import('./containers/MinistryStoreStockKeeperLayout'));
const RDHSAdminLayout = React.lazy(() => import('./containers/RDHSAdminLayout'));
const RDHSDirectorLayout = React.lazy(() => import('./containers/RDHSDirectorLayout'));
const RDHSStockKeeperLayout = React.lazy(() => import('./containers/RDHSStockKeeperLayout'));
const DirectHospitalAdminLayout = React.lazy(() => import('./containers/DirectHospitalAdminLayout'));
const DirectHospitalDoctorInChargeLayout = React.lazy(() => import('./containers/DirectHospitalDoctorInChargeLayout'));
const DirectHospitalStockKeeperLayout = React.lazy(() => import('./containers/DirectHospitalStockKeeperLayout'));
const HospitalByRDHSAdminLayout = React.lazy(() => import('./containers/HospitalByRDHSAdminLayout'));
const HospitalByRDHSDoctorInchargeLayout = React.lazy(() => import('./containers/HospitalByRDHSDoctorInchargeLayout'));
const HospitalByRDHSStockKeeperLayout = React.lazy(() => import('./containers/HospitalByRDHSStockKeeperLayout'));


// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/ministry_admin" name="Ministry Admin" render={props => <MinistryAdminLayout {...props}/>} />
              <Route path="/minister" name="Minister" render={props => <MinisterLayout {...props}/>} />
              <Route path="/ministry_stock_keeper" name="Ministry Stock Keeper" render={props => <MinistryStockKeeperLayout {...props}/>} />
              <Route path="/ministry_store_admin" name="Ministry Store Admin" render={props => <MinistryStoreAdminLayout {...props}/>} />
              <Route path="/ministry_store_stock_keeper" name="Ministry Store Stock Keeper" render={props => <MinistryStoreStockKeeperLayout {...props}/>} />
              <Route path="/rdhs_admin" name="RDHS Admin" render={props => <RDHSAdminLayout {...props}/>} />
              <Route path="/rdhs_director" name="RDHS Director" render={props => <RDHSDirectorLayout {...props}/>} />
              <Route path="/rdhs_stock_keeper" name="RDHS Director" render={props => <RDHSStockKeeperLayout {...props}/>} />
              <Route path="/direct_hospital_admin" name="Direct Hospital Admin" render={props => <DirectHospitalAdminLayout {...props}/>} />
              <Route path="/direct_hospital_doctor_incharge" name="Direct Hospital Doctor Incharge" render={props => <DirectHospitalDoctorInChargeLayout {...props}/>} />
              <Route path="/direct_hospital_stock_keeper" name="Direct Hospital Stock Keeper" render={props => <DirectHospitalStockKeeperLayout {...props}/>} />
              <Route path="/hospital_by_rdhs_admin" name="Hospital By RDHS Admin" render={props => <HospitalByRDHSAdminLayout {...props}/>} />
              <Route path="/hospital_by_rdhs_doctor_incharge" name="Hospital By RDHS Doctor Incharge" render={props => <HospitalByRDHSDoctorInchargeLayout {...props}/>} />
              <Route path="/hospital_by_rdhs_stock_keeper" name="Hospital By RDHS Stock Keeper" render={props => <HospitalByRDHSStockKeeperLayout {...props}/>} />


              {/*<Route path="/ministry" name="Home2" render={props => <MinisterLayout {...props}/>} />*/}

              {/*<Route path="/ministry_stock_keeper" name="Home2" render={props => <MinisterLayout {...props}/>} />*/}
              {/*<Route exact path="/ministry_stores" name="Home2" render={props => <MinistryAdminLayout {...props}/>} />*/}
              {/*<Route exact path="/3" name="Home2" render={props => <MinistryAdminLayout {...props}/>} /> */}
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
