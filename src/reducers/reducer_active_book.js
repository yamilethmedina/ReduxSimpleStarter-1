// reducers are only called when an action occurs
// State argument is not application state; it's only the state that this reducer is responsible for

// when app boots up, the application state will be null default

export default function(state = null, action) {
	
	// case when you do care about the action
	switch(action.type) {
	// this action payload is the selected book
		case 'BOOK+SELECTED':
		return action.payload;
	}	

	// base case to return the current state if you don't care about this particular action
	// when the user hasn't clicked anything yet
	return state;
}