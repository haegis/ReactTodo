var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

import {configure} from "configureStore";
import ConnectedTodoList, {TodoList} from "TodoList";
import ConnectedTodo, {Todo} from "Todo";

describe("TodoList", () => {
  it("should exist", () => {
    expect(TodoList).toExist();
  });

  it("should render one Todo component for each Todo item", () => {
    var todos = [
      {id: 1, text: "Do something", completed: false, completedDate: undefined, createdDate: 500},
      {id: 2, text: "Do something else", completed: false, completedDate: undefined, createdDate: 500}
    ];

    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    );

    var renderedTodoList = TestUtils.findRenderedComponentWithType(provider, ConnectedTodoList);
    var renderedTodoComponents = TestUtils.scryRenderedComponentsWithType(renderedTodoList, ConnectedTodo);

    expect(renderedTodoComponents.length).toBe(todos.length);
  });

  it("should render empty message when no todos", () => {
    var todos = [
    ];

    var renderedTodoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var renderedEmptyMessage = TestUtils.scryRenderedDOMComponentsWithClass(renderedTodoList, "container-message");

    expect(renderedEmptyMessage.length).toBe(1);
  });
});
