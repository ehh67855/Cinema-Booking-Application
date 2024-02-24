import React from "react";
import './OrderConfirm.css';

const OrderConfirm = () => {
    return (
        <div id="orderConfirmPage">
            <h1>Order</h1>
            <h1>Confirmation</h1>
            <h2>Thank You</h2>
            <h5>A receipt has been sent to your email.</h5>
            <h5>Your booking number is: A123</h5>
            <h2>Order Details</h2>
            <p>Senior Tickets: $ </p>
            <p>Adult Tickets: $ </p>
            <p>Chlid Tickets: $ </p>
            <p>Promo Discount: % </p>
            <p>Tax: % </p>
            <p>Total: $ </p>
            <button>Return to Home Page</button>
        </div>
    )
}

export default OrderConfirm;