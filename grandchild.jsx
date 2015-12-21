var React = require('react');
var Link = require('react-router').Link;
var AppearTodoList = require('./appear_todo');

var Grandchild = React.createClass({
  render: function () {
    return (
      <div className="page" style={{backgroundColor: "lightblue"}}>
        <h2>Grandchild Page</h2>
        <Link to="/child">Child</Link><br/>
        <Link to="/">Home</Link><br/><br/>

        <section>
          <h4>Appear Transtion Todo List</h4>
          <AppearTodoList/>
        </section>
      </div>
    )
  }
})

module.exports = Grandchild;
