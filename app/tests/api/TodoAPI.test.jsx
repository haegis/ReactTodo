var expect = require("expect");
var TodoAPI = require("TodoAPI");

describe("TodoAPI", () => {
  beforeEach(() => {
    localStorage.removeItem("todos");
  });


  it("should exist", () => {
    expect(TodoAPI).toExist();
  });

  describe("setTodos", () => {
    it("should save valid todos", () => {
      var expected = [{
        id: 3,
        text: "Do something",
        completed: false
      }];
      TodoAPI.setTodos(expected);

      var actual = JSON.parse(localStorage.getItem("todos"));
      expect(actual).toEqual(expected);
    });

    it("should not save invalid todos", () => {
      TodoAPI.setTodos({a: "b"});
      expect(localStorage.getItem("todos")).toBe(null);
    });

  });

  describe("getTodos", () => {
    it("should return empty array for bad localStorage data", () => {
      expect(TodoAPI.getTodos()).toEqual([]);
    });

    it("should return todo array if found in localStorage", () => {
      var expected = [{
        id: 3,
        text: "Do something",
        completed: false
      }];
      localStorage.setItem("todos", JSON.stringify(expected));

      expect(TodoAPI.getTodos()).toEqual(expected);
    });
  });

  describe("filterTodos", () => {
    var todos = [{
      id: 1,
      text: "Do something",
      completed: true
    },
    {
      id: 2,
      text: "Do something else",
      completed: false
    },
    {
      id: 3,
      text: "Do something",
      completed: true
    }];

    it("should return all items if showCompleted is true", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, "");
      expect(filteredTodos.length).toBe(3);
    });

    it("should only return items with 'completed' set to false", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, "");
      expect(filteredTodos.length).toBe(1);
    });

    it("should sort by completion status", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, "");
      expect(filteredTodos[0].completed).toBe(false);
      expect(filteredTodos[0]).toEqual(todos[1]);
    });

    it("should filter todos by text", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, "else");
      expect(filteredTodos.length).toBe(1);
    });

    it("should return all todos if search text is empty", () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, "");
      expect(filteredTodos.length).toBe(3);
    });

  });
});
