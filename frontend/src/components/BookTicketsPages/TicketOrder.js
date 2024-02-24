import React from "react";
import './TicketOrder.css';

/*
    Eventually, change the method to submit to use useEffect and update ticket amounts in a booking variable (don't forget to create a submit handler)
*/

const TicketOrder = () => {
    return (
        <div id="ticketOrderPage">
            <h1>Order Summary</h1>
            <h2 id="ticketAmntHdr">Ticket Amounts</h2>
            <div id="formContainer">
                <form id="ticketAmountForm">
                    <label>Child ($10):</label><input type="number"/>
                    <label>Adult ($10):</label><input type="number"/>
                    <label>Senior ($10):</label><input type="number"/>
                    <label>Total:</label><input disabled/>
                </form>
            </div>
            <div className="orderCost">
                <h2>Costs</h2>
                <p>Senior Tickets: $ </p>
                <p>Adult Tickets: $ </p>
                <p>Chlid Tickets: $ </p>
                <p>Total: $ </p>
            </div>
            <div className="proceedCancelBtn">
                <input type="submit" form="ticketAmountForm" value="Proceed to checkout"></input>
                <input type="button" value="Cancel"></input>
            </div>
        </div>
    )
}

export default TicketOrder;