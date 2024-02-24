import React from "react";
import './Checkout.css';

/*
    Eventually, change the method to submit to use useEffect and store checkout info in a checkout variable (don't forget to create a submit handler)
*/

const Checkout = () => {
    return (
        <div id="checkoutPage">
            <h1>Checkout</h1>
            <div className="checkoutArea">
                <form id="formSection">
                    <div className="shippingSection">
                        <h2>Shipping Address</h2>
                        <label>Address:</label><input value="Saved Address"/>
                    </div>
                    <div className="paymentSection">
                        <h2>Payment</h2>
                        <label>Card:</label>
                        <select>
                            <option value=""></option>
                            <option value="option1">option1</option>
                            <option value="option2">option2</option>
                        </select>
                        <label>Promotion Code:</label><input/>
                        <button id="addCardBtn">Add Card</button>
                    </div>
                </form>
                <div className="orderSummary">
                    <h2>Order Summary</h2>
                    <p>Senior Tickets: $ </p>
                    <p>Adult Tickets: $ </p>
                    <p>Chlid Tickets: $ </p>
                    <p>Promo Discount: % </p>
                    <p>Booking fees: $</p>
                    <p>Sales tax: %</p>
                    <p>Total: $ </p>
                </div>
            </div>
            <div className="confirmCancelBtn">
                <input type="submit" form="formSection" value="Confirm"></input>
                <input type="button" value="Cancel"></input>
            </div>
        </div>
    )
}

export default Checkout;