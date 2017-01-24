var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

export var AddTodoForm = React.createClass({
  render: function() {
    return (
      <div className="container-footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="text"/>
          <button className="button expanded">Add todo</button>
        </form>
      </div>
    );
  },

  handleSubmit: function(event) {
    event.preventDefault();
  
    var text = this.refs.text.value;
    if (text.length > 0) {
      this.refs.text.value = "";
      this.props.dispatch(actions.addTodo(text));
    }
  }
});

export default connect()(AddTodoForm);
