var uuid = require("node-uuid");
var moment = require("moment");

export var searchTextReducer = (state = "", action) => {
  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return action.searchText;
    default:
      return state;
  }
};

export var toggleShowCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_SHOW_COMPLETED":
      return !state;
    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdDate: moment().unix(),
          completedDate: undefined
        }
      ];
    case "TOGGLE_TODO":
      return state.map((todo) => {
          if (todo.id === action.id) {
            var completed = !todo.completed;

            return {
              ...todo,
              completed,
              completedDate: completed ? moment().unix() : undefined
            };
          } else {
            return todo;
          }
        });
    case "ADD_TODOS":
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  }
};
