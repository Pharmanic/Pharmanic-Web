import React from 'react';
import ReactDOM from 'react-dom';
import RegisterMinistryStore from './RegisterMinistryStore';
import {mount} from 'enzyme/build';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RegisterMinistryStore />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('toggle click without crashing', () => {
  const wrapper = mount(<RegisterMinistryStore />);
  for (let i=0; i<2; i++) {
    let RegisterMinistryStore = wrapper.find('button.dropdown-toggle').at(i);
    RegisterMinistryStore.simulate('click');
    expect(wrapper.state().dropdownOpen[i]).toEqual(true);
  }
  wrapper.unmount()
});
