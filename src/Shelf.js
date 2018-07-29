import React, { Component } from 'react';
import Book from './Book'

class Shelf extends Component {
    render () {
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.shelf.name}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {this.props.books
                            .filter(book => book.shelf === this.props.shelf.shelf)
                            .map(book => 
                            <li key={book.id}>
                                <Book 
                                    book={book}
                                    moveBookToShelf={this.props.moveBookToShelf}
                                    currentShelf={this.props.shelf.shelf}
                                />
                            </li>
                        )}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shelf