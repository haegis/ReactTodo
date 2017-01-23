var React = require("react");
var moment = require("moment");

var Todo = React.createClass({
  render: function() {
    var {id, text, completed, createdDate, completedDate} = this.props;

    var renderDate = () => {
      var message = "Created ";
      var timestamp = createdDate;

      if (completed) {
        message = "Completed ";
        timestamp = completedDate;
      }

      return  message + moment.unix(timestamp).format("MMM Do YYYY @ h:mm a");
    };

    return (
      <div onClick={() => {this.props.onToggle(id)}}>
        <input type="checkbox" checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = Todo;
