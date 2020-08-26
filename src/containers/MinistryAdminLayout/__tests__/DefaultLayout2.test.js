import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter, Route} from 'react-router-dom';
import DefaultLayout2 from '../DefaultLayout2';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Route path="/2" name="Home2" component={DefaultLayout2} /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
