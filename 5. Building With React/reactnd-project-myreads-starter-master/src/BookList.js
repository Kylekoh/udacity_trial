import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'



class BookList extends Component {
    render() {

  	const { books } = this.props
  	const { query } = this.state
  	console.log(books)

  	let showingBooks
  	if (query) {
  		const match = new RegExp(escapeRegExp(query), 'i')
  		showingBooks = books.filter((book) => match.test(book.title))
  	} else {
  		showingBooks = books
  	}

  	showingBooks.sort(sortBy('name'))


    return (
     <div>
      {books.map((book) => ( 
	        <div className="book">
	          <div className="book-top">
	            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
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
	          <div className="book-authors">{book.author}</div>
	        </div>
     	 ))}
      </div>	
    )
  }
}


export default BookList;