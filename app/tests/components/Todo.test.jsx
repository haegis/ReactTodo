var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var TestUtils = require("react-addons-test-utils");

var {Todo} = require("Todo");

describe("Todo", () => {
  it("should exist", () => {
    expect(Todo).toExist();
  });

  it("should dispatch TOGGLE_TODO action on click", () => {
    var data = {
      id: 65,
      text: "Do something",
      completed: true
    };

    var spy = expect.createSpy();
    var main = TestUtils.renderIntoDocument(<Todo {...data} dispatch={spy} />);

    // TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(main, 'div'));
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(main, "todo-completed"));

    expect(spy).toHaveBeenCalledWith({
      type: "TOGGLE_TODO",
      id: data.id
    });
  });
});
