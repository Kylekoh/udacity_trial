import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import BookShelfChanger from './BookShelfChanger'



class BookList extends Component {
    static propTypes = {
      books: PropTypes.array.isRequired,
      updateShelf: PropTypes.func.isRequired
    }

  	state = {
  		query:''
  	}

    render() {

  	const { books, book, updateShelf } = this.props
  	const { query } = this.state

    return (
	    <div className="book">
	      <div className="book-top">
	        <div className="book-cover" style={{backgroundImage: `url("${book.imageLinks.thumbnail}")`}}></div>
			<BookShelfChanger 
				updateShelf = { updateShelf }
				book = { book }
			/>
	      </div>
	      <div className="book-title">{book.title}</div>
	      <div className="book-authors">{book.authors}</div>
	    </div>
    )
  }
}


export default BookList;3