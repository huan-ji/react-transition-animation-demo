var React = require('react');
var Link = require('react-router').Link;
var AppearTodoList = require('./appear_todo');

var Grandchild = React.createClass({
  render: function () {
    return (
      <div className="page" style={{backgroundColor: "skyblue", color: "black"}}>
        <h2>
          <Link to="/"><img src="./images/react.png" className="home-image"/></Link>
          Grandchild Page
        </h2><hr/>

        <Link to="/child">Back</Link><br/><hr/>

        <section>
          <h4>Appear Transtion Todo List</h4>
          <AppearTodoList/>
        </section>
      </div>
    )
  }
})

module.exports = Grandchild;
