var React = require("react");
var TodoList = require("TodoList");

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

  render: function() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
});

module.exports = Main;
