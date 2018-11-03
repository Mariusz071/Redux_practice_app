//State is not app state, this is state this reducer is responsible for
//Reducers are getting 2 properties = state and action
export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}