var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require("react-redux");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");

var Main = require("Main");
var actions = require("actions");
var store = require("configureStore").configure();
var TodoAPI = require("TodoAPI");

store.subscribe(() => {
  TodoAPI.setTodos(store.getState().todos);
});

store.dispatch(actions.addTodos(TodoAPI.getTodos()));

//Load foundation
require("style!css!foundation-sites/dist/css/foundation.min.css");
$(document).foundation();

require("style!css!sass!applicationStyles");

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("app")
);
