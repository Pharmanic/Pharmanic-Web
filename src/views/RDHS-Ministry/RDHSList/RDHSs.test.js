import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './Buttons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RDHSs />, div);
  ReactDOM.unmountComponentAtNode(div);
});
