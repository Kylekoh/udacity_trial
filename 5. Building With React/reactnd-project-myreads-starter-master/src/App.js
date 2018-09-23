import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import BookShelf from './BookShelf'

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
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }



  render() {

    const { books } = this.state;

    return (
      <BookShelf 
        books =  {books}
      />
    )
  }
}

export default BooksApp
