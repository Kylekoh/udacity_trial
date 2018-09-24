import React, { Component } from 'react';


class BookShelfChanger extends Component {
  state = {
  	value: ''
  }

  change(event) {
    this.setState({ value : event.target.value})
  }

  render() {

    return (
	    <div className="book-shelf-changer">
	      <select onChange={this.change} value={this.state.value}> 
	        <option value="move" disabled>Move to...</option>
	        <option value="currentlyReading">Currently Reading</option>
	        <option value="wantToRead">Want to Read</option>
	        <option value="read">Read</option>
	        <option value="none">None</option>
	      </select>
	    </div>
    );
  }
}


export default BookShelfChanger;