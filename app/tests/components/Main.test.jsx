var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");
var {Provider} = require("react-redux");

var Main = require("Main");
var configureStore = require("configureStore");
import TodoList from "TodoList";

describe("Main", () => {
  it("should exist", () => {
    expect(Main).toExist();
  });

  it("should render TodoList", () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    var main = TestUtils.findRenderedComponentWithType(provider, Main);
    var todoList = TestUtils.scryRenderedComponentsWithType(main, TodoList);

    expect(todoList.length).toBe(1);
  });
});
