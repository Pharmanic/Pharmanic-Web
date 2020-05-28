import React from 'react';
import ReactDOM from 'react-dom';
import RegisterRDHS from './RegisterRDHS';
import {mount} from 'enzyme/build';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterRDHS />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('toggle click without crashing', () => {
  const wrapper = mount(<RegisterRDHS />);
  for (let i=0; i<2; i++) {
    let RegisterRDHS = wrapper.find('button.dropdown-toggle').at(i);
    RegisterRDHS.simulate('click');
    expect(wrapper.state().dropdownOpen[i]).toEqual(true);
  }
  wrapper.unmount()
});
