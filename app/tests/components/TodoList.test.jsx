var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var TodoList = require("TodoList");
var Todo = require("Todo");

describe("TodoList", () => {
  it("should exist", () => {
    expect(TodoList).toExist();
  });

  it("should render one Todo component for each Todo item", () => {
    var todos = [
      {id: 1, text: "Do something"},
      {id: 2, text: "Do something else"}
    ];

    var renderedTodoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var renderedTodoComponents = TestUtils.scryRenderedComponentsWithType(renderedTodoList, Todo);

    expect(renderedTodoComponents.length).toBe(todos.length);
  });
});
