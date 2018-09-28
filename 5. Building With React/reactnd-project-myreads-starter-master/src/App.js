import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import BookShelf from './BookShelf'
import SearchInput from './SearchInput'
import PropTypes from 'prop-types'


class BooksApp extends React.Component {

  // state = {
  //   *
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
     

  // }

  state = {
    books : [],
    showSearchPage: false,
    shelfChanger: []
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  updateShelf = ( newBook, newShelf ) => {
    BooksAPI.update(newBook, newShelf).then(response => {
      // set shelf for new or updated book
      newBook.shelf = newShelf
      // get list of books without updated or new book
      var updatedBooks = this.state.books.filter(book => book.id !== newBook.id)
      // add book to array and set newState
      updatedBooks.push(newBook)
      this.setState({books:updatedBooks})
    })  
  }

  render() {
    const { books, showSearchPage } = this.state;
    const { updateShelf } = this

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchInput 
            showSearchPage = {showSearchPage}
          />
        ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <BookShelf 
            books = { books }
            updateShelf = { updateShelf }
          />
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
        </div>  
      )}
    </div> 
    )
  }
}

export default BooksApp
