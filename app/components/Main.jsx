var React = require("react");
var uuid = require("node-uuid");
var moment = require("moment");

var TodoList = require("TodoList");
var AddTodoForm = require("AddTodoForm");
var TodoSearch = require("TodoSearch");
var TodoAPI = require("TodoAPI");

var Main = React.createClass({
  getInitialState: function() {
    return {
      searchText: "",
      showCompleted: false,
      todos: TodoAPI.getTodos()
    };
  },

  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
  },

  render: function() {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="title">Todo App</h1>

        <div className="row">
          <div className="columns small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch} />
              <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
              <AddTodoForm onAddTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>
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
          completed: false,
          createdDate: moment().unix(),
          completedDate: undefined
        }
      ]
    });
  },

  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedDate = todo.completed ? moment().unix() : undefined;
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
