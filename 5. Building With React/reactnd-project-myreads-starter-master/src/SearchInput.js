import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class search extends Component {
  state = {
  	query: '',
  	newBooks: [],
  	searchError: false,
  }

  // update query as typed
  updateQuery = (query) => {
  	this.setState({ query: query.trim() })
  } 

  getBooks = (query) => {
    this.updateQuery(query);
 	if(this.state.query) {
 	  const match = new RegExp(escapeRegExp(this.state.query), 'i')	
 	  BooksAPI.search(this.state.query, 20).then((books) => {
 	  	books.length > 0 ? this.setState({ newBooks:books, searchError:false }) : this.setState({ newBooks:[], searchError:true })
 	  })	
 	} else {
 	  this.setState({ newBooks:[], searchError:false })
 	}
 	console.log(this.state.newBooks)
  }


  render() {
  	const { updateShelf, books } = this.props
    const { query, newBooks, searchError } = this.state    

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
          	to="/"
          	className="close-search" 
          	>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              // NOTES: The search from BooksAPI is limited to a particular set of search terms.
              // You can find these search terms here:
              // https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              // However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              // you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
              type="text" 
              placeholder="Search by title or author"
              onChange={(event) => this.getBooks(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
        	{newBooks.length > 0 ? (
	          <ol className="books-grid">
	          	{newBooks.map((newBook) => (
	         	  <li key={newBook.id}>
	         	  	<BookList
	         	  	  book = { newBook }	
	         	  	  books = { books }
	         	  	  updateShelf = { updateShelf }
	         	  	/>
	         	  </li>
	          	))}
	          </ol>
	        ) : searchError && (
	          <div>
	          	<h3>Please type other word</h3>
	          </div>
	        )}  
        </div>
      </div>
    );
  }
}


export default search;