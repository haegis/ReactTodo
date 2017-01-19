
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
  }
};
