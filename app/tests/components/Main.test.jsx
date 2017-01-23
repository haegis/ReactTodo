var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var Main = require("Main");

describe("Main", () => {
  it("should exist", () => {
    expect(Main).toExist();
  });

  it("should add todo to the list on handleAddTodo", () => {
    var main = TestUtils.renderIntoDocument(<Main />);

    main.setState({todos: []});
    main.handleAddTodo("Do something!");

    expect(main.state.todos.length).toBe(1);
    expect(main.state.todos[0].text).toBe("Do something!");
    expect(main.state.todos[0].completed).toBe(false);
    expect(main.state.todos[0].createdDate).toBeA("number");
  });

  it("should toggle values to completed when onToggle invoked", () => {
    var data = {
      id: 5,
      text: "Do something",
      completed: false,
      createdDate: 0,
      completedDate: undefined
    };

    var main = TestUtils.renderIntoDocument(<Main />);
    main.setState({todos: [data]});

    main.handleToggle(5);
    expect(main.state.todos[0].completed).toBe(true);
    expect(main.state.todos[0].completedDate).toBeA("number");
  });

  it("should toggle values to uncompleted when onToggle invoked", () => {
    var data = {
      id: 5,
      text: "Do something",
      completed: true,
      createdDate: 0,
      completedDate: 15
    };

    var main = TestUtils.renderIntoDocument(<Main />);
    main.setState({todos: [data]});

    main.handleToggle(5);
    expect(main.state.todos[0].completed).toBe(false);
    expect(main.state.todos[0].completedDate).toBe(undefined);
  });
});
