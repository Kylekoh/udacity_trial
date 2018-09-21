import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'



class BookList extends Component {
  	state = {
  		query:''
  	}

    render() {

  	const { book } = this.props
  	const { query } = this.state
  	console.log(book)

  	// showingBooks.sort(sortBy('name'))

    return (
	    <div className="book">
	      <div className="book-top">
	        <div className="book-cover" style={{backgroundImage: `url("${book.imageLinks.thumbnail}")`}}></div>
	        <div className="book-shelf-changer">
	          <select>
	            <option value="move" disabled>Move to...</option>
	            <option value="currentlyReading">Currently Reading</option>
	            <option value="wantToRead">Want to Read</option>
	            <option value="read">Read</option>
	            <option value="none">None</option>
	          </select>
	        </div>
	      </div>
	      <div className="book-title">{book.title}</div>
	      <div className="book-authors">{book.authors}</div>
	    </div>
    )
  }
}


export default BookList;