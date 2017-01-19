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
          text: "Walk the dog",
          completed: false
        },
        {
          id: uuid(),
          text: "Clean the yard",
          completed: true
        },
        {
          id: uuid(),
          text: "Workout",
          completed: false
        },
        {
          id: uuid(),
          text: "Complete world quests",
          completed: true
        }
      ]
    };
  },

  render: function() {
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={this.state.todos} onToggle={this.handleToggle} />
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
          text: text,
          completed: false
        }
      ]
    });
  },

  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({
      todos: updatedTodos
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
