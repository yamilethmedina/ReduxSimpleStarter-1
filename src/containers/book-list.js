import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	// maps over an array of books
	renderList() {
		return this.props.books.map((book) => {
			// for each book in array...
			return (
				// add click event handler
				<li key={book.title} onClick={ () => this.props.selectBook(book)} className="list-group-item">
				{book.title}</li>
				);
		});
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

// anything returned from this function will end up as props on the BookList container
// this.props.selectBook will call action creator 
function mapDispatchToProps(dispatch) {
	// whenever selectBook is called, the result should be passed to all of our reducers
	// dispatch makes sure that the actions in the object flow to the reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// make use of connect function. return a container
// export the container, not the simple component
// promote BookList from component to a container - it needs to know about this new dispatch method, selectBook. make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);