import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {

		if (!this.props.book) {
			return <div>Select a book to get started.</div>;
		}
		return (
			<div>
				<h3>Details for:</h3>
				<div>{this.props.book.title}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	// whatever is returned here will show up as props inside of BookList
	return {
		// these will be props for BookDetail
		// reducer is creating activeBook piece of state
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);