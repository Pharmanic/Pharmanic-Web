import React from 'react';
import ReactDOM from 'react-dom';
import RegisterDirectHospital from './RegisterDirectHospital';
import {mount} from 'enzyme/build';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterDirectHospital />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('toggle click without crashing', () => {
  const wrapper = mount(<RegisterDirectHospital />);
  for (let i=0; i<2; i++) {
    let RegisterDirectHospital = wrapper.find('button.dropdown-toggle').at(i);
    RegisterDirectHospital.simulate('click');
    expect(wrapper.state().dropdownOpen[i]).toEqual(true);
  }
  wrapper.unmount()
});
