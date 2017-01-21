
module.exports = {
  setTodos: function(todos) {
    if (Array.isArray(todos)) {
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    }
  },

  getTodos: function() {
    var todos = [];

    try {
      todos = JSON.parse(localStorage.getItem("todos"));
      if (!Array.isArray(todos)) {
        todos = [];
      }
    } catch(e) {}

    return todos;
  },

  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      return searchText === "" || todo.text.toLowerCase().indexOf(searchText) != -1;
    });

    // Sort todos by completion status
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1; //a should come before b
      } else if (a.completed && !b.completed) {
        return 1; //a should come after b
      } else {
        return 0; // both are equal, leave it as is
      }
    });

    return filteredTodos;
  }
};
