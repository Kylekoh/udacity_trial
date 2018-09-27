import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import BookShelfChanger from './BookShelfChanger'



class BookList extends Component {
  	state = {
  		query:'',
  		selectOptionValue: 'WantToRead'
  	}

  	onUpdateShelf = (e) => {
  		const value = e.target.value;
  		this.setState(() => ({
  			selectOptionValue : value
  		}));
  	}


    render() {

  	const { book } = this.props
  	const { query, selectOptionValue } = this.state

  	// showingBooks.sort(sortBy('name'))

    return (
	    <div className="book">
	      <div className="book-top">
	        <div className="book-cover" style={{backgroundImage: `url("${book.imageLinks.thumbnail}")`}}></div>
			<BookShelfChanger 
				onUpdateShelf = {this.onUpdateShelf}
			/>
	      </div>
	      <div className="book-title">{book.title}</div>
	      <div className="book-authors">{book.authors}</div>
	    </div>
    )
  }
}


export default BookList;3