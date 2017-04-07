import React from 'react';
import ReactDOM from 'react-dom';
import UrlShortener from './UrlShortener.jsx';

it('renders without crashing', () => {
  const main = document.createElement('main');
  ReactDOM.render(<UrlShortener />, main);
});
