import React from "react";
import './BookTickets.css';

/*
    Eventually, change the method to submit to use useEffect and store booking info in a booking variable (don't forget to create a submit handler)
*/

const BookTickets = () => {
    return (
        <div id="bkTicksPage">
            <div>
                {/* <div id="emptySpace"></div> */}
                <h1>Booking Tickets for:</h1>
                {/* <img id="profileImg"/> */}
            </div>
            <h2 id="movieTitle">[title of movie here]</h2>
            <form>
                <div className="bkTicksAllFields">
                    <div className="bkTicksFields1Container">
                        <div className="bkTicksFields1">
                            <label>Select showing date:</label>
                            <select name="selectDate">
                                <option value="">Choose a date</option>
                                <option value="option1">option1</option>
                                <option value="option2">option2</option>
                            </select>
                        </div>
                        <div className="bkTicksFields1">
                            <label>Select showing time:</label>
                            <select name="selectTime">
                                <option value="">Choose a time</option>
                                <option value="option1">option1</option>
                                <option value="option2">option2</option>
                            </select>
                        </div>
                        <div className="bkTicksFields1">
                            <label>Choose number of tickets:</label><input type="number"/>
                        </div>
                    </div>
                    <div className="vertLine"></div>
                    <div className="bkTicksFields2">
                        <h4>Select age per ticket</h4>
                        <label>Child ($10):</label><input type="number"/>
                        <label>Adult ($10):</label><input type="number"/>
                        <label>Senior ($10):</label><input type="number"/>
                    </div>
                </div>
                <h4 className="centeredH4">Select desired seats</h4>
                <h6>(select the seats you want by clicking the seats on the image below)</h6>
                <img id="seatLayoutImg" src="https://cinemaartscentre.org/wp-content/uploads/2021/07/Cinema-1-1024x926.jpg" alt="image depicting the layout of seats in a movie theater"/>
                <div className="submitCancelBtn">
                    <input type="submit" value="Submit"></input>
                    <input type="button" value="Cancel"></input>
                </div>
            </form>            
        </div>
    )
}

export default BookTickets;