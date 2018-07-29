import React from 'react'
// import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks />
        )}
        />
        <Route path="/" exact render={() => (
          <ListBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp
