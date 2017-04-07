import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import UrlShortener from './UrlShortener.jsx';

var api_response =
  [
    {
      "_id":"58e694bf17107e001ca934a4",
      "originalUrl":"https://semaphoreci.com/community/tutorials/testing-react-components-with-enzyme-and-mocha",
      "shortUrl":"http://urlzoo.herokuapp.com/TreadingElk/",
      "__v":0
    }
  ]


describe("<UrlShortener />", function() {
  const wrapper = shallow(<UrlShortener />);
  const props = {
    urls: api_response
  }

  it('Renders without crashing', () => {
    const main = document.createElement('main');
    ReactDOM.render(<UrlShortener />, main);
  });

  it("Contains components CreateUrl and UrlList", function() {
    expect(wrapper.text()).to.equal('<CreateUrl /><UrlList />');
  });

  it("Renders the Simplify Link button", function() {
    expect(render(<UrlShortener {...props} />).text()).to.equal('Simplify Link');
  });

  it("Mounts with list of links as props", function() {
    const main = document.createElement('main');
    var UrlShortenerComponent = ReactDOM.render(<UrlShortener {...props} />, main);
    expect(UrlShortenerComponent.props.urls[0].shortUrl).to.equal('http://urlzoo.herokuapp.com/TreadingElk/')
  });

});
