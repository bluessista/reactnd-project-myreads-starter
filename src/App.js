import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends Component {
  state = {
    shelfs: [
      {
        name: 'Currently Reading',
        shelf: 'currentlyReading',
      },
      {
        name: 'Want to Read',
        shelf: 'wantToRead',
      },
      {
        name: 'Read',
        shelf: 'read',
      }
    ],
    books: []
  }
 
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  // move books between shelfs
  moveBookToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.componentDidMount()
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks 
            moveBookToShelf={this.moveBookToShelf}
            books={this.state.books}
            />)}
            
          />
        <Route path="/" exact render={() => (
          <ListBooks 
            shelfs={this.state.shelfs} 
            books={this.state.books}
            moveBookToShelf={this.moveBookToShelf}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
