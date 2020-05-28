import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './Buttons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MinistryStores />, div);
  ReactDOM.unmountComponentAtNode(div);
});
