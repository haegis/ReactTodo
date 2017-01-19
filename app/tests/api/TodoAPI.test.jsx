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
});
