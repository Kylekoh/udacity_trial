import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'

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
      <div className="list-books-content">
              <div>      
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">      
                    <ol className="book-grid"> 
                      {books.map((book) => (
                        <li key={book.id} className="contact-list-item">
                          <BookList book={book}/>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>                    
    )
  }
}

export default BooksApp
