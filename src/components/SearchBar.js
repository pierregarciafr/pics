import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {     // arrow function makes this = SearchBar
    event.preventDefault();
    this.props.onSubmit(this.state.term);   // This. devant props. quand utilisé avec function component
  }

  render () {
    return(
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image search</label>
            <input type="text"
                   value={this.state.term}
                   onChange={e =>
                    this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
