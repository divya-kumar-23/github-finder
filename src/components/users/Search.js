import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: ""
  };
  onChange = e => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={this.state.text}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </div>
    );
  }
}

export default Search;
