import React from 'react';
import ReactDOM from 'react-dom';
import RegisterUser from './RegisterUser';
import {mount} from 'enzyme/build';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterUser />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('toggle click without crashing', () => {
  const wrapper = mount(<RegisterUser />);
  for (let i=0; i<2; i++) {
    let RegisterUser = wrapper.find('button.dropdown-toggle').at(i);
    RegisterUser.simulate('click');
    expect(wrapper.state().dropdownOpen[i]).toEqual(true);
  }
  wrapper.unmount()
});
