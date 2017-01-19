var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var AddTodoForm = require("AddTodoForm");

describe("AddTodoForm", () => {
  it("should exist", () => {
    expect(AddTodoForm).toExist();
  });

  it("should invoke onAddTodo callback when valid text is entered", () => {
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy} />);

    addTodoForm.refs.text.value = "Do something";

    TestUtils.Simulate.submit(TestUtils.findRenderedDOMComponentWithTag(addTodoForm, 'form'));

    expect(spy).toHaveBeenCalledWith("Do something");
  });

  it("should not invoke onAddTodo callback when no text is provided", () => {
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy} />);

    addTodoForm.refs.text.value = "";

    TestUtils.Simulate.submit(TestUtils.findRenderedDOMComponentWithTag(addTodoForm, 'form'));

    expect(spy).toNotHaveBeenCalled();
  });
});
