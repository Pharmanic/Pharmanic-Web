import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Progress, TabContent, TabPane, ListGroup, ListGroupItem,Col } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppSwitch } from '@coreui/react'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      ministrynearestexpiringlist: [], isLoading: true,dhrequestordersnotcoplete:[],rdhsrequestordersnotcomplete:[]
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/ministrynearestexpiringlist')
      .then(response => response.json())
      .then(data => this.setState({ministrynearestexpiringlist: data, isLoading: false}));

    fetch('/dhrequestordersnotcoplete')
      .then(response => response.json())
      .then(data => this.setState({dhrequestordersnotcoplete: data, isLoading: false}));

      fetch('/rdhsrequestordersnotcomplete')
      .then(response => response.json())
      .then(data => this.setState({rdhsrequestordersnotcomplete: data, isLoading: false}));

  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    const {ministrynearestexpiringlist,isLoading,dhrequestordersnotcoplete,rdhsrequestordersnotcomplete} = this.state;

    const groupList = ministrynearestexpiringlist.map(ministrynearestexpiring => {
      return<ListGroupItem action tag="a" href="#" className="list-group-item-accent-danger list-group-item-divider" key={ministrynearestexpiring.batch_id}>
      <div>{ministrynearestexpiring.batch_id}</div>
        <div>{ministrynearestexpiring.sr_no.name}</div>
        <div>You have a medicine expiring at your nearest </div>
        <small className="text-muted mr-3">
                  <i className="icon-calendar"></i>&nbsp; {ministrynearestexpiring.expire_date}
        </small>
        <small className="text-muted">
                  <i className="icon-location-pin"></i> {ministrynearestexpiring.m_store_id.location}
        </small>
        
    </ListGroupItem>
    });

    const groupList2 = dhrequestordersnotcoplete.map(dhrequestorder => {
      return<ListGroupItem action tag="a" href="#" className="list-group-item-accent-danger list-group-item-divider" key={dhrequestorder.order_id}>
      <div>You have a reuest from{dhrequestorder.hospital_reg_no.reg_no}</div>
        <div>Ministry store:-{dhrequestorder.m_store_id.m_store_id}</div>
        
    </ListGroupItem>
    });

    const groupList3 = rdhsrequestordersnotcomplete.map(rdhsrequestorders => {
      return<ListGroupItem action tag="a" href="#" className="list-group-item-accent-danger list-group-item-divider" key={rdhsrequestorders.order_id}>
      <div>You have a reuest from{rdhsrequestorders.rdhs_reg_no.reg_no}</div>
        <div>Ministry store:-{rdhsrequestorders.m_store_id.m_store_id}</div>
        
    </ListGroupItem>
    });

    return (
      <React.Fragment>
        <Nav tabs width="750">
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '1' })}
                     onClick={() => {
                       this.toggle('1');
                     }}>
              
              <i className="icon-pin"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '2' })}
                     onClick={() => {
                       this.toggle('2');
                     }}>
              <i className="icon-bell"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '3' })}
                     onClick={() => {
                       this.toggle('3');
                     }}>
              <i className="icon-settings"></i>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup className="list-group-accent" tag={'div'}>
  
              {groupList}
              
             
              
              
          
            </ListGroup>
          </TabPane>
          <TabPane tabId="2" className="p-3">
            
            <hr />
            {groupList2}
            {groupList3}
            
          </TabPane>
          <TabPane tabId="3" className="p-3">
            <h6>Rdhs Hospital</h6>

            <div className="aside-options">
              <div className="clearfix mt-4">
                <small><b>Option 1</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} defaultChecked size={'sm'}/>
              </div>
              <div>
                <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Option 2</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} size={'sm'}/>
              </div>
              <div>
                <small className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Option 3</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} defaultChecked size={'sm'} disabled/>
                <div>
                  <small className="text-muted">Option disabled.</small>
                </div>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Option 4</b></small>
                <AppSwitch className={'float-right'} variant={'pill'} label color={'success'} defaultChecked size={'sm'} />
              </div>
            </div>

            <hr />
            <h6>System Utilization</h6>

            <div className="text-uppercase mb-1 mt-4">
              <small><b>CPU Usage</b></small>
            </div>
            <Progress className="progress-xs" color="info" value="25" />
            <small className="text-muted">348 Processes. 1/4 Cores.</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>Memory Usage</b></small>
            </div>
            <Progress className="progress-xs" color="warning" value="70" />
            <small className="text-muted">11444GB/16384MB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>SSD 1 Usage</b></small>
            </div>
            <Progress className="progress-xs" color="danger" value="95" />
            <small className="text-muted">243GB/256GB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>SSD 2 Usage</b></small>
            </div>
            <Progress className="progress-xs" color="success" value="10" />
            <small className="text-muted">25GB/256GB</small>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
