import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../img/spinner.svg";
import { v4 } from "uuid";

const Admin = () => {
  //get api to fetch all of the placeOrders
  const [orders, setOrders] = useState([]);
  const getInfo = async () => {
    try {
      const placeOrders = await axios.get("/customer/placeOrder");
      const data = placeOrders.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getInfo().then((data) => {
      setOrders((orders) => [...orders, ...data]);
    });
  }, []);

  orders.length === 0 ? console.log("No data yet") : console.log(orders);
  const approveHandler = async (e, orderId) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { orderId };
    try {
      const response = await axios.post(
        "/admin/approveOrder",
        JSON.stringify(body),
        config
      );
      //  window.location.reload(false);
      getInfo().then((data) => {
        setOrders([...data]);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const declineHandler = async (e, orderId) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { orderId };
    try {
      const response = await axios.post(
        "/admin/declineOrder",
        JSON.stringify(body),
        config
      );
      //  window.location.reload(false);
      getInfo().then((data) => {
        setOrders([...data]);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = async (e, _id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = { _id };
    try {
      const response = await axios.post(
        "/admin/deleteOrder",
        JSON.stringify(body),
        config
      );
      //  window.location.reload(false);
      getInfo().then((data) => {
        setOrders([...data]);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const orderList = orders.map((eachOrder) => {
    return (
      <div className="eachOrderContainer" key={v4()}>
        {eachOrder.orderStatus === "notConfirmed" ? (
          <div>
            <button
              className="approveButton"
              onClick={(e) => approveHandler(e, eachOrder.orderId)}
            >
              Approve
            </button>
            <button
              className="declineButton"
              onClick={(e) => declineHandler(e, eachOrder.orderId)}
            >
              Decline
            </button>
          </div>
        ) : (
          <p>
            #OrderChecked{" "}
            {eachOrder.orderStatus === "confirmed" ? (
              <button
                className="declineButton reconfirmDecline"
                onClick={(e) => declineHandler(e, eachOrder.orderId)}
              >
                Order Approved already. Wanna decline?
              </button>
            ) : (
              <button
                className="approveButton reconfirmApproval"
                onClick={(e) => approveHandler(e, eachOrder.orderId)}
              >
                Order declined already. Wanna approve?
              </button>
            )}
          </p>
        )}
        <button onClick={(e) => deleteHandler(e, eachOrder._id)}>
          Delete Order
        </button>

        <h2 style={{ marginBottom: "0" }}>
          Total:
          {eachOrder.orderList
            .map((x) => x.price * x.quantity)
            .reduce((a, b) => a + b)}
        </h2>
        <div className="eachOrder" key={eachOrder.orderId}>
          <h3>Order ID:{eachOrder.orderId}</h3>
          <h3 style={{ textAlign: "center" }}>
            Name:{eachOrder.userInfo.username}
          </h3>
          <h3>Email:{eachOrder.userInfo.email}</h3>
          {eachOrder.orderList.map((eachOrderProduct) => {
            return (
              <div className="eachOrderProduct" key={eachOrderProduct._id}>
                <h4>
                  {eachOrderProduct.title}(Quantity:{eachOrderProduct.quantity})
                </h4>
                <p>
                  Price:{eachOrderProduct.price}x{eachOrderProduct.quantity}=
                  {Number(eachOrderProduct.price) *
                    Number(eachOrderProduct.quantity)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className="adminContent">
      {orderList.length === 0 ? (
        <div>
          <p style={{color:'red'}}>If loads for very long, means No Orders yet</p>
          <img
            style={{ width: "100%", height: "300px" }}
            src={Spinner}
            alt="spinner"
          />
        </div>
      ) : (
        orderList
      )}
    </div>
  );
};

export default Admin;
