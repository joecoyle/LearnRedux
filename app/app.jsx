var React = require ('react');
var ReactDOM = require ('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require ('react-router');


// load foundation
$(document).foundation();

//app css
require('style!css!sass!AppStyles');

ReactDOM.render(
  <p>React Boilerplate 3</p>,
  document.getElementById('app')
);
require('./redux-example.jsx');
