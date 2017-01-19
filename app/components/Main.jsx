var React = require("react");
var TodoList = require("TodoList");
var AddTodoForm = require("AddTodoForm");
var TodoSearch = require("TodoSearch");

var Main = React.createClass({
  getInitialState: function() {
    return {
      searchText: "",
      showCompleted: false,
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
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={this.state.todos} />
        <AddTodoForm onAddTodo={this.handleAddTodo} />
      </div>
    );
  },

  handleAddTodo: function(text) {
    alert("New todo: " + text);
  },

  handleSearch: function(searchText, showCompleted) {
    this.setState({
      searchText: searchText.toLowerCase(),
      showCompleted: showCompleted
    });
  }
});

module.exports = Main;
