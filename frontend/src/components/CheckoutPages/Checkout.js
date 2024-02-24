import React from "react";
import './Checkout.css';

/*
    Eventually, change the method to submit to use useEffect and store checkout info in a checkout variable (don't forget to create a submit handler)
*/

const Checkout = () => {
    return (
        <div>
            <h1>Checkout</h1>
            <div className="checkoutArea">
                <form id="formSection">
                    <h2>Shipping Address</h2>
                    <label>Address:</label><input value="Saved Address"/>
                    <h2>Payment</h2>
                    <div className="paymentSection">
                        <label>Card:</label>
                        <select>
                            <option value=""></option>
                            <option value="option1">option1</option>
                            <option value="option2">option2</option>
                        </select>
                        <label>Promotion Code:</label><input/>
                        <button>Add Card</button>
                    </div>
                </form>
                <div className="orderSummary">
                    <h2>Order Summary</h2>
                    <p>Senior Tickets: $ </p>
                    <p>Adult Tickets: $ </p>
                    <p>Chlid Tickets: $ </p>
                    <p>Promo Discount: % </p>
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