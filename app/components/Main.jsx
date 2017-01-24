var React = require("react");
var uuid = require("node-uuid");
var moment = require("moment");

import TodoList from "TodoList"
import AddTodoForm from "AddTodoForm";
import TodoSearch from "TodoSearch";

var Main = React.createClass({

  render: function() {
    return (
      <div>
        <h1 className="title">Todo App</h1>

        <div className="row">
          <div className="columns small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <AddTodoForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
