import React, { Component } from 'react';
import BookList from './BookList';


class BookShelf extends Component {
  render() {
  	const { books } = this.props;

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
    );
  }
}



export default BookShelf;