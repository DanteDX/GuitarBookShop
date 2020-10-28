import React from "react";
import { connect } from "react-redux";
import {
  bookStatusChange,
  bookQuantityDecrease,
  bookQuantityIncrease,
} from "../../actions/booksActions";

const Books = ({
  books,
  bookStatusChange,
  bookQuantityDecrease,
  bookQuantityIncrease,
}) => {
  const clickHandler = (e, book) => {
    const backgroundColor = e.target.style.backgroundColor;
    if (backgroundColor === "green") {
      e.target.style.backgroundColor = "pink";
      e.target.textContent = "Add to Cart";
      bookStatusChange(book.id, "notAdded");
    } else {
      e.target.style.backgroundColor = "green";
      e.target.textContent = "Added";
      bookStatusChange(book.id, "added");
    }
  };
  const quantityIncrease = (e, book) => {
    bookQuantityIncrease(book.id);
  };
  const quantityDecrease = (e, book) => {
    if (book.quantity > 1) {
      bookQuantityDecrease(book.id);
    }
  };
  const bookList = books.map((book) => {
    return (
      <div className="eachBook" key={book.id}>
        <h3>{book.title}(x{book.quantity})</h3>
        <h4>{book.price}$</h4>
        {book.status === "added" ? (
          <div>
            <button
              style={{ backgroundColor: "green" }}
              onClick={(e) => clickHandler(e, book)}
            >
              Added
            </button>
            <button style={{ backgroundColor: "blue" }} onClick={e => quantityIncrease(e,book)}>++</button>
            <button style={{ backgroundColor: "red" }} onClick={e => quantityDecrease(e,book)}>--</button>
          </div>
        ) : (
          <button
            style={{ backgroundColor: "pink" }}
            onClick={(e) => clickHandler(e, book)}
          >
            Add to Cart
          </button>
        )}
      </div>
    );
  });
  return <div className="bookContent">{bookList}</div>;
};

const mapStateToProps = (state) => ({
  books: state.booksReducer.books,
});

export default connect(mapStateToProps, {
  bookStatusChange,
  bookQuantityDecrease,
  bookQuantityIncrease,
})(Books);
