## Steps to build myReads Singel Page Application

* create a composition in App.js
 * build a ListBooks component
 * build a SearchBooks Component
* use prop-types to define required formats for interactive inputs
* use BrowserRouter in index.js to be able to switch screens
* if a book is already listed, it should have the same state in list and search page

### Main Page
* is linked from search page - "/" (exact)


### List Books Component
* select options:
 * the default option is the current shelf the book is in
* if comming back from search page, all new entries are already shown

### Search Component
* is linked /search from the main page - needs an own component
* text input to find books
* query lives in the state of this component
 * use escapeRegExp (escapeRegExp from 'escape-string-regexp') to set up search filter
 * sort the books alpabetically (sortBy from 'sort-by')
* books can be added to ListBooks
* reuse code to display search results

### Notes to myself
* use Lifecycle methods to fetch books from the BooksAPI
* refactor component to stateless functional components if thy only have a render method
* 