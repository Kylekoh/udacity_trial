import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
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