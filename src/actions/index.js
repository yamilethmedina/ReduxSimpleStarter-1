// action creators

export function selectBook(book) {
	// selectBook is an ActionCreator, so it needs to return an action (an object with a type property)
	return {
		// actions usually have 2 values: a type (describing the purpose) and a payload (more info about the action that will be taken)
		// the type is usually a constant or string CAPITALIZED_LIKE_THIS
		type: 'BOOK_SELECTED',
		payload: book

	};
}