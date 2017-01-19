var React = require("react");

var TodoSearch = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search todo" onChange={this.handleSearch} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
            Show completed todos
          </label>
        </div>
      </div>
    );
  },

  handleSearch: function() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(searchText, showCompleted);
  }

});

module.exports = TodoSearch;
