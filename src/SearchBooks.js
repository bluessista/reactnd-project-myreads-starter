import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import escapeRegExp from 'escape-string-regexp';
//import sortBy from 'sort-by';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
    state = {
        query: '',
        searchableBooks: []
    }
    refreshQuery = (query) => {
        this.setState({ query })
        this.getSearchResult(query)
    }
    clearQuery = () => {
        this.setState({ query: '' })
    }

    getSearchResult = (query) => {
        if (query) {
            BooksAPI.search(query).then((searchableBooks) => {
                if (searchableBooks.error) {
                    this.setState({ searchableBooks: [] }) 
                } else {
                    this.setState({ searchableBooks })
                }
            })
        } else {
            this.setState({ searchableBooks: [] }) 
        }
    }

    render () {
        const { query, searchableBooks } = this.state
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                    type="text" 
                    placeholder="Search by title or author" 
                    value={query}
                    onChange={event => this.refreshQuery(event.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                {searchableBooks.map(searchableBook => {
                    let shelf = 'none';
                    this.props.books.map(book => (
                        book.id === searchableBook.id ? 
                        shelf = book.shelf : 'none'
                    ));
                    return (
                    <li key={searchableBook.id}>
                        <Book 
                            book={searchableBook}
                            moveBookToShelf={this.props.moveBookToShelf}
                            currentShelf={shelf}
                        />
                    </li>
                )}
                )}
                </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks