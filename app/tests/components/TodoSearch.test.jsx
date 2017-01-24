var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

// var TodoSearch = require("TodoSearch");
import {TodoSearch} from "TodoSearch";


describe("TodoList", () => {
  it("should exist", () => {
    expect(TodoSearch).toExist();
  });

  it("should dispatch SET_SEARCH_TEXT with entered text", () => {
    var expected = {
      type: "SET_SEARCH_TEXT",
      searchText: "Something"
    };

    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    todoSearch.refs.searchText.value = "Something";
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(expected);
  });

  it("should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked", () => {
    var expected = {
      type: "TOGGLE_SHOW_COMPLETED"
    };

    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(expected);
  });
});
