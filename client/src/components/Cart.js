import React,{useState,useEffect} from "react";
import { connect } from "react-redux";
import { guitarStatusChange, resetGuitars } from "../actions/guitarsActions";
import { bookStatusChange, resetBooks } from "../actions/booksActions";
import axios from "axios";
import {v4} from 'uuid';
import {PDFDownloadLink} from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const Cart = ({
  guitars,
  books,
  guitarStatusChange,
  bookStatusChange,
  resetBooks,
  resetGuitars,
}) => {
  // const [show,setShow] = useState(false);
  // const [pdfdata,setPdfData] = useState({data:{}});
  // useEffect(()=>{
  //   console.log(pdfdata);
  // },[pdfdata])

  let orders = guitars.filter((gt) => gt.status === "added");
  orders = [...orders, ...books.filter((bk) => bk.status === "added")];

  const clickHandler = (e, eachOrder) => {
    const id = eachOrder.id;
    guitars.map((gt) => {
      if (gt.id === id) {
        guitarStatusChange(id, "notAdded");
        return 0;
      }
      return 1;
    });
    books.map((bk) => {
      if (bk.id === id) {
        bookStatusChange(id, "notAdded");
        return 0;
      }
      return 1;
    });
  };

  const orderList = orders.map((eachOrder) => {
    return (
      <div className="eachBook" key={eachOrder.id}>
        <h3>
          {eachOrder.title}(x{eachOrder.quantity})
        </h3>
        <h4>{eachOrder.price}$</h4>
        <button onClick={(e) => clickHandler(e, eachOrder)}>Delete</button>
      </div>
    );
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    const userInfo = {
      username: e.target.username.value,
      email: e.target.emailId.value,
    };
    // post api request over here
    try {
      const body = JSON.stringify({
        orderId:v4(),
        userInfo,
        orderList: orders,
        orderStatus: "notConfirmed",
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("/customer/placeOrder", body, config);
      
      alert("Order Placed! Keep your order ID for future reference!");
      // setShow(true);
    }catch(err){
      console.log(err);
    }
    resetBooks();
    resetGuitars();
  };
  const orderId = v4();
  return (
    <div className="bookContentWrapper">
      <div className="placeOrderButtonWrapper">
        {orderList.length === 0 ? (
          <p></p>
        ) : (
          <form className="cartForm" onSubmit={(e) => submitHandler(e,orderId)}>
            <label htmlFor="username">Name:</label>
            <input style={{width:'100',display:'inline-block'}}type="text" id="username" name="username" required /><br/><br/>
            <label htmlFor="emailId">Email:</label>
            <input style={{width:'100',display:'inline-block'}} type="email" id="emailId" name="uemailId" required /><br/>
            <button className="placeOrderButton" type="submit">
              Place Order
            </button>
            <p>Your Order Id:"<em>{orderId}</em>"Please keep it noted before placing order</p>
            <PDFDownloadLink document={<MyDocument orderId={orderId} />} filename="orderId.pdf">
              Download Order ID
            </PDFDownloadLink>
          </form>
        )}
      </div>
      <div className="bookContent">
        {orderList.length === 0 ? <p>No Orders Yet</p> : orderList}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  guitars: state.guitarsReducer.guitars,
  books: state.booksReducer.books,
});

export default connect(mapStateToProps, {
  guitarStatusChange,
  bookStatusChange,
  resetGuitars,
  resetBooks,
})(Cart);
