import React, { Component } from 'react';


class BookShelfChanger extends Component {
  state = {
  	value: ''
  }

  render() {
  	const { onUpdateShelf, book } = this.props;

    return (
	    <div className="book-shelf-changer">
	      <select onChange={(e) => onUpdateShelf(e)} value={this.state.value}> 
	        <option value="move" disabled>Move to...</option>
	        <option value="currentlyReading">Currently Reading</option>
	        <option value="wantToRead">Want to Read</option>
	        <option value="read">Read</option>
	        <option value="none">None</option>
	      </select>
	    </div>
    );
  }
}


export default BookShelfChanger;