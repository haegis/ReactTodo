var expect = require("expect");
var actions = require("actions");

describe("actions", () => {
  it("should generate search text action", () => {
    var expected = {
      type: "SET_SEARCH_TEXT",
      searchText: "Do something"
    };

    expect(actions.setSearchText(expected.searchText), expected);
  });

  it("should generate add todo action", () => {
    var expected = {
      type: "ADD_TODO",
      text: "Do something else"
    }

    expect(actions.addTodo(expected.text)).toEqual(expected);
  });

  it("should generate toggle show completed action", () => {
    var expected = {
      type: "TOGGLE_SHOW_COMPLETED"
    }

    expect(actions.toggleShowCompleted(), expected);
  });

  it("should generate toggle todo action", () => {
    var expected = {
      type: "TOGGLE_TODO",
      id: 1337
    }

    expect(actions.toggleTodo(expected.id)).toEqual(expected);
  });

  it("should generate add todos action", () => {
    var todos = [
      {
        id: 1337,
        text: "Do something",
        completed: false,
        completedDate: undefined,
        createdDate: 32000
      }
    ];

    var expected = {
      type: "ADD_TODOS",
      todos

    }

    expect(actions.addTodos(todos)).toEqual(expected);
  });
});
