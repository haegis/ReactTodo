var React = require("react");
var TodoList = require("TodoList");
var AddTodoForm = require("AddTodoForm");

var Main = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: "Walk the dog"
        },
        {
          id: 2,
          text: "Clean the yard"
        },
        {
          id: 3,
          text: "Workout"
        },
        {
          id: 4,
          text: "Complete world quests"
        }
      ]
    };
  },

  handleAddTodo: function(text) {
    alert("New todo: " + text);
  },

  render: function() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <AddTodoForm onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = Main;
