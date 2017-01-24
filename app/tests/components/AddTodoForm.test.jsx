var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var {AddTodoForm} = require("AddTodoForm");

describe("AddTodoForm", () => {
  it("should exist", () => {
    expect(AddTodoForm).toExist();
  });

  it("should dispatch ADD_TODO when valid text is entered", () => {
    var expected = {
      type: "ADD_TODO",
      text: "Do something"
    }

    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy} />);

    addTodoForm.refs.text.value = "Do something";

    TestUtils.Simulate.submit(TestUtils.findRenderedDOMComponentWithTag(addTodoForm, 'form'));

    expect(spy).toHaveBeenCalledWith(expected);
  });

  it("should not dispatch when no text is provided", () => {
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy} />);

    addTodoForm.refs.text.value = "";

    TestUtils.Simulate.submit(TestUtils.findRenderedDOMComponentWithTag(addTodoForm, 'form'));

    expect(spy).toNotHaveBeenCalled();
  });
});
