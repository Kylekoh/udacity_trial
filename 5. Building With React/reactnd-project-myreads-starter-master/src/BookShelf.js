import React, { Component } from 'react';
import BookList from './BookList';

const shelves = [
  	{
  		key: 'currentlyReading',
  		name: 'Currently Reading'
  	},
  	{
  		key: 'wantToRead',
  		name: 'Want To Read'
  	},
  	{
  		key: 'read',
  		name: 'Read'
  	}
  ]

class BookShelf extends Component {	

  render() {
  	const { books } = this.props;

    return (
      <div className="list-books-content">
        	{shelves.map((shelf) => ( 
        	<div key={shelf.key}>		
	          <div className="bookshelf">
	            <h2 className="bookshelf-title">{shelf.name}</h2>
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
	        ))}           
      </div>  
    );
  }
}



export default BookShelf;