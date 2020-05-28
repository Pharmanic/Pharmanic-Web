import React from 'react';
import ReactDOM from 'react-dom';
import RegisterHospitalByRDHS from './RegisterHospitalByRDHS';
import {mount} from 'enzyme/build';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterHospitalByRDHS />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('toggle click without crashing', () => {
  const wrapper = mount(<RegisterHospitalByRDHS />);
  for (let i=0; i<2; i++) {
    let RegisterHospitalByRDHS = wrapper.find('button.dropdown-toggle').at(i);
    RegisterHospitalByRDHS.simulate('click');
    expect(wrapper.state().dropdownOpen[i]).toEqual(true);
  }
  wrapper.unmount()
});
