export function selectBook(book) {
    //returns an action = object with type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
