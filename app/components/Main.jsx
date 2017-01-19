var React = require("react");
var TodoList = require("TodoList");
var AddTodoForm = require("AddTodoForm");
var TodoSearch = require("TodoSearch");
var uuid = require("node-uuid");

var Main = React.createClass({
  getInitialState: function() {
    return {
      searchText: "",
      showCompleted: false,
      todos: [
        {
          id: uuid(),
          text: "Walk the dog"
        },
        {
          id: uuid(),
          text: "Clean the yard"
        },
        {
          id: uuid(),
          text: "Workout"
        },
        {
          id: uuid(),
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
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
  },

  handleSearch: function(searchText, showCompleted) {
    this.setState({
      searchText: searchText.toLowerCase(),
      showCompleted: showCompleted
    });
  }
});

module.exports = Main;
