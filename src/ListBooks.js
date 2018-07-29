import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

class ListBooks extends Component {
    render() {
        const { shelfs, books } = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                {shelfs.map(shelf => 
                    <div key={shelf.shelf}>
                        <Shelf shelf={shelf} books={books}/>
                    </div>
                )}
                
            </div>
            <div className="open-search">
                <Link to="/search">Add a Book</Link>
            </div>
          </div>
        )
    }
}

export default ListBooks;