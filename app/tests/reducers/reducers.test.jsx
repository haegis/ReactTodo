var expect = require("expect");
var reducers = require("reducers");
var df = require("deep-freeze-strict");

describe("Reducers", () => {
  describe("searchTextReducer", () => {
    it("should set searchText", () => {
      var action = {
        type: "SET_SEARCH_TEXT",
        searchText: "Dog"
      };

      expect(reducers.searchTextReducer(df(""), df(action))).toEqual(action.searchText);
    });
  });

  describe("showCompletedReducer", () => {
    it("should toggle completed value to 'true'", () => {
      var action = {
        type: "TOGGLE_SHOW_COMPLETED",
        state: false
      };

      expect(reducers.toggleShowCompletedReducer(df(false), df(action))).toBe(true);
    });
  });

  describe("todosReducer", () => {
    it("should add new todo", () => {
      var action = {
        type: "ADD_TODO",
        text: "Do someting"
      };

      var result = reducers.todosReducer(df([]), df(action));

      expect(result.length).toBe(1);
      expect(result[0].text).toEqual(action.text);
    });

    it("should toggle todo completed", () => {
      var action = {
        type: "TOGGLE_TODO",
        id: 6
      };

      var todos = [
        {
          id: 5,
          text: "Do something",
          completed: true,
          createdDate: 0,
          completedDate: 15
        },
        {
          id: 6,
          text: "Do something",
          completed: false,
          createdDate: 0,
          completedDate: undefined
        }
      ];

      var result = reducers.todosReducer(df(todos), df(action));
      expect(result.length).toBe(2);
      expect(result[1].completedDate).toBeA("number");

    });
  });

});
