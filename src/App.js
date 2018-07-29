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
      books: this.setState({ books })
      console.log(this.state.books)
    })
  }
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (<SearchBooks />)} />
        <Route path="/" exact render={() => (
          <ListBooks shelfs={this.state.shelfs} books={this.state.books}/>
        )}
        />
      </div>
    )
  }
}

export default BooksApp
