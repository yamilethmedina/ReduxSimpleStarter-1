import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
	// maps over an array of books
	renderList() {
		return this.props.books.map((book) => {
			// for each book in array...
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
				)
		})
	}


	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
			)
	}
}

// take the application state (list of books, active book) as an argument

function mapStateToProps(state) {
	// whatever is returned here will show up as props inside of BookList
	return {
		// the connection between redux and the container
		// will give you access to this.props.books within component
		books: state.books
	};
}

// make use of connect function. return a container
// export the container, not the simple component
export default connect(mapStateToProps)(BookList);