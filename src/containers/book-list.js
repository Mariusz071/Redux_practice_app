import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookList extends Component {
    renderList () {
         return this.props.books.map((el, i) => {
            return (
                <li key={i} className="list-group-item">{el.title}</li>
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

function mapStateProps(state) {
    //whatever is returned from there will show up as props inside BookList
    return {
        books: state.books
    }
}

export default connect(mapStateProps) (BookList);