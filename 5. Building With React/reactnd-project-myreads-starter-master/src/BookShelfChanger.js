import React, { Component } from 'react';
import PropTypes from 'prop-types'


class BookShelfChanger extends Component {
  state = {
  	value: ''
  }

  render() {
  	const { updateShelf, book } = this.props;

    return (
	    <div className="book-shelf-changer">
	      <select onChange={(e) => updateShelf(book, e.target.value)} book={book} value={this.state.value}> 
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