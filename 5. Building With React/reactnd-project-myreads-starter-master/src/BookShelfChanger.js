import React, { Component } from 'react';
import PropTypes from 'prop-types'


class BookShelfChanger extends Component {
	static propTypes = {
	  books: PropTypes.array.isRequired,
	  updateShelf: PropTypes.func.isRequired
	}
  render() {
  	const { updateShelf, books, book } = this.props;

  	let currentShelf = 'none'
  	
  	books.forEach(b => {
  		if(b.id === book.id) {
  			currentShelf = b.shelf
  		}
  	})

    return (
	    <div className="book-shelf-changer">
	      <select onChange={(e) => updateShelf(book, e.target.value)} book={book} defaultValue={ currentShelf }> 
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