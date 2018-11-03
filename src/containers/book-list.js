import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {selectBook} from "../actions/index";
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList () {
         return this.props.books.map((book, i) => {
            return (
                <li onClick={() => this.props.selectBook(book)}
                    key={i} className="list-group-item">{book.title}</li>
            )
         })
    }
    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever is returned from there will show up as props inside BookList
    return {
        books: state.books
    }
}

//Anything returned from this function will end up as props on BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, result will be passed to all reducers
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch)
}

//Promote BookList from component to a container. It needs to know about mapDispatchToProps to make it available
//as a props
export default connect(mapStateToProps, mapDispatchToProps) (BookList);