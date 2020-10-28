import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Controls = ({books,guitars}) => {
    let totalAdded = 0;
    books.map(book =>{
        if(book.status === 'added') totalAdded += book.quantity;
        return 1;
    });
    guitars.map(guitar =>{
        if(guitar.status === 'added') totalAdded += guitar.quantity;
        return 1;
    });
    return (
        <ul className="controls">
            <li><Link to="/cart">{`Go to Cart (${totalAdded})`}</Link></li>
            <li><Link to="/admin">Admin Panel</Link></li>
        </ul>
    )
}

const mapStateToProps = state => ({
    books:state.booksReducer.books,
    guitars:state.guitarsReducer.guitars
})

export default connect(mapStateToProps)(Controls);