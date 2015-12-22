var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;
var Child = require('./child');
var Grandchild = require('./grandchild');

var App = React.createClass({
  render: function () {
    var path = this.props.location.pathname;
    var segment = path.split('/')[1] || 'root';
    return (
      <div className="heading">
        <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}
          transitionAppearTimeout={1500}>
          <img src="./images/react.png" />
        </ReactCSSTransitionGroup>

        <hr/><Link to="/child">Child</Link><hr/>

        <ReactCSSTransitionGroup transitionName="pageSlider"
          transitionEnterTimeout={600} transitionLeaveTimeout={600}>
          {React.cloneElement(this.props.children, { key: segment })}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});

var MockIndex = React.createClass({
  render: function () {
    return <div></div>
  }
})

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={MockIndex}/>
    <Route path="child" component={Child}>
      <Route path="grandchild" component={Grandchild}/>
    </Route>
  </Route>
);



document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById("content"));
});
