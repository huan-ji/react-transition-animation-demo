var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Link = require('react-router').Link;
var EnterLeaveTodoList = require('./enter_leave_todo');

var Child = React.createClass({
  cloneChildren: function () {
    var path = this.props.location.pathname;
    if (this.props.children) {
      return React.cloneElement(this.props.children, { key: path })
    }
  },

  render: function () {
    return (
      <div className="page" style={{backgroundColor: "black", color: "white"}}>
        <h2>
          <Link to="/"><img src="./images/react.png" className="home-image"/></Link>
          Child Page
        </h2><hr/>

        <Link to="/child/grandchild">Grandchild</Link><br/><hr/>


        <section>
          <h4>Enter and Leave Transition Todo List:</h4>
          <EnterLeaveTodoList/>
        </section>

        <ReactCSSTransitionGroup transitionName="pageSlider"
          transitionEnterTimeout={600} transitionLeaveTimeout={600}>
          {this.cloneChildren()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
})

module.exports = Child;
