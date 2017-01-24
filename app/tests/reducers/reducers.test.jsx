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

    it("should toggle completed value to 'true'", () => {
      var action = {
        type: "TOGGLE_SHOW_COMPLETED",
        state: false
      };

      expect(reducers.toggleShowCompletedReducer(df(false), df(action))).toBe(true);
    });

  });
});
